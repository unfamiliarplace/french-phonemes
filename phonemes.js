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
    new Phoneme('a', 'a', 'voyelle orale', 'Open front unrounded vowel', ['a'], ['Avion'], 'Similar to English /æ/ ("cat"), but a little lower.', 'https://en.wikipedia.org/wiki/Open_front_unrounded_vowel', 'https://upload.wikimedia.org/wikipedia/commons/6/65/Open_front_unrounded_vowel.ogg', '', ''),
    new Phoneme('ɑ', 'aa', 'voyelle orale', 'Open back unrounded vowel',  ['â'], ['fÂché'], 'Lower still than /a/.', 'https://en.wikipedia.org/wiki/Open_back_unrounded_vowel', 'https://upload.wikimedia.org/wikipedia/commons/e/e5/Open_back_unrounded_vowel.ogg', '___', '___'),
    new Phoneme('e', 'ee', 'voyelle orale', 'Close-mid front unrounded vowel', ['é','er', 'ez', 'et', 'es', 'ai'], ['Étoile', 'dansER', 'nEZ', 'ET', 'dES', 'AI'], 'Same as English /e/, except that we always make that a diphthong /ej/ in open syllables; in French make sure you don\'t add /j/. It will sound sort of cut short.', 'https://en.wikipedia.org/wiki/Close-mid_front_unrounded_vowel', 'https://upload.wikimedia.org/wikipedia/commons/6/6c/Close-mid_front_unrounded_vowel.ogg', '___', '___'),
    new Phoneme('ɛ', 'eh', 'voyelle orale', 'Open-mid front unrounded vowel', ['è', 'et', 'ê', 'ei', 'ai'], ['flÈche', 'sifflET', 'fÊte', 'nEIge', 'chAIse'], 'Same as in English "bed".', 'https://en.wikipedia.org/wiki/Open-mid_front_unrounded_vowel', 'https://upload.wikimedia.org/wikipedia/commons/7/71/Open-mid_front_unrounded_vowel.ogg', '___', '___'),
    new Phoneme('ə', 'e', 'voyelle orale', 'Mid central vowel', ['e'], ['rEnard'], 'Never stressed. This is the most reduced vowel you can get. Generally it gets deleted and leaves a consonant cluster.', 'https://en.wikipedia.org/wiki/Mid_central_vowel', 'https://upload.wikimedia.org/wikipedia/commons/d/d9/Mid-central_vowel.ogg', '___', '___'),
    new Phoneme('i', 'i', 'voyelle orale', 'Close front unrounded vowel', ['i', 'y', 'ï'], ['amIs', 'stYlo', 'Île', 'maÏs'], 'Same as English /i/, except that we always make that a diphthong /ij/ in open syllables; in French make sure you don\'t add /j/. It will sounds sort of cut short.', 'https://en.wikipedia.org/wiki/Close_front_unrounded_vowel', 'https://upload.wikimedia.org/wikipedia/commons/9/91/Close_front_unrounded_vowel.ogg', '___', '___'),
    new Phoneme('y', 'y', 'voyelle orale', 'Close front rounded vowel', ['u', 'û'], ['lUne', 'flÛte'], 'Not in English. Pronounce /i/, then round your lips while still holding the vowel.', 'https://en.wikipedia.org/wiki/Close_front_rounded_vowel', 'https://upload.wikimedia.org/wikipedia/commons/e/ea/Close_front_rounded_vowel.ogg', '___', '___'),
    new Phoneme('ø', 'eu', 'voyelle orale', 'Close-mid front rounded vowel', ['eu', 'œu'], ['jEU', 'ŒUf'], 'Not in English. Pronounce /e/, then round your lips while still holding the vowel.', 'https://en.wikipedia.org/wiki/Close-mid_front_rounded_vowel', 'https://upload.wikimedia.org/wikipedia/commons/5/53/Close-mid_front_rounded_vowel.ogg', '___', '___'),
    new Phoneme('œ', 'oe', 'voyelle orale', 'Open-mid front ronded vowel', ['œu', 'œ', 'eu'], ['cŒUr', 'Œil', 'hEUre'], 'Not in English. Pronounce /ɛ/, then round your lips will still holding the vowel.', 'https://en.wikipedia.org/wiki/Open-mid_front_rounded_vowel', 'https://upload.wikimedia.org/wikipedia/commons/9/9f/Open-mid_front_rounded_vowel_%282%29.ogg', '___', '___'),
    new Phoneme('o', 'o', 'voyelle orale', 'Close-mid back rounded vowel', ['au', 'o', 'ô'], ['cadeAU', 'rigOlO', 'fantÔme'], 'Same as English /o/, except that we always make that a diphthong /ow/ in open syllables; in French make sure you don\'t add /w/. It will sound sort of cut short.', 'https://en.wikipedia.org/wiki/Close-mid_back_rounded_vowel', 'https://upload.wikimedia.org/wikipedia/commons/8/84/Close-mid_back_rounded_vowel.ogg', '___', '___'),
    new Phoneme('ɔ', 'oo', 'voyelle orale', 'Open-mid back rounded vowel', ['o'], ['cOlle'], 'Not in Canadian English. A little lower than /o/.', 'https://en.wikipedia.org/wiki/Open-mid_back_rounded_vowel', 'https://upload.wikimedia.org/wikipedia/commons/d/d0/PR-open-mid_back_rounded_vowel.ogg', '___', '___'),
    new Phoneme('u', 'u', 'voyelle orale', 'Close back rounded vowel', ['ou', 'oÙ', 'oÛ'], ['hibOU', 'OÙ', 'cOÛter'], 'Same as English /u/, except that we always make that a diphthong /uw/ in open syllables; in French make sure you don\'t add /w/. It will sound sort of cut short.', 'https://en.wikipedia.org/wiki/Close_back_rounded_vowel', 'https://upload.wikimedia.org/wikipedia/commons/5/5d/Close_back_rounded_vowel.ogg', '___', '___'),
])

