from pathlib import Path
from recordings_fr import recordings_fr
import unicodedata

def deaccent(s: str) -> str:
    norm = unicodedata.normalize('NFKD', s)  
    return ''.join([c for c in norm if not unicodedata.combining(c)])  

for subset in recordings_fr.values():
    for items in subset.values():
        for item in items:
            # print(item, deaccent(item))
            Path(item).replace(Path(deaccent(item)))
