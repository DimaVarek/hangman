import Button from "./Button";
export default function StartPage(props) {
    return (
        <div className="start-page">
            <Button buttonClassName={"start-game"} onClickEvent={props.startGame} text={"Start game!"}/>
        </div>
    )
}