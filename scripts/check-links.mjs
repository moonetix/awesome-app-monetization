#!/usr/bin/env node
// Checks every link in README.md, one request at a time with a pause in between.
// Zero dependencies. Node 20 or later.
//
// Usage:
//   node scripts/check-links.mjs [file] [--delay=1000] [--strict] [--json]
//
// Result per link:
//   ok    2xx, directly or after redirects
//   warn  401, 403, 429 or 999: the site answered but refuses automated clients
//   fail  404, 410, other 4xx, 5xx, DNS error, timeout, or too many redirects
//
// Exit code 1 when any link fails (with --strict, also when any link warns).
// GitHub repository links are checked through the GitHub API, so a renamed,
// deleted or archived repository is reported. Set GITHUB_TOKEN to raise the
// API rate limit (the workflow does this).

import { readFile } from 'node:fs/promises';

const args = process.argv.slice(2);
const file = args.find((a) => !a.startsWith('--')) ?? 'README.md';
const delayArg = args.find((a) => a.startsWith('--delay='));
const delayMs = delayArg ? Number(delayArg.split('=')[1]) : 1000;
const strict = args.includes('--strict');
const asJson = args.includes('--json');

const USER_AGENT = 'Mozilla/5.0 (compatible; awesome-app-monetization-link-check/1.0; +https://github.com/moonetix/awesome-app-monetization)';
const TIMEOUT_MS = 20000;
const MAX_REDIRECTS = 8;
const WARN_STATUSES = new Set([401, 403, 429, 999]);

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

function extractLinks(markdown) {
  const found = new Set();
  const inline = /\]\((https?:\/\/[^)\s]+)\)/g;
  const angle = /<(https?:\/\/[^>\s]+)>/g;
  for (const re of [inline, angle]) {
    for (const m of markdown.matchAll(re)) found.add(m[1]);
  }
  return [...found];
}

function githubRepo(url) {
  const m = /^https:\/\/github\.com\/([A-Za-z0-9_.-]+)\/([A-Za-z0-9_.-]+)\/?(?:$|[#?]|\/tree\/|\/blob\/)/.exec(url);
  if (!m) return null;
  const reserved = new Set(['sponsors', 'orgs', 'features', 'marketplace', 'topics', 'collections', 'about', 'pricing']);
  if (reserved.has(m[1].toLowerCase())) return null;
  return { owner: m[1], name: m[2].replace(/\.git$/, '') };
}

async function request(url, headers = {}) {
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), TIMEOUT_MS);
  try {
    const res = await fetch(url, {
      method: 'GET',
      redirect: 'manual',
      signal: controller.signal,
      headers: {
        'user-agent': USER_AGENT,
        accept: 'text/html,application/xhtml+xml,application/json;q=0.9,*/*;q=0.8',
        'accept-language': 'en-US,en;q=0.8',
        ...headers,
      },
    });
    // Only the status matters. Drop the body without downloading it.
    await res.body?.cancel().catch(() => {});
    return res;
  } finally {
    clearTimeout(timer);
  }
}

async function checkUrl(url) {
  const chain = [];
  let current = url;
  for (let hop = 0; hop <= MAX_REDIRECTS; hop++) {
    const res = await request(current);
    chain.push(res.status);
    if (res.status >= 300 && res.status < 400 && res.headers.get('location')) {
      current = new URL(res.headers.get('location'), current).href;
      await sleep(delayMs);
      continue;
    }
    if (res.status >= 200 && res.status < 300) return { result: 'ok', status: res.status, chain, final: current };
    if (WARN_STATUSES.has(res.status)) return { result: 'warn', status: res.status, chain, final: current };
    return { result: 'fail', status: res.status, chain, final: current };
  }
  return { result: 'fail', status: 'too many redirects', chain, final: current };
}

async function checkGithubRepo(repo) {
  const headers = { accept: 'application/vnd.github+json' };
  if (process.env.GITHUB_TOKEN) headers.authorization = `Bearer ${process.env.GITHUB_TOKEN}`;
  const res = await fetch(`https://api.github.com/repos/${repo.owner}/${repo.name}`, {
    redirect: 'manual',
    signal: AbortSignal.timeout(TIMEOUT_MS),
    headers: { 'user-agent': USER_AGENT, ...headers },
  });
  if (res.status === 200) {
    const data = await res.json();
    if (data.archived) return { result: 'warn', status: 'archived', chain: [200], final: data.html_url };
    const moved = data.full_name.toLowerCase() !== `${repo.owner}/${repo.name}`.toLowerCase();
    return { result: moved ? 'warn' : 'ok', status: moved ? `moved to ${data.full_name}` : 200, chain: [200], final: data.html_url };
  }
  await res.body?.cancel().catch(() => {});
  if (res.status === 301) return { result: 'warn', status: 'moved', chain: [301], final: res.headers.get('location') };
  if (res.status === 403 || res.status === 429) return { result: 'warn', status: `GitHub API ${res.status} (rate limit)`, chain: [res.status], final: '' };
  return { result: 'fail', status: res.status, chain: [res.status], final: '' };
}

async function check(url) {
  const repo = githubRepo(url);
  try {
    return repo ? await checkGithubRepo(repo) : await checkUrl(url);
  } catch (err) {
    const reason = (err.name === 'AbortError' || err.name === 'TimeoutError') ? 'timeout' : (err.cause?.code ?? err.message);
    return { result: 'fail', status: reason, chain: [], final: url };
  }
}

const markdown = await readFile(file, 'utf8');
const links = extractLinks(markdown);
const results = [];
for (const [i, url] of links.entries()) {
  if (i > 0) await sleep(delayMs);
  let r = await check(url);
  if (r.result === 'fail') {
    // One retry for network hiccups.
    await sleep(Math.max(delayMs, 3000));
    r = await check(url);
  }
  results.push({ url, ...r });
  if (!asJson) {
    const label = r.result.toUpperCase().padEnd(4);
    const via = r.chain.length > 1 ? ` (${r.chain.join(' > ')})` : '';
    console.log(`${label} ${r.status} ${url}${via}`);
  }
}

const count = (kind) => results.filter((r) => r.result === kind).length;
if (asJson) {
  console.log(JSON.stringify(results, null, 2));
} else {
  console.log(`\n${links.length} links: ${count('ok')} ok, ${count('warn')} warn, ${count('fail')} fail`);
}
const failed = count('fail') > 0 || (strict && count('warn') > 0);
process.exit(failed ? 1 : 0);
