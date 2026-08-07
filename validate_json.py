import json, os, sys
from collections import defaultdict

news_dir = 'content/news'

# ✅ 'South Korea' removed — only these 10 countries are approved per editorial
# rules. It was incorrectly included here, which is why 38 South Korea articles
# passed validation despite not being an approved country.
VALID_COUNTRIES = {
    'United States', 'India', 'United Kingdom', 'Canada',
    'Australia', 'UAE', 'Singapore', 'Germany',
    'France', 'Japan'
}

MAX_US_PER_DAY = 4

VALID_CATEGORIES = {
    'Insurance', 'Personal Finance', 'Banking', 'Markets',
    'FinTech', 'Regulation', 'Economy', 'Healthcare Insurance',
    'Auto Insurance', 'Life Insurance', 'Loans & Mortgage'
}

MIN_DESCRIPTION_WORDS = 550  # body must be substantive, not thin content

errors = []
warnings = []
total = 0

files = sorted([f for f in os.listdir(news_dir) if f.endswith('.json')], reverse=True)
recent_files = files[:3]

for fname in recent_files:
    with open(os.path.join(news_dir, fname), encoding='utf-8') as f:
        data = json.load(f)

    # ✅ New: block empty daily files — these previously shipped as live pages
    # with zero publisher-content (e.g. 2026-08-02.json, 2026-08-03.json).
    if len(data) == 0:
        errors.append(f"❌ EMPTY FILE: {fname} has 0 articles — this would ship a live page with no content")
        continue

    if len(data) != 15:
        errors.append(f"❌ WRONG ARTICLE COUNT: {fname} has {len(data)} articles (must be exactly 15)")

    us_count = sum(1 for a in data if a.get('country') == 'United States')
    if us_count > MAX_US_PER_DAY:
        errors.append(f"❌ TOO MANY US ARTICLES: {fname} has {us_count} (max {MAX_US_PER_DAY})")

    for a in data:
        total += 1
        slug = a.get('slug', '')
        country = a.get('country', '')
        category = a.get('category', '')
        date_field = a.get('date', '')
        file_date = fname.replace('.json', '')

        if country not in VALID_COUNTRIES:
            errors.append(f"❌ INVALID COUNTRY: {fname} | '{country}' | slug: {slug[:50]}")

        if category not in VALID_CATEGORIES:
            errors.append(f"❌ INVALID CATEGORY: {fname} | '{category}' | slug: {slug[:50]}")

        if ' ' in slug or '&' in slug:
            errors.append(f"❌ BAD SLUG: {fname} | '{slug[:60]}'")

        if not a.get('id'):
            errors.append(f"❌ MISSING ID: {fname} | {slug[:50]}")

        if date_field and date_field != file_date:
            errors.append(f"❌ DATE MISMATCH: {fname} | article date field is '{date_field}' but file is '{file_date}' — looks like a copy-paste from another day")

        word_count = len(a.get('description', '').split())
        if word_count < MIN_DESCRIPTION_WORDS:
            # ✅ Now a blocking ERROR, not a warning — this was set to warning-only
            # before, which is why 807/840 live articles ended up under 400 words
            # and triggered AdSense's "Low value content" rejection.
            errors.append(f"❌ THIN CONTENT: {fname} | {word_count} words (min {MIN_DESCRIPTION_WORDS}) | slug: {slug[:50]}")

        if not a.get('country'):
            errors.append(f"❌ MISSING COUNTRY: {fname} | slug: {slug[:50]}")

print(f"\nChecked {total} articles in {len(recent_files)} files\n")

print("Scanning full archive for duplicate titles/descriptions...")
all_titles = defaultdict(list)
for fname in files:
    with open(os.path.join(news_dir, fname), encoding='utf-8') as f:
        data = json.load(f)
    for a in data:
        all_titles[a.get('title', '')].append((fname, a.get('description', '')))

dup_errors = []
for title, occurrences in all_titles.items():
    if len(occurrences) < 2:
        continue
    descs = [d for _, d in occurrences]
    if len(set(descs)) == 1:
        files_involved = ', '.join(f for f, _ in occurrences)
        dup_errors.append(f"❌ EXACT DUPLICATE ARTICLE across dates: '{title[:60]}' | files: {files_involved}")
    else:
        files_involved = ', '.join(f for f, _ in occurrences)
        warnings.append(f"⚠️  REUSED TITLE (different content) — consider a unique headline: '{title[:60]}' | files: {files_involved}")

errors.extend(dup_errors)

if warnings:
    print(f"\n⚠️  {len(warnings)} WARNINGS:\n")
    for w in warnings:
        print(w)

if errors:
    print(f"\n🚨 {len(errors)} ERRORS FOUND:\n")
    for e in errors:
        print(e)
    print("\n❌ Fix errors before pushing!")
    sys.exit(1)
else:
    print("\n✅ All good — safe to push!")