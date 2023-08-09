import {Button as GameButton} from "./Button";
export default function StartPage({startGame}) {
    return (
        <div className="start-page">
            <GameButton buttonClassName={"start-game"} onClickEvent={startGame} text={"Start game!"}/> 
        </div>
    )
}
//rename 