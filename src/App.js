import './App.css';
import { useState } from 'react';
import StartPage from './components/StartPage';
import Game from './components/Game';
import EndPage from './components/EndPage';

function App() {
  let [appState, setAppState] = useState('startPage') //startPage
  const startGame = () => setAppState("inGame") // change to config
  const gameWon = () => setAppState("gameWon") // change to one function
  const gameLose = () => setAppState("gameLose")
  const getCurrentPage = () => {
    if (appState === "startPage") {
      return (<StartPage startGame={startGame}/>) // create a map
    } else if (appState === "inGame") {
      return (<Game gameWon={gameWon} gameLose={gameLose}/>)
    }
    else {
      console.log("endGame")
      return (<EndPage appState={appState} startGame={startGame}/>)
    }
  }
  return (
    getCurrentPage()
  );
}

export default App;
