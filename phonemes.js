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
    new Phoneme('ɑ̃', 'an', 'voyelle nasale', 'na', ['an', 'en', 'am', 'en', 'em', 'aon'], ['orANge', 'dENt', 'lAMpe', 'tEMpête', 'fAON'], 'Not in English.', 'https://en.wikipedia.org/wiki/Nasal_vowel', 'https://t.sawczak.com/phonemes/assets/symbols/an.mp3', 'uwo', 'un'),
    new Phoneme('ɛ̃', 'in', 'voyelle nasale', 'na', ['in', 'im', 'aim', 'ain', 'ein'], ['lapIN', 'tIMbre', 'fAIM', 'mAIN', 'pEINt'], 'Not in English.', 'https://en.wikipedia.org/wiki/Nasal_vowel', 'https://t.sawczak.com/phonemes/assets/symbols/in.mp3', 'uwo', 'un'),
    new Phoneme('ɔ̃', 'on', 'voyelle nasale', 'na', ['on', 'om'], ['bONbON', 'pOMpier'], 'Not in English.', 'https://en.wikipedia.org/wiki/Nasal_vowel', 'https://t.sawczak.com/phonemes/assets/symbols/on.mp3', 'uwo', 'un'),
    new Phoneme('œ̃', 'un', 'voyelle nasale', 'na', ['un', 'um'], ['lUNdi', 'parfUM'], 'Not in English.', 'https://en.wikipedia.org/wiki/Nasal_vowel', 'https://t.sawczak.com/phonemes/assets/symbols/un.mp3', 'uwo', 'un'),
])

const fr_semi_voyelles = new PhonemeGroup('semi-voyelles', [
    new Phoneme('ɥ', 'yy', 'semi-voyelle', 'Voiced labial–palatal approximant', ['u'], ['hUile'], 'This is /y/ but really fast.', 'https://en.wikipedia.org/wiki/Voiced_labial%E2%80%93palatal_approximant', 'https://upload.wikimedia.org/wikipedia/commons/3/32/LL-Q150_%28fra%29-WikiLucas00-IPA_%C9%A5.wav', 'uwo', 'un'),
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
    new Phoneme('l', 'l', 'consonne liquide', 'Voiced alveolar lateral approximant', ['l'], ['Livre'], 'Unlike in English, the tongue touches the back of the teeth, not the alveolar ridge right behind the teeth.<br><br>Also, in English we have a different /l/ at the end of a syllable. In French it\'s always the same /l/.', 'https://en.wikipedia.org/wiki/Voiced_dental,_alveolar_and_postalveolar_lateral_approximants', 'https://upload.wikimedia.org/wikipedia/commons/b/bc/Alveolar_lateral_approximant.ogg', 'uwo', 'un'),
    new Phoneme('R', 'r', 'consonne liquide', 'Voiced uvular fricative', ['r'], ['Robot'], 'There are three main pronunciations: uvular trill /ʀ/, uvular fricative /ʁ/, and less common alveolar trill /r/, the latter being shared with Spanish, Italian, Romanian, etc.', 'https://en.wikipedia.org/wiki/Voiced_uvular_fricative', 'https://upload.wikimedia.org/wikipedia/commons/a/af/Voiced_uvular_fricative.ogg', 'uwo', 'un'),
])