const fr_voyelles_nasales = new PhonemeGroup('voyelles nasales', [
    new Phoneme('ɑ̃', 'an', 'voyelle nasale', 'na', ['an', 'en', 'am', 'en', 'em', 'aon'], ['orANge', 'dENt', 'lAMpe', 'tEMpête', 'fAON'], 'Not in English.', 'https://en.wikipedia.org/wiki/Nasal_vowel', 'https://tools.unfamiliarplace.com/phonemes/assets/symbols/an.mp3', 'uwo', 'un'),
    new Phoneme('ɛ̃', 'in', 'voyelle nasale', 'na', ['in', 'im', 'aim', 'ain', 'ein'], ['lapIN', 'tIMbre', 'fAIM', 'mAIN', 'pEINt'], 'Not in English.', 'https://en.wikipedia.org/wiki/Nasal_vowel', 'https://tools.unfamiliarplace.com/phonemes/assets/symbols/in.mp3', 'uwo', 'un'),
    new Phoneme('ɔ̃', 'on', 'voyelle nasale', 'na', ['on', 'om'], ['bONbON', 'pOMpier'], 'Not in English.', 'https://en.wikipedia.org/wiki/Nasal_vowel', 'https://tools.unfamiliarplace.com/phonemes/assets/symbols/on.mp3', 'uwo', 'un'),
    new Phoneme('œ̃', 'un', 'voyelle nasale', 'na', ['un', 'um'], ['lUNdi', 'parfUM'], 'Not in English.', 'https://en.wikipedia.org/wiki/Nasal_vowel', 'https://tools.unfamiliarplace.com/phonemes/assets/symbols/un.mp3', 'uwo', 'un'),
])

