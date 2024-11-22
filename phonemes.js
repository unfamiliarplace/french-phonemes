class Phoneme {
    symbol;
    group;
    name;

    spellings;
    words;
    notes;

    url_wiki;
    url_pro;
    url_word;
    url_notes;

    constructor(s, g, na, sps, wos, no, uwi, up, uwo, un) {
        this.symbol = s;
        this.group = g;
        this.name = na;

        this.spellings = sps;
        this.words = wos;
        this.notes = no;

        this.url_wiki = uwi;
        this.url_pro = up;
        this.url_word = uwo;
        this.url_notes = un;
    }
}

class PhonemeGroup {
    name;
    phonemes;

    constructor(name, phonemes) {
        this.name = name;
        this.phonemes = phonemes;
    }
}

// Phoneme('s', 'g', 'na', ['sp'], ['wo'], 'no', 'uwi', 'up', 'uwo', 'un');

const fr_voyelles_orales = new PhonemeGroup('voyelles orales', [
    new Phoneme('a', 'voyelle orale', 'Open front unrounded vowel', ['a'], ['Avion'], '___', 'https://en.wikipedia.org/wiki/Open_front_unrounded_vowel', 'https://upload.wikimedia.org/wikipedia/commons/6/65/Open_front_unrounded_vowel.ogg', '', ''),
    new Phoneme('ɑ', 'voyelle orale', 'Open back unrounded vowel',  ['â'], ['fÂché'], '___', 'https://en.wikipedia.org/wiki/Open_back_unrounded_vowel', 'https://upload.wikimedia.org/wikipedia/commons/e/e5/Open_back_unrounded_vowel.ogg', '___', '___'),
    new Phoneme('e', 'voyelle orale', 'Close-mid front unrounded vowel', ['é','er', 'ez', 'ed', 'ef', 'et', 'es', 'ai'], ['bÉbÉ', 'dansER', 'nEZ', 'piED', 'clEF', 'ET', 'dES', 'mAI'], '___', 'https://en.wikipedia.org/wiki/Close-mid_front_unrounded_vowel', 'https://upload.wikimedia.org/wikipedia/commons/6/6c/Close-mid_front_unrounded_vowel.ogg', '___', '___'),
    new Phoneme('ɛ', 'voyelle orale', 'Open-mid front unrounded vowel', ['è', 'et', 'ê', 'ei', 'ai', 'e'], ['flÈche', 'sifflET', 'fÊte', 'nEIge', 'chAIse', 'cErf'], '___', 'https://en.wikipedia.org/wiki/Open-mid_front_unrounded_vowel', 'https://upload.wikimedia.org/wikipedia/commons/7/71/Open-mid_front_unrounded_vowel.ogg', '___', '___'),
    new Phoneme('ə', 'voyelle orale', 'Mid central vowel', ['e'], ['rEnard'], '___', 'https://en.wikipedia.org/wiki/Mid_central_vowel', 'https://upload.wikimedia.org/wikipedia/commons/d/d9/Mid-central_vowel.ogg', '___', '___'),
    new Phoneme('i', 'voyelle orale', 'Close front unrounded vowel', ['i', 'y', 'ï'], ['amIs', 'stYlo', 'Île', 'maÏs'], '___', 'https://en.wikipedia.org/wiki/Close_front_unrounded_vowel', 'https://upload.wikimedia.org/wikipedia/commons/9/91/Close_front_unrounded_vowel.ogg', '___', '___'),
    new Phoneme('y', 'voyelle orale', 'Close front rounded vowel', ['u', 'û'], ['lUne', 'flÛte'], '___', 'https://en.wikipedia.org/wiki/Close_front_rounded_vowel', 'https://upload.wikimedia.org/wikipedia/commons/e/ea/Close_front_rounded_vowel.ogg', '___', '___'),
    new Phoneme('ø', 'voyelle orale', 'Close-mid front rounded vowel', ['eu', 'œu'], ['fEU', 'ŒUf'], '___', 'https://en.wikipedia.org/wiki/Close-mid_front_rounded_vowel', 'https://upload.wikimedia.org/wikipedia/commons/5/53/Close-mid_front_rounded_vowel.ogg', '___', '___'),
    new Phoneme('œ', 'voyelle orale', 'Open-mid front ronded vowel', ['œu', 'œ', 'eu', 'ue'], ['cŒUr', 'Œil', 'hEUre', 'cUEillir'], '___', 'https://en.wikipedia.org/wiki/Open-mid_front_rounded_vowel', 'https://upload.wikimedia.org/wikipedia/commons/9/9f/Open-mid_front_rounded_vowel_%282%29.ogg', '___', '___'),
    new Phoneme('o', 'voyelle orale', 'Close-mid back rounded vowel', ['o', 'au', 'o', 'ô'], ['vélO', 'dAUphin', 'fantÔme'], '___', 'https://en.wikipedia.org/wiki/Close-mid_back_rounded_vowel', 'https://upload.wikimedia.org/wikipedia/commons/8/84/Close-mid_back_rounded_vowel.ogg', '___', '___'),
    new Phoneme('ɔ', 'voyelle orale', 'Open-mid back rounded vowel', ['o'], ['cOlle'], '___', 'https://en.wikipedia.org/wiki/Open-mid_back_rounded_vowel', 'https://upload.wikimedia.org/wikipedia/commons/d/d0/PR-open-mid_back_rounded_vowel.ogg', '___', '___'),
    new Phoneme('u', 'voyelle orale', 'Close back rounded vowel', ['ou', 'oÙ', 'oÛ'], ['hibOU', 'OÙ', 'cOÛter'], '___', 'https://en.wikipedia.org/wiki/Close_back_rounded_vowel', 'https://upload.wikimedia.org/wikipedia/commons/5/5d/Close_back_rounded_vowel.ogg', '___', '___'),
])

