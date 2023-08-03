import './App.css';
import { useState } from 'react';
import StartPage from './components/StartPage';
import Game from './components/Game';
import EndPage from './components/EndPage';

function App() {
  let [appState, setAppState] = useState('startPage') //startPage
  const startGame = () => setAppState("inGame")
  const gameWon = () => setAppState("gameWon")
  const gameLose = () => setAppState("gameLose")
  const currentPage = () => {
    if (appState === "startPage") {
      return (<StartPage startGame={startGame}/>)
    } else if (appState === "inGame") {
      return (<Game gameWon={gameWon} gameLose={gameLose}/>)
    }
    else {
      console.log("endGame")
      return (<EndPage appState={appState} startGame={startGame}/>)
    }
  }
  return (
    currentPage()
  );
}

export default App;
