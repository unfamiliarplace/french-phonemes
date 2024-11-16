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
    new Phoneme('a', 'voyelle orale', 'Open front unrounded vowel', ['a'], ['Avion'], '___', 'https://en.wikipedia.org/wiki/Open_front_unrounded_vowel', 'https://en.wikipedia.org/wiki/File:Open_front_unrounded_vowel.ogg', '', ''),
    new Phoneme('ɑ', 'voyelle orale', 'Open back unrounded vowel',  ['â'], ['fÂché'], '___', 'https://en.wikipedia.org/wiki/Open_back_unrounded_vowel', 'https://en.wikipedia.org/wiki/File:Open_back_unrounded_vowel.ogg', '___', '___'),
    new Phoneme('e', 'voyelle orale', 'Close-mid front unrounded vowel', ['é'], ['bÉbÉ'], '___', 'https://en.wikipedia.org/wiki/Close-mid_front_unrounded_vowel', 'https://en.wikipedia.org/wiki/File:Close-mid_front_unrounded_vowel.ogg', '___', '___'),
    new Phoneme('ɛ', 'voyelle orale', 'Open-mid front unrounded vowel', ['è'], ['flÈche'], '___', 'https://en.wikipedia.org/wiki/Open-mid_front_unrounded_vowel', 'https://en.wikipedia.org/wiki/File:Open-mid_front_unrounded_vowel.ogg', '___', '___'),
    new Phoneme('ə', 'voyelle orale', 'Mid central vowel', ['e'], ['rEnard'], '___', 'https://en.wikipedia.org/wiki/Mid_central_vowel', 'https://en.wikipedia.org/wiki/File:Mid-central_vowel.ogg', '___', '___'),
    new Phoneme('i', 'voyelle orale', 'Close front unrounded vowel', ['i'], ['amIs'], '___', 'https://en.wikipedia.org/wiki/Close_front_unrounded_vowel', 'https://en.wikipedia.org/wiki/File:Close_front_unrounded_vowel.ogg', '___', '___'),
    new Phoneme('y', 'voyelle orale', 'Close front rounded vowel', ['u'], ['lUne'], '___', 'https://en.wikipedia.org/wiki/Close_front_rounded_vowel', 'https://en.wikipedia.org/wiki/File:Close_front_rounded_vowel.ogg', '___', '___'),
    new Phoneme('ø', 'voyelle orale', 'Close-mid front rounded vowel', ['eu'], ['fEU'], '___', 'https://en.wikipedia.org/wiki/Close-mid_front_rounded_vowel', 'https://en.wikipedia.org/wiki/File:Close-mid_front_rounded_vowel.ogg', '___', '___'),
    new Phoneme('œ', 'voyelle orale', 'Open-mid front ronded vowel', ['œu'], ['cŒUr'], '___', 'https://en.wikipedia.org/wiki/Open-mid_front_rounded_vowel', 'https://en.wikipedia.org/wiki/File:Open-mid_front_rounded_vowel_(2).ogg', '___', '___'),
    new Phoneme('o', 'voyelle orale', 'Close-mid back rounded vowel', ['o'], ['vélO'], '___', 'https://en.wikipedia.org/wiki/Close-mid_back_rounded_vowel', 'https://en.wikipedia.org/wiki/File:Close-mid_back_rounded_vowel.ogg', '___', '___'),
    new Phoneme('ɔ', 'voyelle orale', 'Open-mid back rounded vowel', ['o'], ['cOlle'], '___', 'https://en.wikipedia.org/wiki/Open-mid_back_rounded_vowel', 'https://en.wikipedia.org/wiki/File:PR-open-mid_back_rounded_vowel.ogg', '___', '___'),
    new Phoneme('u', 'voyelle orale', 'Close back rounded vowel', ['ou'], ['hibOU'], '___', 'https://en.wikipedia.org/wiki/Close_back_rounded_vowel', 'https://en.wikipedia.org/wiki/File:Close_back_rounded_vowel.ogg', '___', '___'),
])

