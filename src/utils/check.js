export function checkWin (displayedWord) {
    return displayedWord.search("_") === -1
}
export function checkLose (attempts) {
    return attempts < 1
}