const fr_semi_voyelles = new PhonemeGroup('semi-voyelles', [
    new Phoneme('ɥ', 'yy', 'semi-voyelle', 'Voiced labial–palatal approximant', ['u'], ['nUit'], 'This is /y/ but really fast.', 'https://en.wikipedia.org/wiki/Voiced_labial%E2%80%93palatal_approximant', 'https://upload.wikimedia.org/wikipedia/commons/3/32/LL-Q150_%28fra%29-WikiLucas00-IPA_%C9%A5.wav', 'uwo', 'un'),
    new Phoneme('w', 'w', 'semi-voyelle', 'Voiced labial–velar approximant', ['ou'], ['OUest'], 'Same as English /w/.', 'https://en.wikipedia.org/wiki/Voiced_labial%E2%80%93velar_approximant', 'https://upload.wikimedia.org/wikipedia/commons/f/f2/Voiced_labio-velar_approximant.ogg', 'uwo', 'un'),
    new Phoneme('j', 'j', 'semi-voyelle', 'Voiced palatal approximant', ['i'], ['cIel'], 'Same as English /j/ (i.e., the sound that begins the word "yes").', 'https://en.wikipedia.org/wiki/Voiced_palatal_approximant', 'https://upload.wikimedia.org/wikipedia/commons/e/e8/Palatal_approximant.ogg', 'uwo', 'un'),
])

const fr_consonnes_occlusives = new PhonemeGroup('consonnes occlusives', [
    new Phoneme('p', 'p', 'consonne occlusive', 'Voiceless bilabial plosive', ['p'], ['PaPillon'], 'Same as English, except we aspirate — add a puff of air — when this is at the start of a syllable. French does not.', 'https://en.wikipedia.org/wiki/Voiceless_bilabial_plosive', 'https://upload.wikimedia.org/wikipedia/commons/5/51/Voiceless_bilabial_plosive.ogg', 'uwo', 'un'),
    new Phoneme('b', 'b', 'consonne occlusive', 'Voiced bilabial plosive', ['b'], ['Bateau'], 'Same as English.', 'https://en.wikipedia.org/wiki/Voiced_bilabial_plosive', 'https://upload.wikimedia.org/wikipedia/commons/2/2c/Voiced_bilabial_plosive.ogg', 'uwo', 'un'),
    new Phoneme('t', 't', 'consonne occlusive', 'Voiceless alveolar plosive', ['t', 'th'], ['TomaTe', 'THé'], 'Unlike in English, the tongue touches the back of the teeth, not the alveolar ridge right behind the teeth.<br><br>Also, in English we aspirate — add a puff of air — when this is at the start of a syllable. French does not.', 'https://en.wikipedia.org/wiki/Voiceless_dental_and_alveolar_plosives#Dental_or_denti-alveolar', 'https://upload.wikimedia.org/wikipedia/commons/0/02/Voiceless_alveolar_plosive.ogg', 'uwo', 'un'),
    new Phoneme('d', 'd', 'consonne occlusive', 'Voiced alveolar plosive', ['d'], ['Dé'], 'Unlike in English, the tongue touches the back of the teeth, not the alveolar ridge right behind the teeth.', 'https://en.wikipedia.org/wiki/Voiced_dental_and_alveolar_plosives#Dental_or_denti-alveolar', 'https://upload.wikimedia.org/wikipedia/commons/0/01/Voiced_alveolar_plosive.ogg', 'uwo', 'un'),
    new Phoneme('k', 'k', 'consonne occlusive', 'Voiceless velar plosive', ['c', 'k', 'qu', 'q', 'ch', 'ck'], ['Canard', 'Koala', 'QUeue', 'cinQ', 'orCHestre', 'hoCKey'], 'Same as English, except we aspirate — add a puff of air — when this is at the start of a syllable. French does not.', 'https://en.wikipedia.org/wiki/Voiceless_velar_plosive', 'https://upload.wikimedia.org/wikipedia/commons/e/e3/Voiceless_velar_plosive.ogg', 'uwo', 'un'),
    new Phoneme('g', 'g', 'consonne occlusive', 'Voiced velar plosive', ['g', 'gu'], ['Gâteau', 'GUitare'], 'Same as English.', 'https://en.wikipedia.org/wiki/Voiced_velar_plosive', 'https://upload.wikimedia.org/wikipedia/commons/1/12/Voiced_velar_plosive_02.ogg', 'uwo', 'un'),
])