const fr_voyelles_nasales = new PhonemeGroup('voyelles nasales', [
    new Phoneme('ɑ̃', 'voyelle nasale', 'na', ['en'], ['dENt'], 'no', 'https://en.wikipedia.org/wiki/Nasal_vowel', 'up', 'uwo', 'un'),
    new Phoneme('ɛ̃', 'voyelle nasale', 'na', ['in'], ['lapIN'], 'no', 'https://en.wikipedia.org/wiki/Nasal_vowel', 'up', 'uwo', 'un'),
    new Phoneme('ɔ̃', 'voyelle nasale', 'na', ['on'], ['bONbON'], 'no', 'https://en.wikipedia.org/wiki/Nasal_vowel', 'up', 'uwo', 'un'),
    new Phoneme('œ̃', 'voyelle nasale', 'na', ['un'], ['lUNdi'], 'no', 'https://en.wikipedia.org/wiki/Nasal_vowel', 'up', 'uwo', 'un'),
])

const fr_semi_voyelles = new PhonemeGroup('semi-voyelles', [
    new Phoneme('ɥ', 'semi-voyelle', 'Voiced labial–palatal approximant', ['ui'], ['plUIe'], 'no', 'https://en.wikipedia.org/wiki/Voiced_labial%E2%80%93palatal_approximant', 'https://en.wikipedia.org/wiki/File:LL-Q150_(fra)-WikiLucas00-IPA_%C9%A5.wav', 'uwo', 'un'),
    new Phoneme('w', 'semi-voyelle', 'Voiced labial–velar approximant', ['ou'], ['OUi'], 'no', 'https://en.wikipedia.org/wiki/Voiced_labial%E2%80%93velar_approximant', 'https://en.wikipedia.org/wiki/File:Voiced_labio-velar_approximant.ogg', 'uwo', 'un'),
    new Phoneme('j', 'semi-voyelle', 'Voiced palatal approximant', ['i'], ['cIel'], 'no', 'https://en.wikipedia.org/wiki/Voiced_palatal_approximant', 'https://en.wikipedia.org/wiki/File:Palatal_approximant.ogg', 'uwo', 'un'),
])

const fr_consonnes_occlusives = new PhonemeGroup('consonnes occlusives', [
    new Phoneme('p', 'consonne occlusive', 'Voiceless bilabial plosive', ['p'], ['PaPillon'], 'no', 'https://en.wikipedia.org/wiki/Voiceless_bilabial_plosive', 'https://en.wikipedia.org/wiki/File:Voiceless_bilabial_plosive.ogg', 'uwo', 'un'),
    new Phoneme('b', 'consonne occlusive', 'Voiced bilabial plosive', ['b'], ['Bateau'], 'no', 'https://en.wikipedia.org/wiki/Voiced_bilabial_plosive', 'https://en.wikipedia.org/wiki/File:Voiced_bilabial_plosive.ogg', 'uwo', 'un'),
    new Phoneme('t', 'consonne occlusive', 'Voiceless alveolar plosive', ['t'], ['TomaTe'], 'no', 'https://en.wikipedia.org/wiki/Voiceless_dental_and_alveolar_plosives#Dental_or_denti-alveolar', 'https://en.wikipedia.org/wiki/File:Voiceless_alveolar_plosive.ogg', 'uwo', 'un'),
    new Phoneme('d', 'consonne occlusive', 'Voiced alveolar plosive', ['d'], ['Dé'], 'no', 'https://en.wikipedia.org/wiki/Voiced_dental_and_alveolar_plosives#Dental_or_denti-alveolar', 'https://en.wikipedia.org/wiki/File:Voiced_alveolar_plosive.ogg', 'uwo', 'un'),
    new Phoneme('k', 'consonne occlusive', 'Voiceless velar plosive', ['c'], ['Canard'], 'no', 'https://en.wikipedia.org/wiki/Voiceless_velar_plosive', 'https://en.wikipedia.org/wiki/File:Voiceless_velar_plosive.ogg', 'uwo', 'un'),
    new Phoneme('g', 'consonne occlusive', 'Voiced velar plosive', ['g'], ['draGon'], 'no', 'https://en.wikipedia.org/wiki/Voiced_velar_plosive', 'https://en.wikipedia.org/wiki/File:Voiced_velar_plosive_02.ogg', 'uwo', 'un'),
])