const fr_voyelles_nasales = new PhonemeGroup('voyelles nasales', [
    new Phoneme('ɑ̃', 'voyelle nasale', 'na', ['en', 'am', 'en', 'em', 'aon'], ['dENt', 'lAMpe', 'dENt', 'tEMpête', 'fAON'], 'no', 'https://en.wikipedia.org/wiki/Nasal_vowel', 'https://tools.unfamiliarplace.com/phonemes/assets/symbols/an.mp3', 'uwo', 'un'),
    new Phoneme('ɛ̃', 'voyelle nasale', 'na', ['in', 'im', 'aim', 'ain', 'ein'], ['lapIN', 'tIMbre', 'fAIM', 'mAIN', 'pEINt'], 'no', 'https://en.wikipedia.org/wiki/Nasal_vowel', 'https://tools.unfamiliarplace.com/phonemes/assets/symbols/in.mp3', 'uwo', 'un'),
    new Phoneme('ɔ̃', 'voyelle nasale', 'na', ['on', 'om'], ['bONbON', 'pOMpier'], 'no', 'https://en.wikipedia.org/wiki/Nasal_vowel', 'https://tools.unfamiliarplace.com/phonemes/assets/symbols/on.mp3', 'uwo', 'un'),
    new Phoneme('œ̃', 'voyelle nasale', 'na', ['un', 'um'], ['lUNdi', 'parfUM'], 'no', 'https://en.wikipedia.org/wiki/Nasal_vowel', 'https://tools.unfamiliarplace.com/phonemes/assets/symbols/un.mp3', 'uwo', 'un'),
])

const fr_semi_voyelles = new PhonemeGroup('semi-voyelles', [
    new Phoneme('ɥ', 'semi-voyelle', 'Voiced labial–palatal approximant', ['ui'], ['plUIe'], 'no', 'https://en.wikipedia.org/wiki/Voiced_labial%E2%80%93palatal_approximant', 'https://upload.wikimedia.org/wikipedia/commons/3/32/LL-Q150_%28fra%29-WikiLucas00-IPA_%C9%A5.wav', 'uwo', 'un'),
    new Phoneme('w', 'semi-voyelle', 'Voiced labial–velar approximant', ['ou'], ['OUi'], 'no', 'https://en.wikipedia.org/wiki/Voiced_labial%E2%80%93velar_approximant', 'https://upload.wikimedia.org/wikipedia/commons/f/f2/Voiced_labio-velar_approximant.ogg', 'uwo', 'un'),
    new Phoneme('j', 'semi-voyelle', 'Voiced palatal approximant', ['i'], ['cIel'], 'no', 'https://en.wikipedia.org/wiki/Voiced_palatal_approximant', 'https://upload.wikimedia.org/wikipedia/commons/e/e8/Palatal_approximant.ogg', 'uwo', 'un'),
])