const fr_consonnes_fricatives = new PhonemeGroup('consonnes fricatives', [
    new Phoneme('f', 'f', 'consonne fricative', 'Voiceless labiodental fricative', ['f', 'ph'], ['Fourmi', 'éléPHant'], 'Same as English.', 'https://en.wikipedia.org/wiki/Voiceless_labiodental_fricative', 'https://upload.wikimedia.org/wikipedia/commons/c/c7/Voiceless_labio-dental_fricative.ogg', 'uwo', 'un'),
    new Phoneme('v', 'v', 'consonne fricative', 'Voiced labiodental fricative', ['v', 'w'], ['Vélo', 'Wagon'], 'Same as English.', 'https://en.wikipedia.org/wiki/Voiced_labiodental_fricative', 'https://upload.wikimedia.org/wikipedia/commons/4/42/Voiced_labio-dental_fricative.ogg', 'uwo', 'un'),
    new Phoneme('s', 's', 'consonne fricative', 'Voiceless alveolar sibilant', ['s', 'sc', 'c', 'ç', 't', 'x'], ['Savon', 'piSCine', 'Cerise', 'garÇon', 'poTion', 'diX'], 'Same as English.', 'https://en.wikipedia.org/wiki/Voiceless_alveolar_fricative#Voiceless_alveolar_sibilant', 'https://upload.wikimedia.org/wikipedia/commons/a/ac/Voiceless_alveolar_sibilant.ogg', 'uwo', 'un'),
    new Phoneme('z', 'z', 'consonne fricative', 'Voiced alveolar sibilant', ['z', 's'], ['Zèbre', 'roSe'], 'Same as English.', 'https://en.wikipedia.org/wiki/Voiced_alveolar_fricative#Voiced_alveolar_sibilant', 'https://upload.wikimedia.org/wikipedia/commons/c/c0/Voiced_alveolar_sibilant.ogg', 'uwo', 'un'),
    new Phoneme('ʃ', 'ss', 'consonne fricative', 'Voiceless postalveolar fricative', ['ch'], ['CHat'], 'Same as English.', 'https://en.wikipedia.org/wiki/Voiceless_postalveolar_fricative', 'https://upload.wikimedia.org/wikipedia/commons/c/cc/Voiceless_palato-alveolar_sibilant.ogg', 'uwo', 'un'),
    new Phoneme('ʒ', 'zz', 'consonne fricative', 'Voiced postalveolar fricative', ['j', 'g'], ['Jardin', 'Girafe'], 'Same as English.', 'https://en.wikipedia.org/wiki/Voiced_postalveolar_fricative', 'https://upload.wikimedia.org/wikipedia/commons/3/30/Voiced_palato-alveolar_sibilant.ogg', 'uwo', 'un'),
])

const fr_consonnes_nasales = new PhonemeGroup('consonnes nasales', [
    new Phoneme('m', 'm', 'consonne nasale', 'Voiced bilabial nasal', ['m'], ['Maison'], 'Same as English.', 'https://en.wikipedia.org/wiki/Voiced_bilabial_nasal', 'https://upload.wikimedia.org/wikipedia/commons/a/a9/Bilabial_nasal.ogg', 'uwo', 'un'),
    new Phoneme('n', 'n', 'consonne nasale', 'Voiced alveolar nasal', ['n'], ['Neige'], 'Unlike in English, the tongue touches the back of the teeth, not the alveolar ridge right behind the teeth.', 'https://en.wikipedia.org/wiki/Voiced_dental,_alveolar_and_postalveolar_nasals', 'https://upload.wikimedia.org/wikipedia/commons/2/29/Alveolar_nasal.ogg', 'uwo', 'un'),
    new Phoneme('ɲ', 'nn', 'consonne nasale', 'Voiced palatal nasal', ['gn'], ['montaGNe'], 'Not in English. The tongue bunches up to touch the palate between /n/ and /ŋ/ (the sound at the end of "sing").', 'https://en.wikipedia.org/wiki/Voiced_palatal_nasal', 'https://upload.wikimedia.org/wikipedia/commons/4/46/Palatal_nasal.ogg', 'uwo', 'un'),
])

