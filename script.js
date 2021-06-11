chineseTerms = [['zhongwen', 'zhong1wen2', 'Chinese'],
['nihao', 'ni2hao3', 'hello'],
['long', 'long2', 'dragon'],
['shafa', 'sha1fa1', 'sofa'],];


const cardText = document.getElementById("card");
const newBtn = document.getElementById("new");
const chineseBtn = document.getElementById("chinese");
const pinyinBtn = document.getElementById("pinyin");
const englishBtn = document.getElementById("english");

let term = [];


function generateTerm() {
    let randomNumber = Math.floor(Math.random() * chineseTerms.length);
    term = chineseTerms[randomNumber];
    console.log(term);
}
generateTerm();

function showChinese() {
    cardText.innerHTML = term[0];
}
function showPinyin() {
    cardText.innerHTML = term[1];
}
function showEnglish() {
    cardText.innerHTML = term[2];
}

newBtn.addEventListener("click", generateTerm);
chineseBtn.addEventListener("click", showChinese);
pinyinBtn.addEventListener("click", showPinyin);
englishBtn.addEventListener("click", showEnglish);

