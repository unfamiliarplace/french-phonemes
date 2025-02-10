from pathlib import Path
import parse
import unicodedata

PATH_AUDIO = Path('recordings/audio')

def deaccent(s: str) -> str:
    norm = unicodedata.normalize('NFKD', s)  
    return ''.join([c for c in norm if not unicodedata.combining(c)])  

master, parts = parse.get_master_and_parts('recordings/michael_mode.txt')

targets = {
    'phonemes': {}
}

person = 'michael_mode'
paths = list((PATH_AUDIO / person).glob('-*.mp3'))

for (i, path) in enumerate(sorted(paths, key=str)):
    item = deaccent(parts[person][i])
    target = PATH_AUDIO / person / f'{item}.mp3'

    path.replace(target)

    d = targets['phonemes'] if item.startswith('_') else targets['words']
    d.setdefault(item.strip('_'), []).append(str(target).replace('\\', '/'))

for subset in targets.values():
    for item in subset:
        subset[item] = list(set(subset[item])) # remove duplicates...

with open('michael_mode_fr.py', 'w', encoding='utf-8') as f:
    f.write('michael_mode_fr = ' + str(targets))

with open('michael_mode_fr.js', 'w', encoding='utf-8') as f:
    f.write('const michael_mode_fr = ' + str(targets) + ';')
