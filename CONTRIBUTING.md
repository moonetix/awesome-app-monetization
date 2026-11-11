# Contributing

An entry earns its place by being accurate and useful to someone shipping a product. Please read these rules before you open a pull request.

## What gets in

1. **Official links only.** The provider's own site, docs or repository. No affiliate links, referral codes, tracking parameters, URL shorteners, reviews or listicles.
2. **Live today.** The link returns HTTP 200, directly or after a normal redirect, to an automated client. Products that have shut down, been folded into another product, or answer only behind a login are left out.
3. **On topic.** Something a developer or publisher uses to earn revenue, measure it, protect it, or stay within platform rules while doing so.
4. **Open source means a real repository.** Entries in [Open source tools and libraries](README.md#open-source-tools-and-libraries) must be public, not archived, and maintained by the project or vendor named.
5. **Rewards for completed offers only.** No tools or guides that pay users for ratings, reviews, joins, invites, likes or other engagement, and nothing aimed at users under 16.

## Format

- One line per entry: `- [Name](https://link) - Description.`
- The description is one short, factual sentence based on the provider's own pages. It starts with a capital letter and ends with a period.
- No superlatives, no earnings or payout claims, no comparisons with other entries.
- Sort entries A to Z within each section, ignoring case and punctuation. In Offerwalls, Moonetix stays first.
- US English. No emojis. Use a plain hyphen, never an en or em dash.

## Before you submit

```bash
node scripts/lint-list.mjs          # format, order, duplicates, Contents
node scripts/check-links.mjs        # every link, one request per second
```

Both scripts need Node 20 or later and nothing else. The link check takes a few minutes because it waits a second between requests.

## How to submit

- Open a pull request that edits `README.md`, one entry per pull request when possible, and say why it belongs.
- Or open an issue with the "Suggest an entry" form.
- If you work for the company you are adding, say so.

By contributing, you agree that your contribution is released under [CC0 1.0](LICENSE).
