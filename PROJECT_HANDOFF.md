# PolicyRix — Project Handoff (as of 2026-10-12)

Paste this whole file into a new chat first, then type the daily command (section 2).

## 1. Who / what
- Owner: Subham Mohanty (Founder/Editor), site: policyrix.com, repo `skmohanty2628/PolicyGlobal`, Next.js 14.2.5 App Router + TypeScript + Tailwind on Vercel.
- Local folder: `C:\Users\subha\Downloads\web apps\policyglobal\policyglobal` (Windows, PowerShell, Python NOT installed locally).
- Goal: Google AdSense approval (rejected: "Low value content") + more traffic.
- Content = `content/news/YYYY-MM-DD.json` (20-field schema), read by `lib/news.ts`. Old thin articles (840, Jun 10–Aug 6) were moved to `content/archive/` (NOT read by site; kept in git). Live site = articles from 2026-10-12 onward.

## 2. Daily command the owner types
> Daily run: write today's 6 new deep articles (800+ words each, real researched sources) into content/news/ in my folder, rewrite/upgrade [N] old articles from content/archive/ into 800+ word verified articles (publish them as new dated entries), validate, and give me only the git commands.

Claude then must:
1. Research deeply (WebSearch extended + WebFetch + Chrome MCP; 12–20+ searches; cross-verify every number/date/quote with a 2nd source; real source URLs only). Take as long as needed; accuracy beats speed.
2. Write `content/news/<today>.json` directly into the owner's folder (stage/commit via device bridge; do not paste JSON in chat). Run validation in sandbox first (`validate_json.py` logic; sandbox copy at /home/claude/site/policyglobal may be gone — re-clone or re-implement checks).
3. Old-article upgrades: pick the strongest archived stories, re-research them, rewrite to 800+ words with only verified facts (never invent), and add them in the day's file (or a separate dated file) with new unique IDs/slugs and updated `verified_at`; move the old entry out of archive only if replaced (tell owner which). Typical: 5–10 per day.
4. Reply with ONLY PowerShell git commands (add/commit/push) plus a 2-line summary. Reminder after push: click "Trigger Reindex Now" in /admin; Search Console → Request Indexing for new URLs (Google ignores IndexNow).
5. Never push to the repo from the sandbox (proxy 403); owner pushes. Never click AdSense "I confirm I have fixed the issues".

## 3. Editorial rules (strict)
- 6 articles/day (validator allows 6–15), each `description` 800+ words (validator minimum 550) of real analysis, not summary.
- Max 4 US per day. Valid countries: United States, India, United Kingdom, Canada, Australia, UAE (never "United Arab Emirates"), Singapore, Germany, France, Japan. (South Korea is not approved; it still exists in `lib/constants.ts` COUNTRIES but is hidden unless an article uses it.)
- Valid categories: Insurance, Personal Finance, Banking, Markets, FinTech, Regulation, Economy, Healthcare Insurance, Auto Insurance, Life Insurance, Loans & Mortgage.
- Real source URLs only (Reuters, CNBC, Bloomberg, FT, KFF, regulators, central banks preferred). No invented news/quotes. Remove any claim that can't be verified.
- Slugs lowercase-hyphen. All 20 fields required: id (`YYYY-MM-DD-NNN`), date, title, slug, summary, description, category, country, source_name, source_url, image_url, image_alt, video_url, published_at, verified_at, verification_status ("Verified" only if multi-source), key_points[], why_it_matters, tags[], reading_time.
- Images: real OG image or Unsplash with "(illustrative)" in alt text.
- `validate_json.py`: MIN 6 / MAX 15 per day, `CHECK_FROM = '2026-10-12'` (ignores older files).

