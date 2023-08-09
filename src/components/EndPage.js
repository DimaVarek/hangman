import CONFIG from "../utils/config";
import {Button as GameButton} from "./Button";

export default function EndPage (props) {
    let className ="end-page " + props.appState
    return (
        <div className={className}>
            <div className="end-page-container">
                <div>
                    <p>{props.appState === "gameWon" ? CONFIG.GAME_WON: "Game lose :("}</p>
                </div>
                <div>
                    <GameButton buttonClassName={"restart"} onClickEvent={props.startGame} text={"Restart"}/>
                </div>
            </div>
        </div>
    )
}