const fr_diphthongues = new PhonemeGroup('diphthongues', [
    new Phoneme('aj', 'aj', 'diphthongue', 'a + j', ['aille', 'ail'], ['médAILLE', 'AIL'], 'A diphthong is two vowel sounds packed into one, in this case /a/ gliding into /j/.<br><br>Very much like English "eye".', 'https://en.wikipedia.org/wiki/Diphthong', 'https://t.sawczak.com/phonemes/assets/symbols/aj.mp3', 'uwo', 'un'),
    new Phoneme('ɛj', 'ej', 'diphthongue', 'ɛ + k', ['eille', 'eil'], ['orEILLE', 'solEIL'], 'A diphthong is two vowel sounds packed into one, in this case /ɛ/ gliding into /j/.<br><br>Very much like English "day".', 'https://en.wikipedia.org/wiki/Diphthong', 'https://t.sawczak.com/phonemes/assets/symbols/ej.mp3', 'uwo', 'un'),
    new Phoneme('ij', 'ij', 'diphthongue', 'i + j', ['ille', 'ill'], ['chenILLE', 'papILLon'], 'A diphthong is two vowel sounds packed into one, in this case /i/ gliding into /j/.<br><br>Very much like English "bee".', 'https://en.wikipedia.org/wiki/Diphthong', 'https://t.sawczak.com/phonemes/assets/symbols/ij.mp3', 'uwo', 'un'),
    new Phoneme('œj', 'oej', 'diphthongue', 'œ + j', ['euille', 'euil', 'ueil'], ['fEUILLE', 'écurEUIL', 'cUEILlir'], 'A diphthong is two vowel sounds packed into one, in this case /œ/ gliding into /j/.<br><br>There\'s no real equivalent in English.', 'https://en.wikipedia.org/wiki/Diphthong', 'https://t.sawczak.com/phonemes/assets/symbols/oej.mp3', 'uwo', 'un'),
    new Phoneme('uj', 'uj', 'diphthongue', 'u + j', ['ouille'], ['grenOUILLE'], 'A diphthong is two vowel sounds packed into one, in this case /u/ gliding into /j/.<br><br>Very much like English "gooey".', 'https://en.wikipedia.org/wiki/Diphthong', 'https://t.sawczak.com/phonemes/assets/symbols/uj.mp3', 'uwo', 'un'),
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

const recordings_fr = {'phonemes': {'a': ['recordings/audio/JJ/_a.mp3', 'recordings/audio/SL/_a.mp3', 'recordings/audio/CL/_a.mp3', 'recordings/audio/AM/_a.mp3', 'recordings/audio/AMB/_a.mp3', 'recordings/audio/CB/_a.mp3', 'recordings/audio/CG/_a.mp3', 'recordings/audio/CJAK/_a.mp3'], 'eu': ['recordings/audio/SL/_eu.mp3', 'recordings/audio/CG/_eu.mp3', 'recordings/audio/JJ/_eu.mp3', 'recordings/audio/AMB/_eu.mp3', 'recordings/audio/CL/_eu.mp3'], 'y': ['recordings/audio/CJAK/_y.mp3', 'recordings/audio/EC/_y.mp3', 'recordings/audio/CL/_y.mp3', 'recordings/audio/JJ/_y.mp3', 'recordings/audio/AMB/_y.mp3', 'recordings/audio/SL/_y.mp3', 'recordings/audio/CG/_y.mp3', 'recordings/audio/CB/_y.mp3'], 'in': ['recordings/audio/AM/_in.mp3', 'recordings/audio/AMB/_in.mp3', 'recordings/audio/JJ/_in.mp3', 'recordings/audio/CG/_in.mp3', 'recordings/audio/LS/_in.mp3', 'recordings/audio/HK/_in.mp3', 'recordings/audio/CL/_in.mp3', 'recordings/audio/NG/_in.mp3'], 'un': ['recordings/audio/LS/_un.mp3', 'recordings/audio/CG/_un.mp3', 'recordings/audio/AMB/_un.mp3', 'recordings/audio/SL/_un.mp3', 'recordings/audio/AM/_un.mp3', 'recordings/audio/CB/_un.mp3'], 'p': ['recordings/audio/JJ/_p.mp3', 'recordings/audio/AMB/_p.mp3', 'recordings/audio/CG/_p.mp3', 'recordings/audio/EC/_p.mp3', 'recordings/audio/CL/_p.mp3'], 'aj': ['recordings/audio/SL/_aj.mp3', 'recordings/audio/LS/_aj.mp3', 'recordings/audio/CG/_aj.mp3', 'recordings/audio/CL/_aj.mp3', 'recordings/audio/AMB/_aj.mp3', 'recordings/audio/AM/_aj.mp3'], 'ej': ['recordings/audio/SL/_ej.mp3', 'recordings/audio/AMB/_ej.mp3', 'recordings/audio/MM/_ej.mp3', 'recordings/audio/LS/_ej.mp3', 'recordings/audio/CG/_ej.mp3', 'recordings/audio/AM/_ej.mp3'], 'aa': ['recordings/audio/AM/_aa.mp3', 'recordings/audio/JJ/_aa.mp3', 'recordings/audio/CL/_aa.mp3'], 'oo': ['recordings/audio/MM/_oo.mp3', 'recordings/audio/AM/_oo.mp3', 'recordings/audio/HK/_oo.mp3', 'recordings/audio/CL/_oo.mp3'], 'v': ['recordings/audio/JJ/_v.mp3', 'recordings/audio/AM/_v.mp3', 'recordings/audio/CG/_v.mp3', 'recordings/audio/CB/_v.mp3', 'recordings/audio/CL/_v.mp3'], 'l': ['recordings/audio/AM/_l.mp3', 'recordings/audio/CL/_l.mp3', 'recordings/audio/CG/_l.mp3'], 'ij': ['recordings/audio/AM/_ij.mp3', 'recordings/audio/CL/_ij.mp3', 'recordings/audio/SL/_ij.mp3', 'recordings/audio/LS/_ij.mp3', 'recordings/audio/MM/_ij.mp3', 'recordings/audio/JJ/_ij.mp3', 'recordings/audio/RR/_ij.mp3'], 'b': ['recordings/audio/CL/_b.mp3', 'recordings/audio/HK/_b.mp3', 'recordings/audio/JJ/_b.mp3', 'recordings/audio/SL/_b.mp3', 'recordings/audio/CG/_b.mp3', 'recordings/audio/EC/_b.mp3'], 'd': ['recordings/audio/JJ/_d.mp3', 'recordings/audio/AVD/_d.mp3', 'recordings/audio/CB/_d.mp3', 'recordings/audio/EC/_d.mp3', 'recordings/audio/CL/_d.mp3', 'recordings/audio/CJAK/_d.mp3'], 'f': ['recordings/audio/JJ/_f.mp3', 'recordings/audio/SL/_f.mp3', 'recordings/audio/EC/_f.mp3', 'recordings/audio/CG/_f.mp3', 'recordings/audio/CL/_f.mp3'], 's': ['recordings/audio/CG/_s.mp3', 'recordings/audio/CL/_s.mp3', 'recordings/audio/AVD/_s.mp3', 'recordings/audio/JJ/_s.mp3', 'recordings/audio/CB/_s.mp3', 'recordings/audio/EC/_s.mp3'], 'ss': ['recordings/audio/HK/_ss.mp3', 'recordings/audio/EC/_ss.mp3', 'recordings/audio/CB/_ss.mp3', 'recordings/audio/JJ/_ss.mp3', 'recordings/audio/CL/_ss.mp3'], 'zz': ['recordings/audio/SL/_zz.mp3', 'recordings/audio/EC/_zz.mp3', 'recordings/audio/CG/_zz.mp3', 'recordings/audio/CB/_zz.mp3'], 'm': ['recordings/audio/CB/_m.mp3', 'recordings/audio/EC/_m.mp3', 'recordings/audio/CL/_m.mp3', 'recordings/audio/JJ/_m.mp3', 'recordings/audio/SL/_m.mp3'], 'nn': ['recordings/audio/AVD/_nn.mp3', 'recordings/audio/EC/_nn.mp3', 'recordings/audio/CG/_nn.mp3', 'recordings/audio/CJAK/_nn.mp3', 'recordings/audio/HK/_nn.mp3'], 'ee': ['recordings/audio/NG/_ee.mp3', 'recordings/audio/SL/_ee.mp3', 'recordings/audio/AVD/_ee.mp3', 'recordings/audio/RR/_ee.mp3', 'recordings/audio/CB/_ee.mp3', 'recordings/audio/CG/_ee.mp3', 'recordings/audio/JJ/_ee.mp3'], 'e': ['recordings/audio/SL/_e.mp3', 'recordings/audio/CG/_e.mp3', 'recordings/audio/JJ/_e.mp3', 'recordings/audio/CL/_e.mp3'], 'i': ['recordings/audio/CG/_i.mp3', 'recordings/audio/SL/_i.mp3', 'recordings/audio/HK/_i.mp3', 'recordings/audio/JJ/_i.mp3'], 'oe': ['recordings/audio/SL/_oe.mp3'], 'u': ['recordings/audio/CL/_u.mp3', 'recordings/audio/CG/_u.mp3', 'recordings/audio/JJ/_u.mp3', 'recordings/audio/SL/_u.mp3'], 'an': ['recordings/audio/JJ/_an.mp3', 'recordings/audio/CG/_an.mp3', 'recordings/audio/LS/_an.mp3', 'recordings/audio/SL/_an.mp3', 'recordings/audio/HK/_an.mp3', 'recordings/audio/AVD/_an.mp3'], 'on': ['recordings/audio/NG/_on.mp3', 'recordings/audio/CL/_on.mp3', 'recordings/audio/MM/_on.mp3', 'recordings/audio/CG/_on.mp3', 'recordings/audio/SL/_on.mp3', 'recordings/audio/LS/_on.mp3'], 'z': ['recordings/audio/CG/_z.mp3', 'recordings/audio/CL/_z.mp3', 'recordings/audio/SL/_z.mp3', 'recordings/audio/JJ/_z.mp3'], 'n': ['recordings/audio/CL/_n.mp3', 'recordings/audio/JJ/_n.mp3', 'recordings/audio/SL/_n.mp3', 'recordings/audio/CB/_n.mp3', 'recordings/audio/CG/_n.mp3', 'recordings/audio/AVD/_n.mp3'], 'r': ['recordings/audio/SL/_r.mp3', 'recordings/audio/CL/_r.mp3', 'recordings/audio/CG/_r.mp3'], 'oej': ['recordings/audio/MM/_oej.mp3', 'recordings/audio/CG/_oej.mp3', 'recordings/audio/JJ/_oej.mp3', 'recordings/audio/SL/_oej.mp3', 'recordings/audio/LS/_oej.mp3'], 'uj': ['recordings/audio/HK/_uj.mp3', 'recordings/audio/SL/_uj.mp3', 'recordings/audio/LS/_uj.mp3'], 't': ['recordings/audio/CJAK/_t.mp3', 'recordings/audio/CB/_t.mp3'], 'o': ['recordings/audio/JJ/_o.mp3', 'recordings/audio/CJAK/_o.mp3', 'recordings/audio/CB/_o.mp3'], 'k': ['recordings/audio/CL/_k.mp3', 'recordings/audio/CG/_k.mp3'], 'w': ['recordings/audio/HK/_w.mp3', 'recordings/audio/CG/_w.mp3'], 'j': ['recordings/audio/CG/_j.mp3'], 'g': ['recordings/audio/CL/_g.mp3', 'recordings/audio/JJ/_g.mp3'], 'eh': ['recordings/audio/HK/_eh.mp3', 'recordings/audio/AVD/_eh.mp3', 'recordings/audio/JJ/_eh.mp3', 'recordings/audio/CL/_eh.mp3'], 'yy': ['recordings/audio/JJ/_yy.mp3', 'recordings/audio/LS/_yy.mp3']}, 'words': {'avion': ['recordings/audio/AM/avion.mp3', 'recordings/audio/CB/avion.mp3', 'recordings/audio/CL/avion.mp3', 'recordings/audio/CJAK/avion.mp3', 'recordings/audio/CG/avion.mp3', 'recordings/audio/JJ/avion.mp3', 'recordings/audio/NG/avion.mp3', 'recordings/audio/MM/avion.mp3', 'recordings/audio/SL/avion.mp3', 'recordings/audio/AMB/avion.mp3'], 'danser': ['recordings/audio/CL/danser.mp3', 'recordings/audio/AMB/danser.mp3', 'recordings/audio/CG/danser.mp3', 'recordings/audio/JJ/danser.mp3', 'recordings/audio/SL/danser.mp3', 'recordings/audio/MM/danser.mp3', 'recordings/audio/CB/danser.mp3'], 'nez': ['recordings/audio/CL/nez.mp3', 'recordings/audio/SL/nez.mp3', 'recordings/audio/AMB/nez.mp3', 'recordings/audio/JJ/nez.mp3', 'recordings/audio/NG/nez.mp3', 'recordings/audio/MM/nez.mp3'], 'et': ['recordings/audio/AMB/et.mp3', 'recordings/audio/SL/et.mp3', 'recordings/audio/MM/et.mp3', 'recordings/audio/JJ/et.mp3'], 'ai': ['recordings/audio/MM/ai.mp3', 'recordings/audio/JJ/ai.mp3', 'recordings/audio/AMB/ai.mp3', 'recordings/audio/SL/ai.mp3'], 'amis': ['recordings/audio/JJ/amis.mp3', 'recordings/audio/NG/amis.mp3', 'recordings/audio/AMB/amis.mp3', 'recordings/audio/CL/amis.mp3', 'recordings/audio/SL/amis.mp3', 'recordings/audio/CG/amis.mp3'], 'lune': ['recordings/audio/CG/lune.mp3', 'recordings/audio/CL/lune.mp3', 'recordings/audio/AM/lune.mp3', 'recordings/audio/SL/lune.mp3', 'recordings/audio/CB/lune.mp3', 'recordings/audio/CJAK/lune.mp3', 'recordings/audio/JJ/lune.mp3', 'recordings/audio/EC/lune.mp3', 'recordings/audio/AMB/lune.mp3'], 'flute': ['recordings/audio/AMB/flute.mp3', 'recordings/audio/SL/flute.mp3', 'recordings/audio/CG/flute.mp3'], 'faim': ['recordings/audio/HK/faim.mp3', 'recordings/audio/AMB/faim.mp3', 'recordings/audio/NG/faim.mp3', 'recordings/audio/JJ/faim.mp3'], 'elephant': ['recordings/audio/AMB/elephant.mp3', 'recordings/audio/AVD/elephant.mp3', 'recordings/audio/MM/elephant.mp3', 'recordings/audio/CL/elephant.mp3', 'recordings/audio/EC/elephant.mp3', 'recordings/audio/JJ/elephant.mp3'], 'wagon': ['recordings/audio/SL/wagon.mp3', 'recordings/audio/CG/wagon.mp3', 'recordings/audio/JJ/wagon.mp3', 'recordings/audio/AMB/wagon.mp3', 'recordings/audio/EC/wagon.mp3'], 'dix': ['recordings/audio/JJ/dix.mp3', 'recordings/audio/MM/dix.mp3', 'recordings/audio/EC/dix.mp3', 'recordings/audio/AMB/dix.mp3', 'recordings/audio/CG/dix.mp3'], 'chenille': ['recordings/audio/NG/chenille.mp3', 'recordings/audio/EC/chenille.mp3', 'recordings/audio/AMB/chenille.mp3', 'recordings/audio/AM/chenille.mp3', 'recordings/audio/HK/chenille.mp3', 'recordings/audio/JJ/chenille.mp3', 'recordings/audio/CG/chenille.mp3', 'recordings/audio/SL/chenille.mp3'], 'papillon': ['recordings/audio/CG/papillon.mp3', 'recordings/audio/AVD/papillon.mp3', 'recordings/audio/AMB/papillon.mp3', 'recordings/audio/JJ/papillon.mp3', 'recordings/audio/RR/papillon.mp3', 'recordings/audio/NG/papillon.mp3', 'recordings/audio/SL/papillon.mp3', 'recordings/audio/EC/papillon.mp3', 'recordings/audio/CL/papillon.mp3'], 'feuille': ['recordings/audio/MM/feuille.mp3', 'recordings/audio/JJ/feuille.mp3', 'recordings/audio/AMB/feuille.mp3', 'recordings/audio/LS/feuille.mp3', 'recordings/audio/SL/feuille.mp3'], 'ecureuil': ['recordings/audio/CG/ecureuil.mp3', 'recordings/audio/AMB/ecureuil.mp3'], 'neige': ['recordings/audio/JJ/neige.mp3', 'recordings/audio/SL/neige.mp3', 'recordings/audio/EC/neige.mp3', 'recordings/audio/HK/neige.mp3', 'recordings/audio/CG/neige.mp3', 'recordings/audio/CB/neige.mp3', 'recordings/audio/NG/neige.mp3', 'recordings/audio/MM/neige.mp3', 'recordings/audio/AVD/neige.mp3', 'recordings/audio/AM/neige.mp3'], 'fete': ['recordings/audio/LS/fete.mp3', 'recordings/audio/AM/fete.mp3', 'recordings/audio/JJ/fete.mp3', 'recordings/audio/EC/fete.mp3'], 'chaise': ['recordings/audio/HK/chaise.mp3', 'recordings/audio/AM/chaise.mp3', 'recordings/audio/CG/chaise.mp3', 'recordings/audio/CL/chaise.mp3'], 'oeuf': ['recordings/audio/SL/oeuf.mp3', 'recordings/audio/JJ/oeuf.mp3', 'recordings/audio/AM/oeuf.mp3', 'recordings/audio/CG/oeuf.mp3'], 'colle': ['recordings/audio/AM/colle.mp3', 'recordings/audio/CL/colle.mp3', 'recordings/audio/SL/colle.mp3', 'recordings/audio/EC/colle.mp3'], 'faon': ['recordings/audio/SL/faon.mp3', 'recordings/audio/HK/faon.mp3', 'recordings/audio/AVD/faon.mp3', 'recordings/audio/CG/faon.mp3', 'recordings/audio/JJ/faon.mp3', 'recordings/audio/AM/faon.mp3', 'recordings/audio/EC/faon.mp3'], 'lapin': ['recordings/audio/CG/lapin.mp3', 'recordings/audio/EC/lapin.mp3', 'recordings/audio/NG/lapin.mp3', 'recordings/audio/CL/lapin.mp3', 'recordings/audio/AVD/lapin.mp3', 'recordings/audio/AM/lapin.mp3'], 'main': ['recordings/audio/NG/main.mp3', 'recordings/audio/JJ/main.mp3', 'recordings/audio/AM/main.mp3', 'recordings/audio/EC/main.mp3'], 'peint': ['recordings/audio/AM/peint.mp3', 'recordings/audio/NG/peint.mp3'], 'huile': ['recordings/audio/AM/huile.mp3', 'recordings/audio/EC/huile.mp3', 'recordings/audio/JJ/huile.mp3', 'recordings/audio/MM/huile.mp3', 'recordings/audio/CL/huile.mp3'], 'koala': ['recordings/audio/AVD/koala.mp3', 'recordings/audio/CG/koala.mp3', 'recordings/audio/CL/koala.mp3', 'recordings/audio/CJAK/koala.mp3', 'recordings/audio/AM/koala.mp3'], 'cinq': ['recordings/audio/CL/cinq.mp3', 'recordings/audio/NG/cinq.mp3', 'recordings/audio/JJ/cinq.mp3', 'recordings/audio/AM/cinq.mp3', 'recordings/audio/CJAK/cinq.mp3'], 'gateau': ['recordings/audio/CG/gateau.mp3', 'recordings/audio/JJ/gateau.mp3', 'recordings/audio/AM/gateau.mp3'], 'guitare': ['recordings/audio/MM/guitare.mp3', 'recordings/audio/NG/guitare.mp3', 'recordings/audio/JJ/guitare.mp3', 'recordings/audio/EC/guitare.mp3', 'recordings/audio/AM/guitare.mp3', 'recordings/audio/CG/guitare.mp3', 'recordings/audio/CL/guitare.mp3'], 'fourmi': ['recordings/audio/JJ/fourmi.mp3', 'recordings/audio/CG/fourmi.mp3', 'recordings/audio/AM/fourmi.mp3', 'recordings/audio/SL/fourmi.mp3'], 'velo': ['recordings/audio/AM/velo.mp3', 'recordings/audio/CB/velo.mp3', 'recordings/audio/MM/velo.mp3', 'recordings/audio/CG/velo.mp3', 'recordings/audio/JJ/velo.mp3'], 'piscine': ['recordings/audio/CG/piscine.mp3', 'recordings/audio/HK/piscine.mp3', 'recordings/audio/AM/piscine.mp3', 'recordings/audio/CB/piscine.mp3', 'recordings/audio/SL/piscine.mp3', 'recordings/audio/CL/piscine.mp3'], 'chat': ['recordings/audio/MM/chat.mp3', 'recordings/audio/AVD/chat.mp3', 'recordings/audio/AM/chat.mp3', 'recordings/audio/SL/chat.mp3', 'recordings/audio/CL/chat.mp3'], 'oreille': ['recordings/audio/JJ/oreille.mp3', 'recordings/audio/RR/oreille.mp3', 'recordings/audio/MM/oreille.mp3', 'recordings/audio/AM/oreille.mp3', 'recordings/audio/SL/oreille.mp3', 'recordings/audio/CG/oreille.mp3'], 'etoile': ['recordings/audio/SL/etoile.mp3', 'recordings/audio/CG/etoile.mp3', 'recordings/audio/EC/etoile.mp3', 'recordings/audio/CL/etoile.mp3', 'recordings/audio/JJ/etoile.mp3'], 'ile': ['recordings/audio/EC/ile.mp3', 'recordings/audio/SL/ile.mp3', 'recordings/audio/JJ/ile.mp3'], 'orange': ['recordings/audio/MM/orange.mp3', 'recordings/audio/NG/orange.mp3', 'recordings/audio/EC/orange.mp3', 'recordings/audio/SL/orange.mp3', 'recordings/audio/JJ/orange.mp3'], 'dent': ['recordings/audio/AVD/dent.mp3', 'recordings/audio/SL/dent.mp3', 'recordings/audio/EC/dent.mp3', 'recordings/audio/CG/dent.mp3'], 'lampe': ['recordings/audio/EC/lampe.mp3', 'recordings/audio/SL/lampe.mp3', 'recordings/audio/JJ/lampe.mp3'], 'tempete': ['recordings/audio/EC/tempete.mp3'], 'timbre': ['recordings/audio/JJ/timbre.mp3', 'recordings/audio/EC/timbre.mp3', 'recordings/audio/CB/timbre.mp3'], 'parfum': ['recordings/audio/JJ/parfum.mp3', 'recordings/audio/EC/parfum.mp3', 'recordings/audio/CB/parfum.mp3'], 'ciel': ['recordings/audio/JJ/ciel.mp3', 'recordings/audio/EC/ciel.mp3', 'recordings/audio/CG/ciel.mp3'], 'bateau': ['recordings/audio/SL/bateau.mp3', 'recordings/audio/EC/bateau.mp3', 'recordings/audio/CL/bateau.mp3'], 'de': ['recordings/audio/CB/de.mp3', 'recordings/audio/CL/de.mp3', 'recordings/audio/NG/de.mp3', 'recordings/audio/EC/de.mp3'], 'canard': ['recordings/audio/JJ/canard.mp3', 'recordings/audio/CG/canard.mp3', 'recordings/audio/EC/canard.mp3', 'recordings/audio/CL/canard.mp3'], 'cerise': ['recordings/audio/NG/cerise.mp3', 'recordings/audio/EC/cerise.mp3', 'recordings/audio/CB/cerise.mp3', 'recordings/audio/HK/cerise.mp3'], 'garcon': ['recordings/audio/SL/garcon.mp3', 'recordings/audio/CG/garcon.mp3', 'recordings/audio/EC/garcon.mp3', 'recordings/audio/JJ/garcon.mp3'], 'potion': ['recordings/audio/CL/potion.mp3', 'recordings/audio/CB/potion.mp3', 'recordings/audio/JJ/potion.mp3', 'recordings/audio/EC/potion.mp3'], 'zebre': ['recordings/audio/AVD/zebre.mp3', 'recordings/audio/CL/zebre.mp3', 'recordings/audio/MM/zebre.mp3', 'recordings/audio/EC/zebre.mp3', 'recordings/audio/SL/zebre.mp3'], 'rose': ['recordings/audio/EC/rose.mp3', 'recordings/audio/CL/rose.mp3'], 'jardin': ['recordings/audio/EC/jardin.mp3', 'recordings/audio/CG/jardin.mp3', 'recordings/audio/JJ/jardin.mp3', 'recordings/audio/SL/jardin.mp3', 'recordings/audio/CB/jardin.mp3'], 'girafe': ['recordings/audio/JJ/girafe.mp3', 'recordings/audio/EC/girafe.mp3', 'recordings/audio/CB/girafe.mp3'], 'maison': ['recordings/audio/JJ/maison.mp3', 'recordings/audio/CB/maison.mp3', 'recordings/audio/EC/maison.mp3', 'recordings/audio/CL/maison.mp3', 'recordings/audio/MM/maison.mp3', 'recordings/audio/AVD/maison.mp3', 'recordings/audio/SL/maison.mp3', 'recordings/audio/CG/maison.mp3'], 'des': ['recordings/audio/MM/des.mp3', 'recordings/audio/JJ/des.mp3', 'recordings/audio/AVD/des.mp3', 'recordings/audio/SL/des.mp3'], 'renard': ['recordings/audio/JJ/renard.mp3', 'recordings/audio/SL/renard.mp3'], 'stylo': ['recordings/audio/SL/stylo.mp3', 'recordings/audio/NG/stylo.mp3'], 'jeu': ['recordings/audio/CL/jeu.mp3', 'recordings/audio/CG/jeu.mp3', 'recordings/audio/SL/jeu.mp3', 'recordings/audio/JJ/jeu.mp3', 'recordings/audio/MM/jeu.mp3'], 'coeur': ['recordings/audio/SL/coeur.mp3', 'recordings/audio/JJ/coeur.mp3'], 'oeil': ['recordings/audio/AVD/oeil.mp3', 'recordings/audio/SL/oeil.mp3'], 'heure': ['recordings/audio/JJ/heure.mp3', 'recordings/audio/SL/heure.mp3'], 'cadeau': ['recordings/audio/JJ/cadeau.mp3', 'recordings/audio/CJAK/cadeau.mp3', 'recordings/audio/SL/cadeau.mp3', 'recordings/audio/NG/cadeau.mp3'], 'rigolo': ['recordings/audio/CB/rigolo.mp3', 'recordings/audio/MM/rigolo.mp3', 'recordings/audio/SL/rigolo.mp3', 'recordings/audio/JJ/rigolo.mp3'], 'fantome': ['recordings/audio/CG/fantome.mp3', 'recordings/audio/SL/fantome.mp3'], 'hibou': ['recordings/audio/CJAK/hibou.mp3', 'recordings/audio/CL/hibou.mp3', 'recordings/audio/SL/hibou.mp3', 'recordings/audio/CG/hibou.mp3'], 'ou': ['recordings/audio/CL/ou.mp3', 'recordings/audio/CG/ou.mp3', 'recordings/audio/MM/ou.mp3', 'recordings/audio/SL/ou.mp3'], 'bonbon': ['recordings/audio/CL/bonbon.mp3', 'recordings/audio/CG/bonbon.mp3', 'recordings/audio/SL/bonbon.mp3', 'recordings/audio/JJ/bonbon.mp3', 'recordings/audio/NG/bonbon.mp3'], 'pompier': ['recordings/audio/SL/pompier.mp3', 'recordings/audio/CG/pompier.mp3'], 'orchestre': ['recordings/audio/SL/orchestre.mp3', 'recordings/audio/JJ/orchestre.mp3'], 'savon': ['recordings/audio/AVD/savon.mp3', 'recordings/audio/SL/savon.mp3', 'recordings/audio/NG/savon.mp3', 'recordings/audio/CB/savon.mp3', 'recordings/audio/CG/savon.mp3', 'recordings/audio/CL/savon.mp3'], 'livre': ['recordings/audio/RR/livre.mp3', 'recordings/audio/CL/livre.mp3', 'recordings/audio/CG/livre.mp3', 'recordings/audio/SL/livre.mp3', 'recordings/audio/JJ/livre.mp3'], 'robot': ['recordings/audio/JJ/robot.mp3', 'recordings/audio/CG/robot.mp3', 'recordings/audio/MM/robot.mp3', 'recordings/audio/CB/robot.mp3', 'recordings/audio/SL/robot.mp3'], 'medaille': ['recordings/audio/CG/medaille.mp3', 'recordings/audio/SL/medaille.mp3', 'recordings/audio/CL/medaille.mp3'], 'ail': ['recordings/audio/SL/ail.mp3', 'recordings/audio/CG/ail.mp3', 'recordings/audio/HK/ail.mp3', 'recordings/audio/CL/ail.mp3'], 'the': ['recordings/audio/CG/the.mp3', 'recordings/audio/CB/the.mp3', 'recordings/audio/AVD/the.mp3', 'recordings/audio/CL/the.mp3'], 'fache': ['recordings/audio/CL/fache.mp3', 'recordings/audio/CG/fache.mp3', 'recordings/audio/MM/fache.mp3'], 'fleche': ['recordings/audio/JJ/fleche.mp3', 'recordings/audio/HK/fleche.mp3', 'recordings/audio/CL/fleche.mp3', 'recordings/audio/CG/fleche.mp3'], 'sifflet': ['recordings/audio/AVD/sifflet.mp3', 'recordings/audio/CG/sifflet.mp3'], 'montagne': ['recordings/audio/CJAK/montagne.mp3', 'recordings/audio/CG/montagne.mp3', 'recordings/audio/CL/montagne.mp3'], 'soleil': ['recordings/audio/CG/soleil.mp3', 'recordings/audio/CL/soleil.mp3'], 'cueillir': ['recordings/audio/CG/cueillir.mp3', 'recordings/audio/JJ/cueillir.mp3'], 'grenouille': ['recordings/audio/CG/grenouille.mp3'], 'mais': ['recordings/audio/CL/mais.mp3', 'recordings/audio/CG/mais.mp3'], 'queue': ['recordings/audio/CG/queue.mp3', 'recordings/audio/JJ/queue.mp3'], 'hockey': ['recordings/audio/CG/hockey.mp3', 'recordings/audio/JJ/hockey.mp3'], 'ouest': ['recordings/audio/CG/ouest.mp3', 'recordings/audio/MM/ouest.mp3'], 'lundi': ['recordings/audio/CG/lundi.mp3', 'recordings/audio/CL/lundi.mp3'], 'tomate': ['recordings/audio/AVD/tomate.mp3', 'recordings/audio/CL/tomate.mp3', 'recordings/audio/CJAK/tomate.mp3', 'recordings/audio/NG/tomate.mp3'], 'couter': ['recordings/audio/CL/couter.mp3']}};

const michael_mode_fr = {'phonemes': {'a': ['recordings/audio/michael_mode/_a.mp3'], 'aa': ['recordings/audio/michael_mode/_aa.mp3'], 'ee': ['recordings/audio/michael_mode/_ee.mp3'], 'eh': ['recordings/audio/michael_mode/_eh.mp3'], 'e': ['recordings/audio/michael_mode/_e.mp3'], 'i': ['recordings/audio/michael_mode/_i.mp3'], 'y': ['recordings/audio/michael_mode/_y.mp3'], 'eu': ['recordings/audio/michael_mode/_eu.mp3'], 'oe': ['recordings/audio/michael_mode/_oe.mp3'], 'o': ['recordings/audio/michael_mode/_o.mp3'], 'oo': ['recordings/audio/michael_mode/_oo.mp3'], 'u': ['recordings/audio/michael_mode/_u.mp3'], 'an': ['recordings/audio/michael_mode/_an.mp3'], 'in': ['recordings/audio/michael_mode/_in.mp3'], 'on': ['recordings/audio/michael_mode/_on.mp3'], 'un': ['recordings/audio/michael_mode/_un.mp3'], 'yy': ['recordings/audio/michael_mode/_yy.mp3'], 'w': ['recordings/audio/michael_mode/_w.mp3'], 'j': ['recordings/audio/michael_mode/_j.mp3'], 'p': ['recordings/audio/michael_mode/_p.mp3'], 'b': ['recordings/audio/michael_mode/_b.mp3'], 't': ['recordings/audio/michael_mode/_t.mp3'], 'd': ['recordings/audio/michael_mode/_d.mp3'], 'k': ['recordings/audio/michael_mode/_k.mp3'], 'g': ['recordings/audio/michael_mode/_g.mp3'], 'f': ['recordings/audio/michael_mode/_f.mp3'], 'v': ['recordings/audio/michael_mode/_v.mp3'], 's': ['recordings/audio/michael_mode/_s.mp3'], 'z': ['recordings/audio/michael_mode/_z.mp3'], 'ss': ['recordings/audio/michael_mode/_ss.mp3'], 'zz': ['recordings/audio/michael_mode/_zz.mp3'], 'm': ['recordings/audio/michael_mode/_m.mp3'], 'n': ['recordings/audio/michael_mode/_n.mp3'], 'nn': ['recordings/audio/michael_mode/_nn.mp3'], 'l': ['recordings/audio/michael_mode/_l.mp3'], 'r': ['recordings/audio/michael_mode/_r.mp3'], 'aj': ['recordings/audio/michael_mode/_aj.mp3'], 'ej': ['recordings/audio/michael_mode/_ej.mp3'], 'ij': ['recordings/audio/michael_mode/_ij.mp3'], 'oej': ['recordings/audio/michael_mode/_oej.mp3'], 'uj': ['recordings/audio/michael_mode/_uj.mp3']}};