## 4. What was done (all live, verified via Chrome on 2026-10-12)
- Security: admin password no longer hardcoded; login checks `REINDEX_SECRET` (Vercel env) server-side; `/api/analytics` and `/api/gsc` return 401 without bearer token.
- AdSense visibility: raw `<script async src=...adsbygoogle.js?client=ca-pub-7617760862667547>` in `<head>`; `ads.txt` present.
- Compliance: Google Consent Mode v2 + `CookieConsent` banner (localStorage `pr-consent`); full privacy policy; contact page with working form (`/api/contact`, Resend); false claims removed from About/Footer; corrections policy.
- New content/features: 5 evergreen guides (`/guides`), 3 calculators (`/tools`: loan EMI, life insurance needs, deductible break-even), RSS `/feed.xml`, masthead, share buttons, reading progress, dynamic homepage (`HomeFeed`, "Most covered", Learn & Calculate), dynamic ticker + Daily Archive link, sitemap incl. guides/tools.
- Archive change: header/footer/homepage/sitemap/category/country pages now list ONLY categories/countries that have ≥1 article (`getActiveCategories/Countries` in `lib/news.ts`); empty category/country URLs return 404.
- 2026-10-12.json: 6 articles (US×2, India×2, UK, Australia), 868–956 words each, pushed (commit fcbeab9); archive+code commit 26dd07d pushed. Live check: all pages 200, empty pages 404, AdSense tag present, 33 sitemap URLs.

## 5. Owner-side to-dos (not yet confirmed)
- Set/rotate `REINDEX_SECRET` in Vercel (Settings → Environment Variables → Production), then Redeploy. Admin password = this value. (Owner could not log in with "Subham000" — value likely unset/different.)
- Choose primary domain (apex vs www; site currently redirects to www.policyrix.com) and keep consistent in Search Console/AdSense.
- Confirm hello@policyrix.com (contact addresses) mailboxes exist; set `RESEND_API_KEY` for forms.
- Enable AdSense Privacy & messaging consent message (EEA/UK).
- Click Trigger Reindex Now after each push; Request Indexing in Search Console for homepage + new articles.
- Request AdSense re-review only after ~3–4 weeks of consistent daily quality publishing.

## 6. Environment notes / gotchas
- Device bridge can write files to the owner's folder (`device_commit_files`, staged from /mnt/user-data/outputs/...) but cannot delete/move files or run shell on his PC → give him PowerShell commands for moves/deletes.
- Sandbox: run Next with `node node_modules/next/dist/bin/next build`; sandbox cannot load Unsplash images (not a site bug); don't `pkill -f "next start"` (kills own shell).
- A Stop hook may nag about unpushed sandbox commits: sandbox pushes are blocked; `git fetch origin && git reset --hard origin/main` aligns the sandbox copy.
- Windows CRLF warnings on `git add` are harmless.
- Memory notes for this project are under /projects/019eb33f-.../ (editorial-pipeline.md, decisions-and-learnings.md, overview.md).

