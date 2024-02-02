const firstLetters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'j', 'i', 'k']
var vowelCount = 0
function vowels() {
    for (let i = 0; i < firstLetters.length; i++) {
        if (firstLetters[i] === 'a') {
            vowelCount++;
        }
        if (firstLetters[i] === 'e') {
            vowelCount++;
        }
        if (firstLetters[i] === 'i') {
            vowelCount++;
        }
        if (firstLetters[i] === 'o') {
            vowelCount++;
        }
        if (firstLetters[i] === 'u') {
            vowelCount++;
        }
    }
}
vowels();
