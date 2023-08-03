export default function KeyboradLetter(props) {
    let className = "key " + props.letter.keyStatus
    return (
        <div className={className}>
            <div onClick={() => props.onClickEvent(props.letter.key)}>{props.letter.key}</div>
        </div>
    )
}