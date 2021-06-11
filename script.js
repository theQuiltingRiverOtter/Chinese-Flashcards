chineseTerms = [
    ["挨", "ái", "Verb", "to endure, to suffer"],
    ["爱不释手", "ài bù shì shǒu", "Verb", "not wanting to give sth. out of one's hand"],
    ["爱戴", "ài dài", "Verb", "to love and respect"],
    ["暧昧", "ài mèi", "Adjective", "ambiguous, equivocal, dubious"],
    ["哎哟", "āi yō", "Interjunction", "ow, ouch, ah"],
    ["癌症", "ái zhèng", "Noun", "cancer"],
    ["案件", "àn jiàn", "Noun", "legal case, case"],
    ["安居乐业", "ān jū lè yè", "Verb", "to live in peace and work happily"],
    ["案例", "àn lì", "Noun", "case (law)"],
    ["按摩", "àn mó", "Noun/Verb", "massage, to massage"],
    ["安宁", "ān níng", "Noun/Adjective", "peace, tranquil"],
    ["暗示", "àn shì", "Noun/Verb", "hint, suggestion"],
    ["安详", "ān xiáng", "Adjective", "composed, serene"],
    ["安置", "ān zhì", "Verb", "to find a place for, to arrange for"],
    ["昂贵", "áng guì", "Adjective", "expensive, costly"],
    ["熬", "áo", "Verb", "to endure, to suffer"],
    ["奥秘", "ào mì", "Noun", "mystery, secret"],
    ["凹凸", "āo tū", "Adjective", "bumpy, uneven"]
];


const cardText = document.getElementById("card");
const newBtn = document.getElementById("new");
const chineseBtn = document.getElementById("chinese");
const pinyinBtn = document.getElementById("pinyin");
const englishBtn = document.getElementById("english");

let term = [];


function generateTerm() {
    let randomNumber = Math.floor(Math.random() * chineseTerms.length);
    term = chineseTerms[randomNumber];
}
generateTerm();

function showChinese() {
    cardText.innerHTML = term[0];
}
function showPinyin() {
    cardText.innerHTML = term[1];
}
function showEnglish() {
    cardText.innerHTML = term[3];
}

newBtn.addEventListener("click", generateTerm);
chineseBtn.addEventListener("click", showChinese);
pinyinBtn.addEventListener("click", showPinyin);
englishBtn.addEventListener("click", showEnglish);

