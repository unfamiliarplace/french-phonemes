from pathlib import Path
import parse
import unicodedata

PATH_AUDIO = Path('recordings/audio')

def deaccent(s: str) -> str:
    norm = unicodedata.normalize('NFKD', s)  
    return ''.join([c for c in norm if not unicodedata.combining(c)])  

master, parts = parse.get_master_and_parts()

targets = {
    'phonemes': {},
    'words': {}
}

for person in parts:
    paths = list((PATH_AUDIO / person).glob('-*.mp3'))

    # print(person)
    # print(len(paths), 'files')
    # print(len(parts[person]), 'records')
    # print()

    for (i, path) in enumerate(sorted(paths, key=str)):
        item = deaccent(parts[person][i])
        target = PATH_AUDIO / person / f'{item}.mp3'

        # print(path)
        # print(target)
        # print()

        path.replace(target)

        d = targets['phonemes'] if item.startswith('_') else targets['words']
        d.setdefault(item.strip('_'), []).append(str(target).replace('\\', '/'))

for subset in targets.values():
    for item in subset:
        subset[item] = list(set(subset[item])) # remove duplicates...

with open('recordings_fr.py', 'w', encoding='utf-8') as f:
    f.write('recordings_fr = ' + str(targets))

with open('recordings_fr.js', 'w', encoding='utf-8') as f:
    f.write('const recordings_fr = ' + str(targets) + ';')