## 7. Daily log
- 2026-10-12: 6 new articles (content/news/2026-10-12.json).
- 2026-10-13: 6 new articles (content/news/2026-10-13.json: ACA 2027 premiums US, BoJ hike Japan, PRA thresholds UK, Ontario storm Canada, Munich Re nuclear verdicts Germany, LIC new plans India).
- 2026-10-13 old-article upgrades (rewritten 850-970 words, re-verified, kept original ids/dates/slugs, saved into content/news/<original-date>.json; originals remain in content/archive/ and are ignored): 2026-08-04-012 (UK captive regime), 2026-08-05-005 (Prudential-HCL India), 2026-08-05-011 (UAE Central Bank Law), 2026-08-06-012 (Singapore MAS PCC), 2026-08-06-015 (AXA).
- 2026-10-14: 6 new articles (content/news/2026-10-14.json: US CPI 3.7% Sept; Social Security 3.6% COLA 2027; Medicare 2027 premiums/OE; MAS holds S$NEER band; ICICI Life Q2 FY27; RBA FSR + APRA climate stress test).
- 2026-10-14 old-article upgrades (800+ words, merged into existing/new content/news/<original-date>.json): 2026-08-05-010 (MAS/ABS ACT taskforce), 2026-08-05-013 (Canada mortgage renewals + BoC 2.25%), 2026-08-06-010 (APRA minor updates), 2026-08-04-015 (UAE CBUAE Sept QER; growth corrected from 5.6% to 1.6%), 2026-06-10-005 (India 100% FDI; IRDAI PEPF article skipped as unverifiable, still in archive).
- Remember: when upgrading into a date file that already exists, MERGE by id, never overwrite.
- 2026-10-15: 6 new articles (content/news/2026-10-15.json: big-bank Q3 results US; European insurers' climate retreat UK; SEBI asks IRDAI for insurance data in CAS India; Australia jobs 4.7% and RBA; GDV Germany H1 natural-hazard losses; Ontario auto accident-benefits reform Canada).
- 2026-10-15 old-article upgrades (all in content/news/2026-06-10.json, merged by id): 2026-06-10-003 (Swiss Re $424bn gap + RiskScan), 2026-06-10-009 (FCA premium finance), 2026-06-10-011 (US auto insurance, Insurify mid-year; unverified Zebra/DUI claims removed), 2026-06-10-013 (BaFin cyber survey), 2026-06-10-014 (MAS finfluencer rules).
- 2026-10-17: 6 new articles (content/news/2026-10-17.json: Progressive Q3 US; Marsh on broad AI exclusions US; Swiss Re UK liability claims/litigation funding UK; Japan FSA suspends Prudential Life new sales; French supermarket fridge cyberattack and cyber cover; Australia over-65s private health rebate bill).
- 2026-10-17 old-article upgrades (800+ words, merged by id): 2026-06-10-002 (Medicaid/KFF; unverified 11.8M/3.1M/RAND claims removed), 2026-06-10-010 (APRA CPS 230 amendments), 2026-06-10-015 (cyber insurance market; rebuilt from Munich Re + Oct 16 reports), 2026-06-11-007 (Florida reinsurance; unverified cat-bond/Howden claims removed), 2026-06-11-003 (AM Best D&O). Skipped 2026-06-11-008 (ECB private credit): claims not verifiable (ESAs spring update was Mar 27, 2026).
- Spare topics: Fitch warning on France (A+ kept Aug 28, 2026; 2027 deficit target 5% vs Fitch 5.5%; debt 119% GDP); CCC Intelligent Solutions take-private by GTCR/Elliott; Aon: Australian medical plan costs to outpace inflation in 2027; QBE commercial motor share.
- Note: the sandbox cannot push to GitHub; sync the sandbox from the user's folder (device_stage_files) at the start of each run before merging upgrades.
- Next upgrade candidates (not yet done): any other archived story with lasting value; skip price/market-move items. Never reuse an upgraded id.
- Topics already covered recently (avoid duplicates): Fed hike/mortgage rates (Oct 12), Hurricane Isaias, IRDAI commissions, RBI 5.50%, VW car finance UK, ASIC insurers letter, plus the Oct 13 list above.
- 2026-10-17 third old-article batch (800+ words, merged by id into original-date files): 2026-06-11-013 (Triple-I/Milliman), 2026-06-12-014 (Fitch Florida), 2026-06-12-006 (Fitch APAC), 2026-06-12-003 (USAA), 2026-06-11-006 (Acrisure), 2026-06-11-001 (W.R. Berkley), 2026-06-12-012 (Ajit Jain/Hormuz), 2026-06-13-014 (Fitch Japan/Korea M&A), 2026-06-13-004 (WTW specialty rates), 2026-06-14-006 (Moody's private credit; rebuilt around the $807bn figure). Unverifiable claims removed in several. Note: the second batch (u1-u10) is delivered together with this one.
- 2026-10-17 fourth old-article batch (800+ words): 2026-06-13-011 (Lockton FY26), 2026-06-13-008 (Kemper Q1; unverified stock-fall and Newins/Confie claims removed), 2026-06-13-013 (Lloyd's 2025/Fitch), 2026-06-13-015 (Artex property), 2026-06-13-010 (Alpen GCC; unverified UAE $25.1bn/IMF removed), 2026-06-15-005 (PayPay/T&D Life; funding corrected), 2026-06-15-004 (IRDAI exec pay; effective FY26-27), 2026-06-14-012 (Ontario auto reform via FSRA), 2026-06-14-015 (KBRA/NAIC PLR), 2026-06-13-003 (NAIC data centre ratings; notes conflicting reports on discretion-amendment timing). Spare: 2026-06-14-005 duplicates 06-13-003 topic.
