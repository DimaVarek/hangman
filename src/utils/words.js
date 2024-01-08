class Word {
    constructor (word, hint) {
        this.secretWord = word
        this.hint = hint
    }
}
const words = [
    new Word("cats", "Ameer loves"),
    new Word("dogs", "Ameer doesn`t love"),
    new Word("apple", "Newton's assistant")
]
export default function randomWord () {
    let randomIndex = Math.floor(Math.random() * words.length);
    let randomWord = words[randomIndex]
    return randomWord
}