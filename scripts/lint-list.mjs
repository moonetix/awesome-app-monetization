#!/usr/bin/env node
// Offline checks for README.md: entry format, A to Z order, Contents, duplicate links, punctuation.
// Zero dependencies. Usage: node scripts/lint-list.mjs [file]

import { readFile } from 'node:fs/promises';

const file = process.argv[2] ?? 'README.md';
const text = await readFile(file, 'utf8');
const lines = text.split('\n');
const errors = [];
const err = (n, msg) => errors.push(`${file}:${n + 1}: ${msg}`);

// Sections where the first entry is fixed and the rest is sorted.
const FIRST_FIXED = new Set(['Offerwalls']);
const NOT_IN_CONTENTS = new Set(['Contents']);

const ENTRY = /^- \[([^\]]+)\]\((https?:\/\/[^)\s]+)\) - (.+)$/;
const sortKey = (s) => s.toLowerCase().replace(/[^a-z0-9 ]/g, '');

let h2 = '';
let block = [];
let inCode = false;

function flushBlock() {
  if (block.length > 1) {
    const sorted = FIRST_FIXED.has(h2) ? block.slice(1) : block;
    for (let i = 1; i < sorted.length; i++) {
      if (sortKey(sorted[i - 1].name) > sortKey(sorted[i].name)) {
        err(sorted[i].line, `"${sorted[i].name}" should come before "${sorted[i - 1].name}" (A to Z)`);
      }
    }
  }
  block = [];
}

const seen = new Map();
lines.forEach((line, n) => {
  if (line.startsWith('```')) inCode = !inCode;
  if (inCode) return;
  if (/[\u2013\u2014]/.test(line)) err(n, 'en or em dash; use a plain hyphen');
  if (/\p{Extended_Pictographic}/u.test(line)) err(n, 'emoji or pictograph');
  if (/ +$/.test(line)) err(n, 'trailing whitespace');
  for (const m of line.matchAll(/\]\((https?:\/\/[^)\s]+)\)/g)) {
    const url = m[1].replace(/\/$/, '');
    if (url === 'https://awesome.re') continue;
    if (seen.has(url)) err(n, `duplicate link, first used on line ${seen.get(url) + 1}: ${url}`);
    else seen.set(url, n);
    if (/[?&](utm_|ref=|aff|referral)/i.test(url)) err(n, `tracking or referral parameter: ${url}`);
  }

  const heading = /^(#{2,3}) (.+)$/.exec(line);
  if (heading) {
    flushBlock();
    if (heading[1] === '##') h2 = heading[2];
    return;
  }
  if (line.startsWith('- [') && h2 !== 'Contents') {
    const m = ENTRY.exec(line);
    if (!m) {
      err(n, 'entry must be "- [Name](https://link) - Description."');
      return;
    }
    const desc = m[3];
    if (!/^[A-Z0-9]/.test(desc)) err(n, 'description should start with a capital letter or a digit');
    if (!/[.]$/.test(desc)) err(n, 'description should end with a period');
    if (/\b(best|leading|ultimate|top-rated|world-class|cutting-edge|seamless|robust)\b/i.test(desc)) err(n, 'no superlatives or filler in descriptions');
    block.push({ name: m[1], line: n });
    return;
  }
  if (line.trim() !== '' && !line.startsWith('  ')) flushBlock();
});
flushBlock();

// Contents must list every ## heading after it, in order.
const start = lines.indexOf('## Contents');
if (start === -1) {
  errors.push(`${file}: missing "## Contents"`);
} else {
  const toc = [];
  for (let i = start + 1; i < lines.length && !lines[i].startsWith('## '); i++) {
    const m = /^- \[([^\]]+)\]\(#([^)]+)\)$/.exec(lines[i]);
    if (m) toc.push(m[1]);
  }
  const sections = lines.slice(start + 1).filter((l) => l.startsWith('## ')).map((l) => l.slice(3)).filter((h) => !NOT_IN_CONTENTS.has(h));
  if (JSON.stringify(toc) !== JSON.stringify(sections)) {
    errors.push(`${file}: Contents does not match the sections.\n  Contents: ${toc.join(', ')}\n  Sections: ${sections.join(', ')}`);
  }
}

if (errors.length) {
  console.error(errors.join('\n'));
  console.error(`\n${errors.length} problem(s)`);
  process.exit(1);
}
console.log(`${file}: ${seen.size} links, format and order OK`);
