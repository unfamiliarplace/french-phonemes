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

    constructor(s, sa, g, na, sps, wos, no, uwi, up, uwo, un) {
        this.symbol = s;
        this.symbolASCII = sa;
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

// new Phoneme('s', 'sa', 'g', 'na', ['sp'], ['wo'], 'no', 'uwi', 'up', 'uwo', 'un'),

const fr_voyelles_orales = new PhonemeGroup('voyelles orales', [
    new Phoneme('a', 'a', 'voyelle orale', 'Open front unrounded vowel', ['a'], ['Avion'], '___', 'https://en.wikipedia.org/wiki/Open_front_unrounded_vowel', 'https://upload.wikimedia.org/wikipedia/commons/6/65/Open_front_unrounded_vowel.ogg', '', ''),
    new Phoneme('ɑ', 'aa', 'voyelle orale', 'Open back unrounded vowel',  ['â'], ['fÂché'], '___', 'https://en.wikipedia.org/wiki/Open_back_unrounded_vowel', 'https://upload.wikimedia.org/wikipedia/commons/e/e5/Open_back_unrounded_vowel.ogg', '___', '___'),
    new Phoneme('e', 'ee', 'voyelle orale', 'Close-mid front unrounded vowel', ['é','er', 'ez', 'et', 'es', 'ai'], ['Étoile', 'dansER', 'nEZ', 'ET', 'dES', 'AI'], '___', 'https://en.wikipedia.org/wiki/Close-mid_front_unrounded_vowel', 'https://upload.wikimedia.org/wikipedia/commons/6/6c/Close-mid_front_unrounded_vowel.ogg', '___', '___'),
    new Phoneme('ɛ', 'eh', 'voyelle orale', 'Open-mid front unrounded vowel', ['è', 'et', 'ê', 'ei', 'ai'], ['flÈche', 'sifflET', 'fÊte', 'nEIge', 'chAIse'], '___', 'https://en.wikipedia.org/wiki/Open-mid_front_unrounded_vowel', 'https://upload.wikimedia.org/wikipedia/commons/7/71/Open-mid_front_unrounded_vowel.ogg', '___', '___'),
    new Phoneme('ə', 'e', 'voyelle orale', 'Mid central vowel', ['e'], ['rEnard'], '___', 'https://en.wikipedia.org/wiki/Mid_central_vowel', 'https://upload.wikimedia.org/wikipedia/commons/d/d9/Mid-central_vowel.ogg', '___', '___'),
    new Phoneme('i', 'i', 'voyelle orale', 'Close front unrounded vowel', ['i', 'y', 'ï'], ['amIs', 'stYlo', 'Île', 'maÏs'], '___', 'https://en.wikipedia.org/wiki/Close_front_unrounded_vowel', 'https://upload.wikimedia.org/wikipedia/commons/9/91/Close_front_unrounded_vowel.ogg', '___', '___'),
    new Phoneme('y', 'y', 'voyelle orale', 'Close front rounded vowel', ['u', 'û'], ['lUne', 'flÛte'], '___', 'https://en.wikipedia.org/wiki/Close_front_rounded_vowel', 'https://upload.wikimedia.org/wikipedia/commons/e/ea/Close_front_rounded_vowel.ogg', '___', '___'),
    new Phoneme('ø', 'eu', 'voyelle orale', 'Close-mid front rounded vowel', ['eu', 'œu'], ['jEU', 'ŒUf'], '___', 'https://en.wikipedia.org/wiki/Close-mid_front_rounded_vowel', 'https://upload.wikimedia.org/wikipedia/commons/5/53/Close-mid_front_rounded_vowel.ogg', '___', '___'),
    new Phoneme('œ', 'oe', 'voyelle orale', 'Open-mid front ronded vowel', ['œu', 'œ', 'eu'], ['cŒUr', 'Œil', 'hEUre'], '___', 'https://en.wikipedia.org/wiki/Open-mid_front_rounded_vowel', 'https://upload.wikimedia.org/wikipedia/commons/9/9f/Open-mid_front_rounded_vowel_%282%29.ogg', '___', '___'),
    new Phoneme('o', 'o', 'voyelle orale', 'Close-mid back rounded vowel', ['au', 'o', 'ô'], ['cadeAU', 'rigOlO', 'fantÔme'], '___', 'https://en.wikipedia.org/wiki/Close-mid_back_rounded_vowel', 'https://upload.wikimedia.org/wikipedia/commons/8/84/Close-mid_back_rounded_vowel.ogg', '___', '___'),
    new Phoneme('ɔ', 'oo', 'voyelle orale', 'Open-mid back rounded vowel', ['o'], ['cOlle'], '___', 'https://en.wikipedia.org/wiki/Open-mid_back_rounded_vowel', 'https://upload.wikimedia.org/wikipedia/commons/d/d0/PR-open-mid_back_rounded_vowel.ogg', '___', '___'),
    new Phoneme('u', 'u', 'voyelle orale', 'Close back rounded vowel', ['ou', 'oÙ', 'oÛ'], ['hibOU', 'OÙ', 'cOÛter'], '___', 'https://en.wikipedia.org/wiki/Close_back_rounded_vowel', 'https://upload.wikimedia.org/wikipedia/commons/5/5d/Close_back_rounded_vowel.ogg', '___', '___'),
])

const fr_voyelles_nasales = new PhonemeGroup('voyelles nasales', [
    new Phoneme('ɑ̃', 'an', 'voyelle nasale', 'na', ['an', 'en', 'am', 'en', 'em', 'aon'], ['orANge', 'dENt', 'lAMpe', 'tEMpête', 'fAON'], 'no', 'https://en.wikipedia.org/wiki/Nasal_vowel', 'https://tools.unfamiliarplace.com/phonemes/assets/symbols/an.mp3', 'uwo', 'un'),
    new Phoneme('ɛ̃', 'in', 'voyelle nasale', 'na', ['in', 'im', 'aim', 'ain', 'ein'], ['lapIN', 'tIMbre', 'fAIM', 'mAIN', 'pEINt'], 'no', 'https://en.wikipedia.org/wiki/Nasal_vowel', 'https://tools.unfamiliarplace.com/phonemes/assets/symbols/in.mp3', 'uwo', 'un'),
    new Phoneme('ɔ̃', 'on', 'voyelle nasale', 'na', ['on', 'om'], ['bONbON', 'pOMpier'], 'no', 'https://en.wikipedia.org/wiki/Nasal_vowel', 'https://tools.unfamiliarplace.com/phonemes/assets/symbols/on.mp3', 'uwo', 'un'),
    new Phoneme('œ̃', 'un', 'voyelle nasale', 'na', ['un', 'um'], ['lUNdi', 'parfUM'], 'no', 'https://en.wikipedia.org/wiki/Nasal_vowel', 'https://tools.unfamiliarplace.com/phonemes/assets/symbols/un.mp3', 'uwo', 'un'),
])

const fr_semi_voyelles = new PhonemeGroup('semi-voyelles', [
    new Phoneme('ɥ', 'yy', 'semi-voyelle', 'Voiced labial–palatal approximant', ['u'], ['nUage'], 'no', 'https://en.wikipedia.org/wiki/Voiced_labial%E2%80%93palatal_approximant', 'https://upload.wikimedia.org/wikipedia/commons/3/32/LL-Q150_%28fra%29-WikiLucas00-IPA_%C9%A5.wav', 'uwo', 'un'),
    new Phoneme('w', 'w', 'semi-voyelle', 'Voiced labial–velar approximant', ['ou'], ['OUest'], 'no', 'https://en.wikipedia.org/wiki/Voiced_labial%E2%80%93velar_approximant', 'https://upload.wikimedia.org/wikipedia/commons/f/f2/Voiced_labio-velar_approximant.ogg', 'uwo', 'un'),
    new Phoneme('j', 'j', 'semi-voyelle', 'Voiced palatal approximant', ['i'], ['cIel'], 'no', 'https://en.wikipedia.org/wiki/Voiced_palatal_approximant', 'https://upload.wikimedia.org/wikipedia/commons/e/e8/Palatal_approximant.ogg', 'uwo', 'un'),
])

const fr_consonnes_occlusives = new PhonemeGroup('consonnes occlusives', [
    new Phoneme('p', 'p', 'consonne occlusive', 'Voiceless bilabial plosive', ['p'], ['PaPillon'], 'no', 'https://en.wikipedia.org/wiki/Voiceless_bilabial_plosive', 'https://upload.wikimedia.org/wikipedia/commons/5/51/Voiceless_bilabial_plosive.ogg', 'uwo', 'un'),
    new Phoneme('b', 'b', 'consonne occlusive', 'Voiced bilabial plosive', ['b'], ['Bateau'], 'no', 'https://en.wikipedia.org/wiki/Voiced_bilabial_plosive', 'https://upload.wikimedia.org/wikipedia/commons/2/2c/Voiced_bilabial_plosive.ogg', 'uwo', 'un'),
    new Phoneme('t', 't', 'consonne occlusive', 'Voiceless alveolar plosive', ['t', 'th'], ['TomaTe', 'THé'], 'no', 'https://en.wikipedia.org/wiki/Voiceless_dental_and_alveolar_plosives#Dental_or_denti-alveolar', 'https://upload.wikimedia.org/wikipedia/commons/0/02/Voiceless_alveolar_plosive.ogg', 'uwo', 'un'),
    new Phoneme('d', 'd', 'consonne occlusive', 'Voiced alveolar plosive', ['d'], ['Dé'], 'no', 'https://en.wikipedia.org/wiki/Voiced_dental_and_alveolar_plosives#Dental_or_denti-alveolar', 'https://upload.wikimedia.org/wikipedia/commons/0/01/Voiced_alveolar_plosive.ogg', 'uwo', 'un'),
    new Phoneme('k', 'k', 'consonne occlusive', 'Voiceless velar plosive', ['c', 'k', 'qu', 'q', 'ch', 'ck'], ['Canard', 'Koala', 'QUeue', 'cinQ', 'orCHestre', 'hoCKey'], 'no', 'https://en.wikipedia.org/wiki/Voiceless_velar_plosive', 'https://upload.wikimedia.org/wikipedia/commons/e/e3/Voiceless_velar_plosive.ogg', 'uwo', 'un'),
    new Phoneme('g', 'g', 'consonne occlusive', 'Voiced velar plosive', ['g', 'gu'], ['Gâteau', 'GUitare'], 'no', 'https://en.wikipedia.org/wiki/Voiced_velar_plosive', 'https://upload.wikimedia.org/wikipedia/commons/1/12/Voiced_velar_plosive_02.ogg', 'uwo', 'un'),
])

const fr_consonnes_fricatives = new PhonemeGroup('consonnes fricatives', [
    new Phoneme('f', 'f', 'consonne fricative', 'Voiceless labiodental fricative', ['f', 'ph'], ['Fourmi', 'éléPHant'], 'no', 'https://en.wikipedia.org/wiki/Voiceless_labiodental_fricative', 'https://upload.wikimedia.org/wikipedia/commons/c/c7/Voiceless_labio-dental_fricative.ogg', 'uwo', 'un'),
    new Phoneme('v', 'v', 'consonne fricative', 'Voiced labiodental fricative', ['v', 'w'], ['Vélo', 'Wagon'], 'no', 'https://en.wikipedia.org/wiki/Voiced_labiodental_fricative', 'https://upload.wikimedia.org/wikipedia/commons/4/42/Voiced_labio-dental_fricative.ogg', 'uwo', 'un'),
    new Phoneme('s', 's', 'consonne fricative', 'Voiceless alveolar sibilant', ['s', 'sc', 'c', 'ç', 't', 'x'], ['Savon', 'piSCine', 'Cerise', 'garÇon', 'poTion', 'diX'], 'no', 'https://en.wikipedia.org/wiki/Voiceless_alveolar_fricative#Voiceless_alveolar_sibilant', 'https://upload.wikimedia.org/wikipedia/commons/a/ac/Voiceless_alveolar_sibilant.ogg', 'uwo', 'un'),
    new Phoneme('z', 'z', 'consonne fricative', 'Voiced alveolar sibilant', ['z', 's'], ['Zèbre', 'roSe'], 'no', 'https://en.wikipedia.org/wiki/Voiced_alveolar_fricative#Voiced_alveolar_sibilant', 'https://upload.wikimedia.org/wikipedia/commons/c/c0/Voiced_alveolar_sibilant.ogg', 'uwo', 'un'),
    new Phoneme('ʃ', 'ss', 'consonne fricative', 'Voiceless postalveolar fricative', ['ch'], ['CHat'], 'no', 'https://en.wikipedia.org/wiki/Voiceless_postalveolar_fricative', 'https://upload.wikimedia.org/wikipedia/commons/c/cc/Voiceless_palato-alveolar_sibilant.ogg', 'uwo', 'un'),
    new Phoneme('ʒ', 'zz', 'consonne fricative', 'Voiced postalveolar fricative', ['j', 'g'], ['Jardin', 'Girafe'], 'no', 'https://en.wikipedia.org/wiki/Voiced_postalveolar_fricative', 'https://upload.wikimedia.org/wikipedia/commons/3/30/Voiced_palato-alveolar_sibilant.ogg', 'uwo', 'un'),
])

const fr_consonnes_nasales = new PhonemeGroup('consonnes nasales', [
    new Phoneme('m', 'm', 'consonne nasale', 'Voiced bilabial nasal', ['m'], ['Maison'], 'no', 'https://en.wikipedia.org/wiki/Voiced_bilabial_nasal', 'https://upload.wikimedia.org/wikipedia/commons/a/a9/Bilabial_nasal.ogg', 'uwo', 'un'),
    new Phoneme('n', 'n', 'consonne nasale', 'Voiced alveolar nasal', ['n'], ['Neige'], 'no', 'https://en.wikipedia.org/wiki/Voiced_dental,_alveolar_and_postalveolar_nasals', 'https://upload.wikimedia.org/wikipedia/commons/2/29/Alveolar_nasal.ogg', 'uwo', 'un'),
    new Phoneme('ɲ', 'nn', 'consonne nasale', 'Voiced palatal nasal', ['gn'], ['montaGNe'], 'no', 'https://en.wikipedia.org/wiki/Voiced_palatal_nasal', 'https://upload.wikimedia.org/wikipedia/commons/4/46/Palatal_nasal.ogg', 'uwo', 'un'),
])

const fr_consonnes_liquides = new PhonemeGroup('consonnes liquides', [
    new Phoneme('l', 'l', 'consonne liquide', 'Voiced alveolar lateral approximant', ['l'], ['Livre'], 'no', 'https://en.wikipedia.org/wiki/Voiced_dental,_alveolar_and_postalveolar_lateral_approximants', 'https://upload.wikimedia.org/wikipedia/commons/b/bc/Alveolar_lateral_approximant.ogg', 'uwo', 'un'),
    new Phoneme('R', 'r', 'consonne liquide', 'Voiced uvular fricative', ['r'], ['Robot'], 'no', 'https://en.wikipedia.org/wiki/Voiced_uvular_fricative', 'https://upload.wikimedia.org/wikipedia/commons/a/af/Voiced_uvular_fricative.ogg', 'uwo', 'un'),
])

const fr_diphthongues = new PhonemeGroup('diphthongues', [
    new Phoneme('wa', 'wa', 'diphthongue', 'w + a', ['ou'], ['OIseau'], 'no', 'https://en.wikipedia.org/wiki/Diphthong', 'https://tools.unfamiliarplace.com/phonemes/assets/symbols/wa.mp3', 'uwo', 'un'),
    new Phoneme('ɥi', 'yi', 'diphthongue', 'ɥ + i', ['ui'], ['frUIts'], 'no', 'https://en.wikipedia.org/wiki/Diphthong', 'https://tools.unfamiliarplace.com/phonemes/assets/symbols/yi.mp3', 'uwo', 'un'),
    new Phoneme('aj', 'aj', 'diphthongue', 'a + j', ['aille', 'ail'], ['médAILLE', 'AIL'], 'no', 'https://en.wikipedia.org/wiki/Diphthong', 'https://tools.unfamiliarplace.com/phonemes/assets/symbols/aj.mp3', 'uwo', 'un'),
    new Phoneme('ɛj', 'ej', 'diphthongue', 'ɛ + k', ['eille', 'eil'], ['orEILLE', 'solEIL'], 'no', 'https://en.wikipedia.org/wiki/Diphthong', 'https://tools.unfamiliarplace.com/phonemes/assets/symbols/ej.mp3', 'uwo', 'un'),
    new Phoneme('ij', 'ij', 'diphthongue', 'i + j', ['ille', 'ill'], ['chenILLE', 'papILLon'], 'no', 'https://en.wikipedia.org/wiki/Diphthong', 'https://tools.unfamiliarplace.com/phonemes/assets/symbols/ij.mp3', 'uwo', 'un'),
    new Phoneme('œj', 'oej', 'diphthongue', 'œ + j', ['euille', 'euil', 'ueil'], ['fEUILLE', 'écurEUIL', 'cUEILlir'], 'no', 'https://en.wikipedia.org/wiki/Diphthong', 'https://tools.unfamiliarplace.com/phonemes/assets/symbols/oej.mp3', 'uwo', 'un'),
    new Phoneme('uj', 'uj', 'diphthongue', 'u + j', ['ouille'], ['grenOUILLE'], 'no', 'https://en.wikipedia.org/wiki/Diphthong', 'https://tools.unfamiliarplace.com/phonemes/assets/symbols/uj.mp3', 'uwo', 'un'),
])

const phonemes_fr = [
    fr_voyelles_orales,
    fr_voyelles_nasales,
    fr_semi_voyelles,
    fr_consonnes_occlusives,
    fr_consonnes_fricatives,
    fr_consonnes_nasales,
    fr_consonnes_liquides,
    fr_diphthongues
]
