const alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

function decodeWord(str, offset = 10){
    let findCapitalLetters = str.split("");
    let capitalization = [];
    findCapitalLetters.forEach((letter, index) => {
        if(letter == letter.toUpperCase()){
            capitalization.push(index)
        }
    });
    console.log("Capital letters are: ", capitalization);
    let newStr = str.toLowerCase();
    let newStrArr = newStr.split("");
    let newWord = [];
    newStrArr.forEach(letter => {
        let foundLetter = alphabet.find(alphabetTetter => alphabetTetter == letter);
        if (foundLetter !== undefined){
            let foundIndex = alphabet.indexOf(foundLetter);
            let newLetterIndex = foundIndex + offset;
            if(newLetterIndex >= alphabet.length) {
                newLetterIndex = (foundIndex + offset) % alphabet.length;
            }
            newWord.push(alphabet[newLetterIndex]);
        } else {
            newWord.push(letter);
        }
    });
    capitalization.forEach(index =>{
        newWord[index] = newWord[index].toUpperCase();
    })
    str = newWord.join("");
    console.log(str);
}

decodeWord("Test", 1);
