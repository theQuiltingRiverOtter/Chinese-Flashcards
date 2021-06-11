chineseTerms = [['zhongwen', 'zhong1wen2', 'Chinese'],
['nihao', 'ni2hao3', 'hello'],
['long', 'long2', 'dragon'],
['shafa', 'sha1fa1', 'sofa'],];

let randomNumber = Math.floor(Math.random() * 4);

cardText = document.getElementById("card");
document.getElementById("chinese").addEventListener("click", function () { chineseTerm(randomNumber); });
document.getElementById("pinyin").addEventListener("click", function () { pinyinTerm(randomNumber); });
document.getElementById("english").addEventListener("click", function () { englishTerm(randomNumber); });




function chineseTerm(term) {
    cardText.innerHTML = chineseTerms[term][0];
}
function pinyinTerm(term) {
    cardText.innerHTML = chineseTerms[term][1];
}
function englishTerm(term) {
    cardText.innerHTML = chineseTerms[term][2];
}