const fr_consonnes_liquides = new PhonemeGroup('consonnes liquides', [
    new Phoneme('l', 'l', 'consonne liquide', 'Voiced alveolar lateral approximant', ['l'], ['Livre'], 'Unlike in English, the tongue touches the back of the teeth, not the alveolar ridge right behind the teeth.<br><br>Also, in English we have a different /l/ at the end of a syllable. In French it\s always the same /l/.', 'https://en.wikipedia.org/wiki/Voiced_dental,_alveolar_and_postalveolar_lateral_approximants', 'https://upload.wikimedia.org/wikipedia/commons/b/bc/Alveolar_lateral_approximant.ogg', 'uwo', 'un'),
    new Phoneme('R', 'r', 'consonne liquide', 'Voiced uvular fricative', ['r'], ['Robot'], 'There are three main pronunciations: uvular trill /ʀ/, uvular fricative /ʁ/, and less common alveolar trill /r/, the latter being shared with Spanish, Italian, Romanian, etc.', 'https://en.wikipedia.org/wiki/Voiced_uvular_fricative', 'https://upload.wikimedia.org/wikipedia/commons/a/af/Voiced_uvular_fricative.ogg', 'uwo', 'un'),
])

const fr_diphthongues = new PhonemeGroup('diphthongues', [
    new Phoneme('aj', 'aj', 'diphthongue', 'a + j', ['aille', 'ail'], ['médAILLE', 'AIL'], 'A diphthong is two vowel sounds packed into one, in this case /a/ gliding into /j/.<br><br>Very much like English "eye".', 'https://en.wikipedia.org/wiki/Diphthong', 'https://tools.unfamiliarplace.com/phonemes/assets/symbols/aj.mp3', 'uwo', 'un'),
    new Phoneme('ɛj', 'ej', 'diphthongue', 'ɛ + k', ['eille', 'eil'], ['orEILLE', 'solEIL'], 'A diphthong is two vowel sounds packed into one, in this case /ɛ/ gliding into /j/.<br><br>Very much like English "day".', 'https://en.wikipedia.org/wiki/Diphthong', 'https://tools.unfamiliarplace.com/phonemes/assets/symbols/ej.mp3', 'uwo', 'un'),
    new Phoneme('ij', 'ij', 'diphthongue', 'i + j', ['ille', 'ill'], ['chenILLE', 'papILLon'], 'A diphthong is two vowel sounds packed into one, in this case /i/ gliding into /j/.<br><br>Very much like English "bee".', 'https://en.wikipedia.org/wiki/Diphthong', 'https://tools.unfamiliarplace.com/phonemes/assets/symbols/ij.mp3', 'uwo', 'un'),
    new Phoneme('œj', 'oej', 'diphthongue', 'œ + j', ['euille', 'euil', 'ueil'], ['fEUILLE', 'écurEUIL', 'cUEILlir'], 'A diphthong is two vowel sounds packed into one, in this case /œ/ gliding into /j/.<br><br>There\'s no real equivalent in English.', 'https://en.wikipedia.org/wiki/Diphthong', 'https://tools.unfamiliarplace.com/phonemes/assets/symbols/oej.mp3', 'uwo', 'un'),
    new Phoneme('uj', 'uj', 'diphthongue', 'u + j', ['ouille'], ['grenOUILLE'], 'A diphthong is two vowel sounds packed into one, in this case /u/ gliding into /j/.<br><br>Very much like English "gooey".', 'https://en.wikipedia.org/wiki/Diphthong', 'https://tools.unfamiliarplace.com/phonemes/assets/symbols/uj.mp3', 'uwo', 'un'),
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
