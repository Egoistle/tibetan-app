// Lessons for the Grammar tab.
// body can contain HTML. It is placed inside a <p>, so use <br>, <b> and <span>,
// not block tags like <p>, <div> or <ul>.
// Backticks (`...`) let a body run over several lines.

const lessons = [
    {
        title: "Reading 1: Parts of a syllable",
        summary: "The seven positions, and how to find the root letter",
        body: `Tibetan is written in syllables, separated by the tsheg <span lang="bo">་</span>. Every syllable is built around one <b>root letter</b> (<span lang="bo">མིང་གཞི་</span>). The root carries the vowel and decides the basic sound and the tone. The other letters are optional and gather around it in fixed places:
<br><br>
<b>1. Prefix</b> (<span lang="bo">སྔོན་འཇུག་</span>), written before the root: <span lang="bo">ག ད བ མ འ</span>
<br><b>2. Superscript</b> (<span lang="bo">མགོ་ཅན་</span>), written above the root: <span lang="bo">ར ལ ས</span>
<br><b>3. Root letter</b>: any consonant
<br><b>4. Subscript</b> (<span lang="bo">འདོགས་ཅན་</span>), written below the root: <span lang="bo">ཡ ར ལ ཝ</span>
<br><b>5. Vowel sign</b> on the root: <span lang="bo">ཨི ཨུ ཨེ ཨོ</span> (shown here on <span lang="bo">ཨ</span>), or none for "a"
<br><b>6. Suffix</b> (<span lang="bo">རྗེས་འཇུག་</span>), written after the root: <span lang="bo">ག ང ད ན བ མ འ ར ལ ས</span>
<br><b>7. Second suffix</b> (<span lang="bo">ཡང་འཇུག་</span>), after the suffix: <span lang="bo">ས</span> (and, in old spellings, <span lang="bo">ད</span>)
<br><br>
<b>Finding the root</b>, step by step:
<br>1. If there is a vowel sign, the root is the letter (or stack) it sits on.
<br>2. If letters are stacked, the root is in the stack. When the top letter is <span lang="bo">ར ལ ས</span> and another letter hangs below it, the top one is a superscript and the lower one is the root. But if the lower letter is <span lang="bo">ཡ ར ལ ཝ</span>, that lower letter is a subscript and the top one is the root: <span lang="bo">སྐ</span> has the root <span lang="bo">ཀ</span>, while <span lang="bo">སྲ</span> has the root <span lang="bo">ས</span>.
<br>3. With no vowel sign and no stack: in a two-letter syllable the first letter is the root (<span lang="bo">ལམ་</span>). In a three-letter syllable that starts with a possible prefix, the middle letter is usually the root (<span lang="bo">དགའ་ གནས་</span>). There are exceptions, so check a dictionary when unsure.
<br><br>
Once you've found the root, everything else is a modifier. The next lessons cover what each position does to the sound: most of them are silent, but they change the tone, the aspiration or the vowel.`,
        examples: [
            { tibetan: "ལམ་", wylie: "lam", ipa: "/lam˩˧/", english: "road · root <span lang=\"bo\">ལ</span>, suffix <span lang=\"bo\">མ</span>" },
            { tibetan: "གསུམ་", wylie: "gsum", ipa: "/sum˥/", english: "three · prefix <span lang=\"bo\">ག</span>, root <span lang=\"bo\">ས</span> with the vowel u, suffix <span lang=\"bo\">མ</span>" },
            { tibetan: "དགའ་", wylie: "dga'", ipa: "/ka˩˧/", english: "to like · prefix <span lang=\"bo\">ད</span>, root <span lang=\"bo\">ག</span>, suffix <span lang=\"bo\">འ</span>" },
            { tibetan: "སྐད་", wylie: "skad", ipa: "/kɛʔ˥˧/", english: "language · superscript <span lang=\"bo\">ས</span>, root <span lang=\"bo\">ཀ</span>, suffix <span lang=\"bo\">ད</span>" },
            { tibetan: "ཀྱང་", wylie: "kyang", ipa: "/caŋ˥/", english: "also · root <span lang=\"bo\">ཀ</span>, subscript <span lang=\"bo\">ཡ</span>, suffix <span lang=\"bo\">ང</span>" },
            { tibetan: "རྒྱལ་", wylie: "rgyal", ipa: "/cɛː˩˧/", english: "victory · superscript <span lang=\"bo\">ར</span>, root <span lang=\"bo\">ག</span>, subscript <span lang=\"bo\">ཡ</span>, suffix <span lang=\"bo\">ལ</span>" },
            { tibetan: "བསྒྲུབས་", wylie: "bsgrubs", ipa: "/ʈup˩˧˨/", english: "accomplished · all seven: prefix <span lang=\"bo\">བ</span>, superscript <span lang=\"bo\">ས</span>, root <span lang=\"bo\">ག</span>, subscript <span lang=\"bo\">ར</span>, vowel u, suffix <span lang=\"bo\">བ</span>, second suffix <span lang=\"bo\">ས</span>" }
        ]
    },
    {
        title: "Reading 2: Subscripts",
        summary: "ya-tak, ra-tak, la-tak and wa-zur: what the letters below the root do",
        body: `A subscript (<span lang="bo">འདོགས་ཅན་</span>) hangs below the root letter. Unlike prefixes and superscripts, subscripts really change the sound: the root and the subscript blend into one new consonant. There are four:
<br><br>
<b>Ya-tak</b> (<span lang="bo">ཡ་བཏགས་</span>), the hook <span lang="bo">ྱ</span>, makes the sound palatal (said with the tongue raised towards the roof of the mouth):
<br><span lang="bo">ཀྱ ཁྱ གྱ</span> → [c] [cʰ] and a low-tone [c] or [cʰ]: the sound of <span lang="bo">ཀྱང་</span> /caŋ/
<br><span lang="bo">པྱ ཕྱ བྱ</span> → [tɕ] [tɕʰ] and a low-tone [tɕ] or [tɕʰ]: they sound like <span lang="bo">ཅ ཆ ཇ</span>
<br><span lang="bo">མྱ</span> → [ɲ], the same sound as <span lang="bo">ཉ</span>
<br><br>
<b>Ra-tak</b> (<span lang="bo">ར་བཏགས་</span>), the small <span lang="bo">ྲ</span>, makes the sound retroflex (tongue curled back):
<br><span lang="bo">ཀྲ ཏྲ པྲ</span> → [ʈ] &nbsp;·&nbsp; <span lang="bo">ཁྲ ཐྲ ཕྲ</span> → [ʈʰ] &nbsp;·&nbsp; <span lang="bo">གྲ དྲ བྲ</span> → low-tone [ʈʰ] (or [ʈ] with a prefix or superscript)
<br><span lang="bo">སྲ</span> is the exception: the ra-tak is silent and it's just [s].
<br><br>
<b>La-tak</b> (<span lang="bo">ལ་བཏགས་</span>), a <span lang="bo">ལ</span> written below, takes over completely: the root goes silent and you say [l] in the <b>high</b> tone, even when the root is a low letter like <span lang="bo">ག</span> or <span lang="bo">བ</span>: <span lang="bo">ཀླ གླ བླ རླ སླ</span> → high [l].
<br>The one exception is <span lang="bo">ཟླ</span>, which is read [t] or [d] in the <b>low</b> tone, as in <span lang="bo">ཟླ་བ་</span> "moon".
<br><br>
<b>Wa-zur</b> (<span lang="bo">ཝ་ཟུར་</span>), the tiny wedge <span lang="bo">ྭ</span>, is silent in Lhasa Tibetan. It only tells words apart in writing: <span lang="bo">ཚྭ་</span> "salt" and <span lang="bo">ཚ་</span> "hot" sound the same.
<br><br>
<b>Tone:</b> apart from la-tak, the tone stays the tone of the root letter. A low root like <span lang="bo">ག</span> stays low in <span lang="bo">གྲ</span>; a high root like <span lang="bo">ཁ</span> stays high in <span lang="bo">ཁྲ</span>. Whether a low-tone sound is aspirated depends on prefixes and superscripts, which the next lessons cover.`,
        examples: [
            { tibetan: "ཀྱང་", wylie: "kyang", ipa: "/caŋ˥/", english: "also · ya-tak: k → c" },
            { tibetan: "ཁྱི་", wylie: "khyi", ipa: "/cʰi˥/", english: "dog · ya-tak: kh → cʰ" },
            { tibetan: "བྱ་", wylie: "bya", ipa: "/tɕʰa˩˧/", english: "bird · ya-tak: b → low tɕʰ, like <span lang=\"bo\">ཇ</span>" },
            { tibetan: "སྨྱུ་གུ་", wylie: "smyu gu", ipa: "/ɲu˥.ku˥/", english: "pen · ya-tak: m → ɲ, high because of the superscript <span lang=\"bo\">ས</span>" },
            { tibetan: "ཁྲག་", wylie: "khrag", ipa: "/ʈʰaʔ˥˧/", english: "blood · ra-tak: kh → ʈʰ" },
            { tibetan: "དྲུག་", wylie: "drug", ipa: "/ʈʰuʔ˩˧˨/", english: "six · ra-tak, no prefix: low and aspirated" },
            { tibetan: "འབྲས་", wylie: "'bras", ipa: "/ʈɛː˩˧/", english: "rice · ra-tak with the prefix <span lang=\"bo\">འ</span>: low and unaspirated" },
            { tibetan: "སྲོག་", wylie: "srog", ipa: "/soʔ˥˧/", english: "life · sr is just s" },
            { tibetan: "བླ་མ་", wylie: "bla ma", ipa: "/la˥.ma˥/", english: "lama · la-tak: high l, the <span lang=\"bo\">བ</span> is silent" },
            { tibetan: "ཀླུ་", wylie: "klu", ipa: "/lu˥/", english: "nāga · la-tak: high l" },
            { tibetan: "ཟླ་བ་", wylie: "zla ba", ipa: "/ta˩˧.wa˥/", english: "moon · the exception: zl → low t/d" },
            { tibetan: "ཚྭ་", wylie: "tshwa", ipa: "/tsʰa˥/", english: "salt · wa-zur is silent" }
        ]
    },
    {
        title: "Reading 3: Superscripts",
        summary: "ra-go, la-go and sa-go: silent letters that change the root",
        body: `A superscript (<span lang="bo">མགོ་ཅན་</span>, "head letter") sits on top of the root. There are three: <b>ra-go</b> <span lang="bo">ར་མགོ་</span>, <b>la-go</b> <span lang="bo">ལ་མགོ་</span> and <b>sa-go</b> <span lang="bo">ས་མགོ་</span>. When <span lang="bo">ར</span> sits on top, it's written as a small hook.
<br><br>
Superscripts are <b>silent</b>. You never pronounce the <span lang="bo">ར ལ ས</span> on top, but they still change the root below. What they change depends on which group the root belongs to:
<br><br>
<b>1. Voiceless roots</b> <span lang="bo">ཀ ཅ ཏ པ ཙ</span>: nothing changes. They stay high and unaspirated: <span lang="bo">རྐ ལྟ སྤ རྩ</span> read like <span lang="bo">ཀ ཏ པ ཙ</span>.
<br><br>
<b>2. Voiced roots</b> <span lang="bo">ག ཇ ད བ ཛ</span>: they <b>lose their aspiration</b> but <b>stay low</b>. On its own, <span lang="bo">ད</span> is a low, breathy [tʰ]; with a head letter, <span lang="bo">རྡ</span> is a low, plain [t] (often sounding like [d]). The same goes for <span lang="bo">རྒ ལྗ སྦ རྫ</span>.
<br><br>
<b>3. Nasal roots</b> <span lang="bo">ང ཉ ན མ</span>: they <b>rise to the high tone</b>. <span lang="bo">ང</span> is low, <span lang="bo">ལྔ</span> is high. This is the only group where the tone itself changes.
<br><br>
<b>Special case:</b> <span lang="bo">ལྷ</span> is a voiceless [l̥], as in Welsh "ll": the la-go doesn't disappear here, it turns into breath.
<br><br>
<b>Which combinations exist:</b>
<br>ra-go (12): <span lang="bo">རྐ རྒ རྔ རྗ རྙ རྟ རྡ རྣ རྦ རྨ རྩ རྫ</span>
<br>la-go (10): <span lang="bo">ལྐ ལྒ ལྔ ལྕ ལྗ ལྟ ལྡ ལྤ ལྦ ལྷ</span>
<br>sa-go (11): <span lang="bo">སྐ སྒ སྔ སྙ སྟ སྡ སྣ སྤ སྦ སྨ སྩ</span>
<br><br>
The same three groups come back in the next lesson: prefixes work almost exactly the same way. Learn the groups once, and you've learned both.`,
        examples: [
            { tibetan: "རྟ་", wylie: "rta", ipa: "/ta˥/", english: "horse · group 1: <span lang=\"bo\">ཏ</span> stays high and plain" },
            { tibetan: "སྐད་", wylie: "skad", ipa: "/kɛʔ˥˧/", english: "language · group 1: <span lang=\"bo\">ཀ</span> unchanged" },
            { tibetan: "རྩམ་པ་", wylie: "rtsam pa", ipa: "/tsam˥.pa˥/", english: "tsampa · group 1: <span lang=\"bo\">ཙ</span> unchanged" },
            { tibetan: "དོན་", wylie: "don", ipa: "/tʰø̃˩˧/", english: "meaning · compare: <span lang=\"bo\">ད</span> with no head letter is low and aspirated" },
            { tibetan: "རྡོ་", wylie: "rdo", ipa: "/to˩˧/", english: "stone · group 2: with ra-go, <span lang=\"bo\">ད</span> is low and unaspirated" },
            { tibetan: "སྒོ་", wylie: "sgo", ipa: "/ko˩˧/", english: "door · group 2: <span lang=\"bo\">ག</span> stays low, loses aspiration" },
            { tibetan: "ལྗང་ཁུ་", wylie: "ljang khu", ipa: "/tɕaŋ˩˧.kʰu˥/", english: "green · group 2: <span lang=\"bo\">ཇ</span> stays low, loses aspiration" },
            { tibetan: "ང་", wylie: "nga", ipa: "/ŋa˩˧/", english: "I · compare: <span lang=\"bo\">ང</span> on its own is low" },
            { tibetan: "ལྔ་", wylie: "lnga", ipa: "/ŋa˥/", english: "five · group 3: with la-go, <span lang=\"bo\">ང</span> rises to high" },
            { tibetan: "ནམ་", wylie: "nam", ipa: "/nam˩˧/", english: "when (literary) · compare: <span lang=\"bo\">ན</span> on its own is low" },
            { tibetan: "རྣམ་", wylie: "rnam", ipa: "/nam˥/", english: "kind, aspect · group 3: with ra-go, <span lang=\"bo\">ན</span> rises to high" },
            { tibetan: "སྔོན་པོ་", wylie: "sngon po", ipa: "/ŋø̃˥.po˥/", english: "blue · group 3: with sa-go, <span lang=\"bo\">ང</span> is high" },
            { tibetan: "ལྷ་", wylie: "lha", ipa: "/l̥a˥/", english: "deity · special: voiceless l" }
        ]
    },
    {
        title: "Reading 4: Prefixes",
        summary: "The five silent letters before the root, and the special cases འ and དབ",
        body: `A prefix (<span lang="bo">སྔོན་འཇུག་</span>) is written before the root, on the same line. Only five letters can be prefixes: <span lang="bo">ག ད བ མ འ</span>.
<br><br>
Like superscripts, prefixes are <b>silent</b>, and they change the root in exactly the same three ways you learned in lesson 3:
<br><br>
<b>1. Voiceless roots</b> (<span lang="bo">ཀ ཅ ཏ པ ཙ</span>, and the aspirated <span lang="bo">ཁ ཆ ཐ ཕ ཚ</span>): nothing changes. <span lang="bo">གཏམ་</span> reads just like <span lang="bo">ཏམ</span> would.
<br><br>
<b>2. Voiced roots</b> (<span lang="bo">ག ཇ ད བ ཛ</span>): they <b>lose their aspiration</b> and <b>stay low</b>. <span lang="bo">དགའ་</span> is a low, plain [ka], not a breathy [kʰa].
<br><br>
<b>3. Nasal roots and ཡ</b> (<span lang="bo">ང ཉ ན མ ཡ</span>): they <b>rise to the high tone</b>. <span lang="bo">ཡག་</span> would be low; <span lang="bo">གཡག་</span> "yak" is high. (In Wylie this is written g.yag, with a dot, to show the g is a prefix and not part of "gy".)
<br><br>
The fricatives <span lang="bo">ཞ ཟ</span> stay low with or without a prefix: <span lang="bo">བཞི་</span> "four" is a low [ɕi].
<br><br>
<b>Telling a prefix from a root</b>, as in lesson 1: the root carries the vowel sign or the stack. With neither, a three-letter syllable starting with <span lang="bo">ག ད བ མ འ</span> usually has its root in the middle.
<br><br>
<b>Special case 1: <span lang="bo">དབ</span>.</b> When <span lang="bo">ད</span> comes before a plain <span lang="bo">བ</span>, the pair is read as [w] in the low tone: <span lang="bo">དབང་</span> is [waŋ]. Before the vowels u and o the [w] disappears into the vowel: <span lang="bo">དབུས་</span> is just [yː]. And <span lang="bo">དབྱ</span> is read [j]: <span lang="bo">དབྱར་</span> "summer" is [jar].
<br><br>
<b>Special case 2: <span lang="bo">འ</span> and <span lang="bo">མ</span> in compounds.</b> On their own they're silent, but in the middle of a word some speakers let them surface as a nasal at the end of the previous syllable. The classic example is <span lang="bo">དགེ་འདུན་</span> "monastic community", often heard as "gendün", as in the name Gendün Chöphel. You don't need to produce this yourself, but it explains spellings and names that would otherwise look odd.
<br><br>
<b>Why prefixes exist:</b> they're fossils of older pronunciation, and in verbs they still mark tense. For example, <span lang="bo">བ</span> often marks the past or future form, as in <span lang="bo">བསྒྲུབས་</span> "accomplished".`,
        examples: [
            { tibetan: "གཏམ་", wylie: "gtam", ipa: "/tam˥/", english: "talk, speech · group 1: <span lang=\"bo\">ཏ</span> unchanged" },
            { tibetan: "བཀའ་", wylie: "bka'", ipa: "/ka˥/", english: "word, command · group 1: <span lang=\"bo\">ཀ</span> unchanged" },
            { tibetan: "མཐོ་", wylie: "mtho", ipa: "/tʰo˥/", english: "high · group 1: aspirated <span lang=\"bo\">ཐ</span> unchanged" },
            { tibetan: "དགའ་", wylie: "dga'", ipa: "/ka˩˧/", english: "to like · group 2: <span lang=\"bo\">ག</span> low and unaspirated" },
            { tibetan: "མགོ་", wylie: "mgo", ipa: "/ko˩˧/", english: "head · group 2: <span lang=\"bo\">ག</span> low and unaspirated" },
            { tibetan: "བདག་", wylie: "bdag", ipa: "/taʔ˩˧˨/", english: "self · group 2: <span lang=\"bo\">ད</span> low and unaspirated" },
            { tibetan: "འབུ་", wylie: "'bu", ipa: "/pu˩˧/", english: "insect · group 2: <span lang=\"bo\">བ</span> low and unaspirated" },
            { tibetan: "དམིགས་", wylie: "dmigs", ipa: "/miʔ˥˧/", english: "focus, aim · group 3: <span lang=\"bo\">མ</span> rises to high" },
            { tibetan: "གནས་", wylie: "gnas", ipa: "/nɛː˥˧/", english: "place · group 3: <span lang=\"bo\">ན</span> rises to high" },
            { tibetan: "གཡག་", wylie: "g.yag", ipa: "/jaʔ˥˧/", english: "yak · group 3: <span lang=\"bo\">ཡ</span> rises to high" },
            { tibetan: "བཞི་", wylie: "bzhi", ipa: "/ɕi˩˧/", english: "four · <span lang=\"bo\">ཞ</span> stays low" },
            { tibetan: "དབང་", wylie: "dbang", ipa: "/waŋ˩˧/", english: "power · special: <span lang=\"bo\">དབ</span> → w" },
            { tibetan: "དབུས་", wylie: "dbus", ipa: "/yː˩˧/", english: "centre, Ü · special: the w disappears before u" },
            { tibetan: "དབྱར་", wylie: "dbyar", ipa: "/jar˩˧/", english: "summer · special: <span lang=\"bo\">དབྱ</span> → y" }
        ]
    },
    {
        title: "Reading 5: Suffixes and second suffixes",
        summary: "The letters after the root: which keep their sound, which change the vowel, and nasal vowels",
        body: `A suffix (<span lang="bo">རྗེས་འཇུག་</span>) comes after the root. Ten letters can be suffixes: <span lang="bo">ག ང ད ན བ མ འ ར ལ ས</span>. Unlike prefixes and superscripts, suffixes are part of what you hear. They split into two groups.
<br><br>
<b>Group A: they keep their own sound, and the vowel stays the same</b>
<br><span lang="bo">ག</span> → a glottal stop [ʔ]: the breath simply stops (some speakers let a light [k] through)
<br><span lang="bo">ང</span> → [ŋ], as in English "sing"
<br><span lang="bo">བ</span> → [p], said without releasing the lips
<br><span lang="bo">མ</span> → [m]
<br><span lang="bo">ར</span> → [r], often weak: many speakers just lengthen the vowel
<br><span lang="bo">འ</span> → no sound: it only marks where the syllable ends
<br><br>
<b>Group B: they change the vowel</b>
<br><span lang="bo">ད</span> → a glottal stop [ʔ], plus the vowel change
<br><span lang="bo">ན</span> → a nasal vowel (see below), plus the vowel change
<br><span lang="bo">ལ</span> → a long vowel, plus the vowel change
<br><span lang="bo">ས</span> → a long vowel, plus the vowel change
<br>The vowel change moves the vowel to the front of the mouth: <b>a → ɛ</b>, <b>o → ø</b>, <b>u → y</b> (like Polish "e", German "ö" and "ü"). <b>i</b> and <b>e</b> are already at the front, so they stay the same.
<br><br>
<b>Second suffix</b> (<span lang="bo">ཡང་འཇུག་</span>): a <span lang="bo">ས</span> after the suffixes <span lang="bo">ག ང བ མ</span>. It is completely <b>silent</b> and does <b>not</b> change the vowel: <span lang="bo">ཐབས་</span> sounds exactly like <span lang="bo">ཐབ་</span>. In old spellings you may also see a silent <span lang="bo">ད</span> after <span lang="bo">ན ར ལ</span>.
<br>So <span lang="bo">ས</span> has two jobs: straight after the root it is a suffix and changes the vowel (<span lang="bo">ལས་</span> [lɛː]); after <span lang="bo">ག ང བ མ</span> it is a second suffix and does nothing (<span lang="bo">ལགས་</span> [laʔ]).
<br><br>
<b>Tone contours:</b> syllables that end in a stop (<span lang="bo">ག ད བ</span>) are short and their pitch falls. That's why our IPA marks them ˥˧ in the high tone and ˩˧˨ in the low tone.
<br><br>
<b>Nasal vowels</b> come from the suffix <span lang="bo">ན</span>, and only from it: <span lang="bo">ང</span> stays a full [ŋ]. The nasality in Lhasa Tibetan is light, spread thinly over the vowel itself. Speakers vary: some keep a clear nasal vowel, some add a short [n], and in fast speech the nasality can almost disappear. Before another syllable, the [n] often comes back, especially before [t] or [d]. The vowel change is the more reliable clue: even when the nasality fades, <span lang="bo">དོན་</span> keeps its [ø].
<br><i>Note for Polish speakers:</i> Polish ę and ą start as a plain vowel and end in a nasal glide ([ɛw̃], [ɔw̃]). Carried over to Tibetan, that sounds too long and too nasal. Keep the Tibetan nasal vowel short and light; when in doubt, a plain vowel with a soft [n] sounds more natural than a strong nasal.`,
        examples: [
            { tibetan: "ཐག་", wylie: "thag", ipa: "/tʰaʔ˥˧/", english: "rope · <span lang=\"bo\">ག</span> → glottal stop, vowel unchanged" },
            { tibetan: "ཐང་", wylie: "thang", ipa: "/tʰaŋ˥/", english: "plain, steppe · <span lang=\"bo\">ང</span> → ŋ" },
            { tibetan: "ཐབ་", wylie: "thab", ipa: "/tʰap˥˧/", english: "stove · <span lang=\"bo\">བ</span> → p" },
            { tibetan: "ལམ་", wylie: "lam", ipa: "/lam˩˧/", english: "road · <span lang=\"bo\">མ</span> → m" },
            { tibetan: "གསེར་", wylie: "gser", ipa: "/ser˥/", english: "gold · <span lang=\"bo\">ར</span> → r" },
            { tibetan: "སྐད་", wylie: "skad", ipa: "/kɛʔ˥˧/", english: "language · <span lang=\"bo\">ད</span>: a → ɛ plus glottal stop" },
            { tibetan: "བོད་", wylie: "bod", ipa: "/pʰøʔ˩˧˨/", english: "Tibet · <span lang=\"bo\">ད</span>: o → ø" },
            { tibetan: "འདུད་", wylie: "'dud", ipa: "/tyʔ˩˧˨/", english: "to bow · <span lang=\"bo\">ད</span>: u → y" },
            { tibetan: "དོན་", wylie: "don", ipa: "/tʰø̃˩˧/", english: "meaning · <span lang=\"bo\">ན</span>: nasal vowel, o → ø" },
            { tibetan: "མིན་", wylie: "min", ipa: "/mĩ˩˧/", english: "is not · <span lang=\"bo\">ན</span>: i only becomes nasal" },
            { tibetan: "བལ་", wylie: "bal", ipa: "/pʰɛː˩˧/", english: "wool · <span lang=\"bo\">ལ</span>: long vowel, a → ɛ" },
            { tibetan: "ཡུལ་", wylie: "yul", ipa: "/jyː˩˧/", english: "country · <span lang=\"bo\">ལ</span>: long vowel, u → y" },
            { tibetan: "ནུས་", wylie: "nus", ipa: "/nyː˩˧/", english: "ability · <span lang=\"bo\">ས</span>: long vowel, u → y" },
            { tibetan: "ལས་", wylie: "las", ipa: "/lɛː˩˧/", english: "work · <span lang=\"bo\">ས</span> as a suffix: a → ɛ" },
            { tibetan: "ལགས་", wylie: "lags", ipa: "/laʔ˩˧˨/", english: "yes (polite) · <span lang=\"bo\">ས</span> as a second suffix: silent, vowel unchanged" },
            { tibetan: "ཐབས་", wylie: "thabs", ipa: "/tʰap˥˧/", english: "method · second suffix: sounds just like <span lang=\"bo\">ཐབ་</span> above" },
            { tibetan: "གྲངས་", wylie: "grangs", ipa: "/ʈʰaŋ˩˧/", english: "number · second suffix after <span lang=\"bo\">ང</span>" },
            { tibetan: "ཁྲིམས་", wylie: "khrims", ipa: "/ʈʰim˥/", english: "law · second suffix after <span lang=\"bo\">མ</span>" }
        ]
    },
    {
        title: "To be: ཡིན་ and རེད་",
        summary: "Personal vs. objective copula",
        body: "Lhasa Tibetan has several verbs for 'to be'. <span lang=\"bo\">ཡིན་</span> is used when speaking about yourself (and asking someone about themselves). <span lang=\"bo\">རེད་</span> is used for statements about other people and things.",
        examples: [
            { tibetan: "ང་སློབ་ཕྲུག་ཡིན།", wylie: "nga slob phrug yin", ipa: "/ŋa˩˧ lop˥˧.ʈʰuʔ˥ jĩ˩˧/", english: "I am a student." },
            { tibetan: "ཁོང་དགེ་རྒན་རེད།", wylie: "khong dge rgan red", ipa: "/kʰoŋ˥ ke˩˧.kɛ̃˥ ɹeʔ˩˧˨/", english: "He/she is a teacher." },
            { tibetan: "འདི་དེབ་རེད།", wylie: "'di deb red", ipa: "/ti˩˧ tʰep˩˧˨ ɹeʔ˩˧˨/", english: "This is a book." }
        ]
    }
];
