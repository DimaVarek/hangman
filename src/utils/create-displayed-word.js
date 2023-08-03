export default function createDisplayedWord(secretWord, openedLetters) {
    let returnedWord = ""
    for (let letter of secretWord){
        returnedWord += openedLetters.findIndex(gg => gg === letter) != -1 ? letter: "_"
    }
    return returnedWord
}