const fr_consonnes_fricatives = new PhonemeGroup('consonnes fricatives', [
    new Phoneme('f', 'consonne fricative', 'Voiceless labiodental fricative', ['f'], ['Fourmi'], 'no', 'https://en.wikipedia.org/wiki/Voiceless_labiodental_fricative', 'Voiceless labiodental fricative', 'uwo', 'un'),
    new Phoneme('v', 'consonne fricative', 'Voiced labiodental fricative', ['v'], ['Vache'], 'no', 'https://en.wikipedia.org/wiki/Voiced_labiodental_fricative', 'https://en.wikipedia.org/wiki/File:Voiced_labio-dental_fricative.ogg', 'uwo', 'un'),
    new Phoneme('s', 'consonne fricative', 'Voiced alveolar sibilant', ['s'], ['Savon'], 'no', 'https://en.wikipedia.org/wiki/Voiceless_alveolar_fricative#Voiceless_alveolar_sibilant', 'https://en.wikipedia.org/wiki/File:Voiceless_alveolar_sibilant.ogg', 'uwo', 'un'),
    new Phoneme('z', 'consonne fricative', 'Voiced alveolar sibilant', ['z'], ['Zèbre'], 'no', 'https://en.wikipedia.org/wiki/Voiced_alveolar_fricative#Voiced_alveolar_sibilant', 'https://en.wikipedia.org/wiki/File:Voiced_alveolar_sibilant.ogg', 'uwo', 'un'),
    new Phoneme('ʃ', 'consonne fricative', 'Voiceless postalveolar fricative', ['ch'], ['CHat'], 'no', 'https://en.wikipedia.org/wiki/Voiceless_postalveolar_fricative', 'Voiceless postalveolar fricative', 'uwo', 'un'),
    new Phoneme('ʒ', 'consonne fricative', 'Voiced postalveolar fricative', ['j'], ['Jouer'], 'no', 'https://en.wikipedia.org/wiki/Voiced_postalveolar_fricative', 'https://en.wikipedia.org/wiki/File:Voiced_palato-alveolar_sibilant.ogg', 'uwo', 'un'),
])

const fr_consonnes_nasales = new PhonemeGroup('consonnes nasales', [
    new Phoneme('m', 'consonne nasale', 'Voiced bilabial nasal', ['m'], ['Maison'], 'no', 'https://en.wikipedia.org/wiki/Voiced_bilabial_nasal', 'https://en.wikipedia.org/wiki/File:Bilabial_nasal.ogg', 'uwo', 'un'),
    new Phoneme('n', 'consonne nasale', 'Voiced alveolar nasal', ['n'], ['Nuage'], 'no', 'https://en.wikipedia.org/wiki/Voiced_dental,_alveolar_and_postalveolar_nasals', 'https://en.wikipedia.org/wiki/File:Alveolar_nasal.ogg', 'uwo', 'un'),
    new Phoneme('ɲ', 'consonne nasale', 'Voiced palatal nasal', ['gn'], ['cyGNe'], 'no', 'https://en.wikipedia.org/wiki/Voiced_palatal_nasal', 'https://en.wikipedia.org/wiki/File:Palatal_nasal.ogg', 'uwo', 'un'),
])

const fr_consonnes_liquides = new PhonemeGroup('consonnes liquides', [
    new Phoneme('l', 'consonne liquide', 'Voiced alveolar lateral approximant', ['l'], ['Lion'], 'no', 'https://en.wikipedia.org/wiki/Voiced_dental,_alveolar_and_postalveolar_lateral_approximants', 'https://en.wikipedia.org/wiki/File:Alveolar_lateral_approximant.ogg', 'uwo', 'un'),
    new Phoneme('R', 'consonne liquide', 'Voiced uvular fricative', ['r'], ['Robot'], 'no', 'https://en.wikipedia.org/wiki/Voiced_uvular_fricative', 'https://en.wikipedia.org/wiki/File:Voiced_uvular_fricative.ogg', 'uwo', 'un'),
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
