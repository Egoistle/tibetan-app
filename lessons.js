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
<br><b>5. Vowel sign</b> on the root: <span lang="bo">ི ུ ེ ོ</span>, or none for "a"
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
            { tibetan: "གསུམ་", wylie: "gsum", ipa: "/sum˥/", english: "three · prefix <span lang=\"bo\">ག</span>, root <span lang=\"bo\">ས</span> with the vowel <span lang=\"bo\">ུ</span>, suffix <span lang=\"bo\">མ</span>" },
            { tibetan: "དགའ་", wylie: "dga'", ipa: "/ka˩˧/", english: "to like · prefix <span lang=\"bo\">ད</span>, root <span lang=\"bo\">ག</span>, suffix <span lang=\"bo\">འ</span>" },
            { tibetan: "སྐད་", wylie: "skad", ipa: "/kɛʔ˥˧/", english: "language · superscript <span lang=\"bo\">ས</span>, root <span lang=\"bo\">ཀ</span>, suffix <span lang=\"bo\">ད</span>" },
            { tibetan: "ཀྱང་", wylie: "kyang", ipa: "/caŋ˥/", english: "also · root <span lang=\"bo\">ཀ</span>, subscript <span lang=\"bo\">ཡ</span>, suffix <span lang=\"bo\">ང</span>" },
            { tibetan: "རྒྱལ་", wylie: "rgyal", ipa: "/cɛː˩˧/", english: "victory · superscript <span lang=\"bo\">ར</span>, root <span lang=\"bo\">ག</span>, subscript <span lang=\"bo\">ཡ</span>, suffix <span lang=\"bo\">ལ</span>" },
            { tibetan: "བསྒྲུབས་", wylie: "bsgrubs", ipa: "/ʈup˩˧˨/", english: "accomplished · all seven: prefix <span lang=\"bo\">བ</span>, superscript <span lang=\"bo\">ས</span>, root <span lang=\"bo\">ག</span>, subscript <span lang=\"bo\">ར</span>, vowel <span lang=\"bo\">ུ</span>, suffix <span lang=\"bo\">བ</span>, second suffix <span lang=\"bo\">ས</span>" }
        ]
    },
    {
        title: "To be: ཡིན་ and རེད་",
        summary: "Personal vs. objective copula",
        body: "Lhasa Tibetan has several verbs for 'to be'. <span lang=\"bo\">ཡིན་</span> is used when speaking about yourself (and asking someone about themselves). <span lang=\"bo\">རེད་</span> is used for statements about other people and things.",
        examples: [
            { tibetan: "ང་སློབ་ཕྲུག་ཡིན།", wylie: "nga slob phrug yin", english: "I am a student." },
            { tibetan: "ཁོང་དགེ་རྒན་རེད།", wylie: "khong dge rgan red", english: "He/she is a teacher." },
            { tibetan: "འདི་དེབ་རེད།", wylie: "'di deb red", english: "This is a book." }
        ]
    }
];
