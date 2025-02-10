import parse

master, parts = parse.get_master_and_parts()

for part in sorted(parts, reverse=True, key=lambda p: len(parts.get(p))):
    print(part, '\t', len(parts[part]))
