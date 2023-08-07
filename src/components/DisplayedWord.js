import DisplayedLetter from "./DisplayedLetter"

export default function DisplayedWord (props) {
    let letterArray = []
    for (let letter of props.displayedWord) {
        letterArray.push(<DisplayedLetter letter={letter}/>)
    }
    return (
        <div className="displayed-word-container">
            <div>
                <div className="displayed-word">
                    {letterArray}
                </div>
                <p className="hint">Hint:&nbsp;<span>{props.hint}</span></p>
            </div>
        </div>

    )
}