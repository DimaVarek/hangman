import Button from "./Button";

export default function EndPage (props) {
    let className ="end-page " + props.appState
    return (
        <div className={className}>
            <div className="end-page-container">
                <div>
                    <p>{props.appState === "gameWon" ? "Game Won!": "Game lose :("}</p>
                </div>
                <div>
                    <Button buttonClassName={"restart"} onClickEvent={props.startGame} text={"Restart"}/>
                </div>
            </div>
        </div>
    )
}