const fr_consonnes_occlusives = new PhonemeGroup('consonnes occlusives', [
    new Phoneme('p', 'consonne occlusive', 'Voiceless bilabial plosive', ['p', 'pp'], ['PaPillon', 'hiPPopotame'], 'no', 'https://en.wikipedia.org/wiki/Voiceless_bilabial_plosive', 'https://upload.wikimedia.org/wikipedia/commons/5/51/Voiceless_bilabial_plosive.ogg', 'uwo', 'un'),
    new Phoneme('b', 'consonne occlusive', 'Voiced bilabial plosive', ['b'], ['Bateau'], 'no', 'https://en.wikipedia.org/wiki/Voiced_bilabial_plosive', 'https://upload.wikimedia.org/wikipedia/commons/2/2c/Voiced_bilabial_plosive.ogg', 'uwo', 'un'),
    new Phoneme('t', 'consonne occlusive', 'Voiceless alveolar plosive', ['t', 'tt', 'th'], ['TomaTe', 'caroTTE', 'THé'], 'no', 'https://en.wikipedia.org/wiki/Voiceless_dental_and_alveolar_plosives#Dental_or_denti-alveolar', 'https://upload.wikimedia.org/wikipedia/commons/0/02/Voiceless_alveolar_plosive.ogg', 'uwo', 'un'),
    new Phoneme('d', 'consonne occlusive', 'Voiced alveolar plosive', ['d', 'dd'], ['Dé', 'aDDition', ''], 'no', 'https://en.wikipedia.org/wiki/Voiced_dental_and_alveolar_plosives#Dental_or_denti-alveolar', 'https://upload.wikimedia.org/wikipedia/commons/0/01/Voiced_alveolar_plosive.ogg', 'uwo', 'un'),
    new Phoneme('k', 'consonne occlusive', 'Voiceless velar plosive', ['c', 'k', 'qu', 'q', 'ch', 'ck', 'cc'], ['Canard', 'Koala', 'QUeue', 'cinQ', 'orCHestre', 'hoCKey', 'aCCordion'], 'no', 'https://en.wikipedia.org/wiki/Voiceless_velar_plosive', 'https://upload.wikimedia.org/wikipedia/commons/e/e3/Voiceless_velar_plosive.ogg', 'uwo', 'un'),
    new Phoneme('g', 'consonne occlusive', 'Voiced velar plosive', ['g', 'gu'], ['Gâteau', 'GUitare'], 'no', 'https://en.wikipedia.org/wiki/Voiced_velar_plosive', 'https://upload.wikimedia.org/wikipedia/commons/1/12/Voiced_velar_plosive_02.ogg', 'uwo', 'un'),
])

