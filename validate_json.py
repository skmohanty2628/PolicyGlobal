import json, os, sys

news_dir = 'content/news'

VALID_COUNTRIES = {
    'United States', 'India', 'United Kingdom', 'Canada',
    'Australia', 'UAE', 'Singapore', 'Germany',
    'France', 'Japan', 'South Korea'
}

VALID_CATEGORIES = {
    'Insurance', 'Personal Finance', 'Banking', 'Markets',
    'FinTech', 'Regulation', 'Economy', 'Healthcare Insurance',
    'Auto Insurance', 'Life Insurance', 'Loans & Mortgage'
}

errors = []
warnings = []
total = 0

# Check only today's and recent files
files = sorted([f for f in os.listdir(news_dir) if f.endswith('.json')], reverse=True)
recent_files = files[:3]  # Check last 3 days only

for fname in recent_files:
    with open(os.path.join(news_dir, fname), encoding='utf-8') as f:
        data = json.load(f)

    for a in data:
        total += 1
        slug = a.get('slug', '')
        country = a.get('country', '')
        category = a.get('category', '')

        if country not in VALID_COUNTRIES:
            errors.append(f"❌ INVALID COUNTRY: {fname} | '{country}' | slug: {slug[:50]}")

        if category not in VALID_CATEGORIES:
            errors.append(f"❌ INVALID CATEGORY: {fname} | '{category}' | slug: {slug[:50]}")

        if ' ' in slug or '&' in slug:
            errors.append(f"❌ BAD SLUG: {fname} | '{slug[:60]}'")

        if not a.get('id'):
            errors.append(f"❌ MISSING ID: {fname} | {slug[:50]}")

print(f"\nChecked {total} articles in {len(recent_files)} files\n")

if errors:
    print(f"🚨 {len(errors)} ERRORS FOUND:\n")
    for e in errors: print(e)
    print("\n❌ Fix errors before pushing!")
    sys.exit(1)
else:
    print("✅ All good — safe to push!")