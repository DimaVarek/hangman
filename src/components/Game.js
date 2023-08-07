import { useState } from "react"
import keyboardCreator from "../utils/keyboard-creator"
import Keyboard from "./Keyboard"
import createDisplayedWord from "../utils/create-displayed-word"
import { checkLose, checkWin } from "../utils/check"
import DisplayedWord from "./DisplayedWord"
import HangmanImage from "./HangmanImage"
import randomWord from "../utils/words"


export default function Game (props) {
    let wordObj = randomWord()
    let secretWord = wordObj.word
    let hint = wordObj.hint

    let displayedWord = createDisplayedWord(secretWord, [])
    let keybord = keyboardCreator()
    
    let [gameState, setGameState] = useState(
        {
            secretWord: secretWord,
            hint: hint,
            displayedWord: displayedWord,
            openedLetters: [],
            keybord: keybord,
            attempts: 9
        }
    )
    const clickLetter = (pickedLetter) => {
        if (gameState.keybord[gameState.keybord.findIndex(lett => lett.key === pickedLetter)].keyStatus != "notPressed"){
            return
        }
        let newGameState = {...gameState}
        if (newGameState.secretWord.search(pickedLetter) !== -1) {
            newGameState.openedLetters.push(pickedLetter)
            newGameState.keybord[newGameState.keybord.findIndex((key) => key.key === pickedLetter)]
                .keyStatus = "rightLetter"
            newGameState.displayedWord = createDisplayedWord(newGameState.secretWord, newGameState.openedLetters)
        }
        else {
            newGameState.keybord[newGameState.keybord.findIndex((key) => key.key === pickedLetter)]
                .keyStatus = "notRightLetter"
            newGameState.attempts -= 1
        }
        if (checkWin(newGameState.displayedWord)) {
            setTimeout(props.gameWon, 500)
        }
        if (checkLose(newGameState.attempts)) {
            setTimeout(props.gameLose, 500)
        }
        setGameState(newGameState)
    }
    
    return (
        <div className="game-page">
            <div className="game-name">Hangman</div>
            <DisplayedWord displayedWord={gameState.displayedWord} hint={gameState.hint} />
            <Keyboard keyboard={gameState.keybord} onClickEvent={clickLetter}/>
            <HangmanImage attempts={gameState.attempts} />
        </div>
    )
}