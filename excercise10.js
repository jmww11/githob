//Exc 8

//no.1
function wordToNumber(coloumnWord) {
    const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let coloumnNumber = 0

    for (let i = 0; i < coloumnWord.length; i++) {
        let char = coloumnWord[i]
        let charValue = alphabet.indexOf(char) + 1;

        coloumnNumber = coloumnNumber * 26 + charValue;
    }
    return coloumnNumber;
}
console.log(wordToNumber("AB"))

//no.2
function singleArray(arr) {
    for (let i = 0; i < arr.length; i++) {
        let diffArr = i;
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] !== arr[i]) {
                diffArr = j;
            }
        }
        if (i !== diffArr) {
            let temp = arr[i];
            arr[i] = arr[diffArr];
            arr[diffArr] = temp;
        }
    }
    return arr;
}

console.log(singleArray([1, 2, 2, 3]));

//3
function anagram (word1, word2) {
    if (word1.length !== word2.length) {
        return false;
    }

    let count = {};

    for (let char of word1) {
        count[char] = (count[char] || 0) + 1;
    }

    for (let char of word2){
        if (!count[char]) {
            return false;
        }
        count[char]--;
    }

    for (let char in count) {
        if (count[char] != 0) {
            return false;
        }
    }
    return true;
}
console.log (anagram("ganen", "nss"))

// //4 
// function climbStaircase (n)