const fr_consonnes_fricatives = new PhonemeGroup('consonnes fricatives', [
    new Phoneme('f', 'consonne fricative', 'Voiceless labiodental fricative', ['f', 'ff', 'ph'], ['Fourmi', 'coiFFeur', 'éléPHant'], 'no', 'https://en.wikipedia.org/wiki/Voiceless_labiodental_fricative', 'https://upload.wikimedia.org/wikipedia/commons/c/c7/Voiceless_labio-dental_fricative.ogg', 'uwo', 'un'),
    new Phoneme('v', 'consonne fricative', 'Voiced labiodental fricative', ['v', 'w'], ['Vache', 'Wagon'], 'no', 'https://en.wikipedia.org/wiki/Voiced_labiodental_fricative', 'https://upload.wikimedia.org/wikipedia/commons/4/42/Voiced_labio-dental_fricative.ogg', 'uwo', 'un'),
    new Phoneme('s', 'consonne fricative', 'Voiceless alveolar sibilant', ['s', 'ss', 'sc', 'c', 'ç', 't', 'x'], ['Savon', 'poiSSOn', 'piSCine', 'Cerise', 'garÇon', 'poTion', 'diX'], 'no', 'https://en.wikipedia.org/wiki/Voiceless_alveolar_fricative#Voiceless_alveolar_sibilant', 'https://upload.wikimedia.org/wikipedia/commons/a/ac/Voiceless_alveolar_sibilant.ogg', 'uwo', 'un'),
    new Phoneme('z', 'consonne fricative', 'Voiced alveolar sibilant', ['z', 's'], ['Zèbre', 'roSe'], 'no', 'https://en.wikipedia.org/wiki/Voiced_alveolar_fricative#Voiced_alveolar_sibilant', 'https://upload.wikimedia.org/wikipedia/commons/c/c0/Voiced_alveolar_sibilant.ogg', 'uwo', 'un'),
    new Phoneme('ʃ', 'consonne fricative', 'Voiceless postalveolar fricative', ['ch'], ['CHat'], 'no', 'https://en.wikipedia.org/wiki/Voiceless_postalveolar_fricative', 'https://upload.wikimedia.org/wikipedia/commons/c/cc/Voiceless_palato-alveolar_sibilant.ogg', 'uwo', 'un'),
    new Phoneme('ʒ', 'consonne fricative', 'Voiced postalveolar fricative', ['j', 'g'], ['Jouer', 'Girafe'], 'no', 'https://en.wikipedia.org/wiki/Voiced_postalveolar_fricative', 'https://upload.wikimedia.org/wikipedia/commons/3/30/Voiced_palato-alveolar_sibilant.ogg', 'uwo', 'un'),
])

const fr_consonnes_nasales = new PhonemeGroup('consonnes nasales', [
    new Phoneme('m', 'consonne nasale', 'Voiced bilabial nasal', ['m', 'mm'], ['Maison', 'poMME'], 'no', 'https://en.wikipedia.org/wiki/Voiced_bilabial_nasal', 'https://upload.wikimedia.org/wikipedia/commons/a/a9/Bilabial_nasal.ogg', 'uwo', 'un'),
    new Phoneme('n', 'consonne nasale', 'Voiced alveolar nasal', ['n', 'nn'], ['Nuage', 'aNNiversaire'], 'no', 'https://en.wikipedia.org/wiki/Voiced_dental,_alveolar_and_postalveolar_nasals', 'https://upload.wikimedia.org/wikipedia/commons/2/29/Alveolar_nasal.ogg', 'uwo', 'un'),
    new Phoneme('ɲ', 'consonne nasale', 'Voiced palatal nasal', ['gn'], ['cyGNe'], 'no', 'https://en.wikipedia.org/wiki/Voiced_palatal_nasal', 'https://upload.wikimedia.org/wikipedia/commons/4/46/Palatal_nasal.ogg', 'uwo', 'un'),
])

const fr_consonnes_liquides = new PhonemeGroup('consonnes liquides', [
    new Phoneme('l', 'consonne liquide', 'Voiced alveolar lateral approximant', ['l', 'll'], ['Lion', 'baLLe'], 'no', 'https://en.wikipedia.org/wiki/Voiced_dental,_alveolar_and_postalveolar_lateral_approximants', 'https://upload.wikimedia.org/wikipedia/commons/b/bc/Alveolar_lateral_approximant.ogg', 'uwo', 'un'),
    new Phoneme('R', 'consonne liquide', 'Voiced uvular fricative', ['r', 'rr'], ['Robot', 'caRRé'], 'no', 'https://en.wikipedia.org/wiki/Voiced_uvular_fricative', 'https://upload.wikimedia.org/wikipedia/commons/a/af/Voiced_uvular_fricative.ogg', 'uwo', 'un'),
])

const phonemes_fr = [
    fr_voyelles_orales,
    fr_voyelles_nasales,
    fr_semi_voyelles,
    fr_consonnes_occlusives,
    fr_consonnes_fricatives,
    fr_consonnes_nasales,
    fr_consonnes_liquides
]
