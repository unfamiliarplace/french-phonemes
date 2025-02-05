import parse

master, parts = parse.get_master_and_parts()

missing = []
for thing in master:
    if not any(thing in part for part in parts.values()):
        missing.append(thing)

print(missing)
