from pathlib import Path

master = []
parts = {}

with open('recordings.txt', 'r', encoding='utf-8') as f:
    state = 0
    name = ''

    for line in f.readlines():
        line = line.strip()

        if state == 0:
            name = line
            parts[name] = []
            state = 1
        
        elif state == 1:
            if line:
                parts[name].append(line)
            else:
                state = 0

master = parts.pop('[ALL]')

missing = []
for thing in master:
    if not any(thing in part for part in parts.values()):
        missing.append(thing)

print(missing)
