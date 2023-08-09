class Word {
    constructor (word, hint) {
        this.secretsWord = word
        this.hint = hint
    }
}
const words = [
    new Word("apple", "Ameer loves"),
    new Word("apple", "Ameer doesn`t love"),
    new Word("apple", "Newton's assistant")
]
export default function randomWord () {
    let randomIndex = Math.floor(Math.random() * words.length);
    let randomWord = words[randomIndex]
    return randomWord
}