// Syllables for the timed reading drill.
// Grouped by the reading rule they practise, so you can also study them on their own.
// IPA follows the reading rules; verify against your textbook or a dictionary.

const syllables = [
    // ----- Mixed practice (your original list) -----
    { tibetan: "སྐད་", wylie: "skad", ipa: "/kɛʔ˥˧/" },
    { tibetan: "རྒྱལ་", wylie: "rgyal", ipa: "/cɛː˩˧/" },
    { tibetan: "བཀྲ་", wylie: "bkra", ipa: "/ʈa˥/" },
    { tibetan: "ཤིས་", wylie: "shis", ipa: "/ɕiː˥˧/" },
    { tibetan: "བདེ་", wylie: "bde", ipa: "/te˩˧/" },
    { tibetan: "ལེགས་", wylie: "legs", ipa: "/leʔ˩˧˨/" },
    { tibetan: "སློབ་", wylie: "slob", ipa: "/lop˥˧/" },
    { tibetan: "གཞི་", wylie: "gzhi", ipa: "/ɕi˩˧/" },
    { tibetan: "དབུས་", wylie: "dbus", ipa: "/yː˩˧/" },
    { tibetan: "འབྲས་", wylie: "'bras", ipa: "/ʈɛ˩˧/" },
    { tibetan: "མཁན་", wylie: "mkhan", ipa: "/kʰɛ̃˥/" },
    { tibetan: "གསུམ་", wylie: "gsum", ipa: "/sum˥/" },
    { tibetan: "བརྒྱད་", wylie: "brgyad", ipa: "/cɛʔ˩˧˨/" },
    { tibetan: "སྤྱན་", wylie: "spyan", ipa: "/tɕɛ̃˥/" },
    { tibetan: "ཕྱག་", wylie: "phyag", ipa: "/tɕʰaʔ˥˧/" },
    { tibetan: "ཟླ་", wylie: "zla", ipa: "/da˩˧/" },
    { tibetan: "རྣམ་", wylie: "rnam", ipa: "/nam˥/" },
    { tibetan: "བསམ་", wylie: "bsam", ipa: "/sam˥/" },
    { tibetan: "གྲོལ་", wylie: "grol", ipa: "/ʈʰøː˩˧/" },
    { tibetan: "མཆོད་", wylie: "mchod", ipa: "/tɕʰøʔ˥˧/" },
    { tibetan: "སྙིང་", wylie: "snying", ipa: "/ɲiŋ˥/" },
    { tibetan: "བསྒྲུབས་", wylie: "bsgrubs", ipa: "/ʈup˩˧˨/" },

    // ----- Sonorants (ng ny n m y r l): low on their own, HIGH with a prefix or superscript -----
    { tibetan: "ནམ་", wylie: "nam", ipa: "/nam˩˧/" },          // compare རྣམ rnam above
    { tibetan: "དམིགས་", wylie: "dmigs", ipa: "/miʔ˥˧/" },
    { tibetan: "གནས་", wylie: "gnas", ipa: "/nɛː˥˧/" },
    { tibetan: "གཡོན་", wylie: "g.yon", ipa: "/jø̃˥/" },
    { tibetan: "གཉེན་", wylie: "gnyen", ipa: "/ɲẽ˥/" },

    // ----- Voiced roots (g j d b): aspirated on their own, UNaspirated with a prefix/superscript; always low -----
    { tibetan: "གོས་", wylie: "gos", ipa: "/kʰøː˩˧/" },
    { tibetan: "དོན་", wylie: "don", ipa: "/tʰø̃˩˧/" },
    { tibetan: "བདག་", wylie: "bdag", ipa: "/taʔ˩˧˨/" },
    { tibetan: "འབུ་", wylie: "'bu", ipa: "/pu˩˧/" },
    { tibetan: "འཇིག་", wylie: "'jig", ipa: "/tɕiʔ˩˧˨/" },

    // ----- Voiceless roots: the prefix is simply silent -----
    { tibetan: "གཏམ་", wylie: "gtam", ipa: "/tam˥/" },
    { tibetan: "བཀའ་", wylie: "bka'", ipa: "/ka˥/" },
    { tibetan: "དཔེ་", wylie: "dpe", ipa: "/pe˥/" },
    { tibetan: "མཐོ་", wylie: "mtho", ipa: "/tʰo˥/" },
    { tibetan: "འཁོར་", wylie: "'khor", ipa: "/kʰor˥/" },

    // ----- Subscript ya: ky/khy/gy → c, cʰ; py/phy/by → tɕ, tɕʰ; my → ɲ -----
    { tibetan: "ཀྱང་", wylie: "kyang", ipa: "/caŋ˥/" },
    { tibetan: "ཁྱོད་", wylie: "khyod", ipa: "/cʰøʔ˥˧/" },
    { tibetan: "དཔྱད་", wylie: "dpyad", ipa: "/tɕɛʔ˥˧/" },
    { tibetan: "བྱང་", wylie: "byang", ipa: "/tɕʰaŋ˩˧/" },
    { tibetan: "མྱུར་", wylie: "myur", ipa: "/ɲur˩˧/" },

    // ----- Subscript ra: kr/tr/pr → ʈ; khr/phr → ʈʰ; gr/dr/br → ʈʰ (low), ʈ with a prefix; sr → s -----
    { tibetan: "ཁྲག་", wylie: "khrag", ipa: "/ʈʰaʔ˥˧/" },
    { tibetan: "སྤྲིན་", wylie: "sprin", ipa: "/ʈĩ˥/" },
    { tibetan: "དྲིལ་", wylie: "dril", ipa: "/ʈʰiː˩˧/" },
    { tibetan: "སྲོག་", wylie: "srog", ipa: "/soʔ˥˧/" },

    // ----- Subscript la: kl/gl/bl/rl/sl → l (high); zl → d (low) -----
    { tibetan: "ཀླུ་", wylie: "klu", ipa: "/lu˥/" },
    { tibetan: "རླབས་", wylie: "rlabs", ipa: "/lap˥˧/" },

    // ----- Suffixes -g -ng -b -m -r: consonant stays, vowel unchanged -----
    { tibetan: "ཐག་", wylie: "thag", ipa: "/tʰaʔ˥˧/" },
    { tibetan: "ཐང་", wylie: "thang", ipa: "/tʰaŋ˥/" },
    { tibetan: "ཐབ་", wylie: "thab", ipa: "/tʰap˥˧/" },
    { tibetan: "གསེར་", wylie: "gser", ipa: "/ser˥/" },

    // ----- Suffixes -d -n -l -s: change the vowel (a→ɛ, o→ø, u→y) -----
    { tibetan: "འདུད་", wylie: "'dud", ipa: "/tyʔ˩˧˨/" },      // -d → glottal stop
    { tibetan: "མིན་", wylie: "min", ipa: "/mĩ˩˧/" },          // -n → nasal vowel
    { tibetan: "བོན་", wylie: "bon", ipa: "/pʰø̃˩˧/" },
    { tibetan: "ལྷུན་", wylie: "lhun", ipa: "/l̥ỹ˥/" },
    { tibetan: "བལ་", wylie: "bal", ipa: "/pʰɛː˩˧/" },         // -l → long vowel
    { tibetan: "ཞལ་", wylie: "zhal", ipa: "/ɕɛː˩˧/" },
    { tibetan: "ཕུལ་", wylie: "phul", ipa: "/pʰyː˥/" },
    { tibetan: "ནུས་", wylie: "nus", ipa: "/nyː˩˧/" },         // -s → long vowel
    { tibetan: "ཞུས་", wylie: "zhus", ipa: "/ɕyː˩˧/" },

    // ----- Second suffix -s: -gs -ngs -bs -ms sound like -g -ng -b -m -----
    { tibetan: "ཕྱོགས་", wylie: "phyogs", ipa: "/tɕʰoʔ˥˧/" },
    { tibetan: "གྲངས་", wylie: "grangs", ipa: "/ʈʰaŋ˩˧/" },
    { tibetan: "ཐབས་", wylie: "thabs", ipa: "/tʰap˥˧/" },
    { tibetan: "ཁྲིམས་", wylie: "khrims", ipa: "/ʈʰim˥/" },
    { tibetan: "ཁམས་", wylie: "khams", ipa: "/kʰam˥/" },

    // ----- Special cases -----
    { tibetan: "དབང་", wylie: "dbang", ipa: "/waŋ˩˧/" },       // db + vowel → w
    { tibetan: "དབྱར་", wylie: "dbyar", ipa: "/jar˩˧/" },      // dby → y
    { tibetan: "དབྱངས་", wylie: "dbyangs", ipa: "/jaŋ˩˧/" },
    { tibetan: "ལྷ་", wylie: "lha", ipa: "/l̥a˥/" },            // lh → voiceless l
    { tibetan: "མཁྱེན་", wylie: "mkhyen", ipa: "/cʰẽ˥/" },
    { tibetan: "བསྒོམས་", wylie: "bsgoms", ipa: "/kom˩˧/" }    // prefix + superscript + root + 2 suffixes
];
