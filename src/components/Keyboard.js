import KeyboradLetter from "./KeyboardLetter";

export default function Keyboard (props) {
    return (
        <div className="keyboard">
            {props.keyboard.map(key => <KeyboradLetter onClickEvent={props.onClickEvent} letter={key} key={key.key}/>)}
        </div>
    )
}
// remove onClockEvent in keystatus != notPressed