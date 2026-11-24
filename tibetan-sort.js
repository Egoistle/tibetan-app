// Sorting Tibetan words in dictionary order.
//
// Tibetan dictionaries sort by the ROOT letter of a syllable, not by the first
// letter written. So བཀྲ (bkra) comes under ཀ, not under བ. Within one root
// letter the order is: superscript, then prefix, then subscript, then vowel,
// then suffixes, e.g. ཀ ཀྱ ཀྲ དཀ བཀ རྐ བརྐ ལྐ སྐ བསྐ.
//
// This covers normal Tibetan spelling. Sanskrit-style stacks (mantras etc.)
// may not sort perfectly.
//
// Use it like this:   list.sort(function (a, b) { return compareTibetan(a.tibetan, b.tibetan); });

const TIB_SUPERSCRIPTS = ["", "ར", "ལ", "ས"];
const TIB_PREFIXES = ["", "ག", "ད", "བ", "མ", "འ"];
const TIB_SUBSCRIPTS = ["", "ཡ", "ར", "ལ", "ཝ"];
const TIB_VOWELS = ["", "ི", "ུ", "ེ", "ོ"];

function isTibLetter(ch) {
    const c = ch.charCodeAt(0);
    return c >= 0x0F40 && c <= 0x0F6C;
}

function isTibSubjoined(ch) {
    const c = ch.charCodeAt(0);
    return c >= 0x0F90 && c <= 0x0FBC;
}

// a letter written below another has its own Unicode character; this turns it
// back into the normal letter (they are always 0x50 apart)
function tibToBase(ch) {
    return String.fromCharCode(ch.charCodeAt(0) - 0x50);
}

// Splits a syllable into "units": a letter plus anything written below or above it.
// བསྒྲུབས → [བ] [སྒྲུ] [བ] [ས]
function tibUnits(syllable) {
    const units = [];
    for (const ch of syllable) {
        if (isTibLetter(ch)) {
            units.push([ch]);
        } else if (units.length > 0) {
            units[units.length - 1].push(ch);
        }
    }
    return units;
}

// Turns one syllable into a list of numbers that sort in dictionary order.
function tibSyllableKey(syllable) {
    const units = tibUnits(syllable);
    if (units.length === 0) {
        return [];
    }

    // The root is the unit with something written below or above it.
    // If there is none, guess from the number of letters.
    let rootPos = units.findIndex(function (u) { return u.length > 1; });
    if (rootPos === -1) {
        rootPos = (units.length >= 3 && TIB_PREFIXES.includes(units[0][0])) ? 1 : 0;
    }

    const stack = units[rootPos];
    const letters = [stack[0]].concat(stack.filter(isTibSubjoined).map(tibToBase));
    const vowel = stack.find(function (ch) { return TIB_VOWELS.includes(ch) && ch !== ""; }) || "";

    let root = letters[0];
    let superscript = "";
    let subscript = letters[1] || "";
    if (letters.length > 1 && "རལས".includes(letters[0]) && !TIB_SUBSCRIPTS.includes(letters[1])) {
        superscript = letters[0];
        root = letters[1];
        subscript = letters[2] || "";
    }

    const prefix = rootPos > 0 ? units[rootPos - 1][0] : "";
    const suffixes = units.slice(rootPos + 1).map(function (u) { return u[0].charCodeAt(0); });

    return [
        root.charCodeAt(0),
        TIB_SUPERSCRIPTS.indexOf(superscript),
        Math.max(TIB_PREFIXES.indexOf(prefix), 0),
        Math.max(TIB_SUBSCRIPTS.indexOf(subscript), 0),
        Math.max(TIB_VOWELS.indexOf(vowel), 0)
    ].concat(suffixes);
}

// Compares two Tibetan words; use it inside .sort()
function compareTibetan(a, b) {
    const syllablesA = a.split(/[་།\s]+/).filter(Boolean).map(tibSyllableKey);
    const syllablesB = b.split(/[་།\s]+/).filter(Boolean).map(tibSyllableKey);

    for (let i = 0; i < Math.max(syllablesA.length, syllablesB.length); i++) {
        if (!syllablesA[i]) return -1;
        if (!syllablesB[i]) return 1;
        const keyA = syllablesA[i];
        const keyB = syllablesB[i];
        for (let j = 0; j < Math.max(keyA.length, keyB.length); j++) {
            const x = keyA[j] === undefined ? -1 : keyA[j];
            const y = keyB[j] === undefined ? -1 : keyB[j];
            if (x !== y) return x - y;
        }
    }
    return 0;
}
