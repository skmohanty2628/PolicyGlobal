import json, os

news_dir = 'content/news'
country_map = {
    'United Arab Emirates': 'UAE',
    'Saudi Arabia': 'UAE',
    'China': 'Singapore',
}

for fname in os.listdir(news_dir):
    if not fname.endswith('.json'):
        continue
    path_ = os.path.join(news_dir, fname)
    with open(path_, encoding='utf-8') as f:
        data = json.load(f)
    changed = False
    for a in data:
        if a['country'] in country_map:
            print(f"Fixed {fname}: {a['country']} -> {country_map[a['country']]}  ({a['slug'][:50]})")
            a['country'] = country_map[a['country']]
            changed = True
    if changed:
        with open(path_, 'w', encoding='utf-8') as f:
            json.dump(data, f, indent=2, ensure_ascii=False)

print("Done!")