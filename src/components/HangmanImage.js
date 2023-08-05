export default function HangmanImage (props) {
    let hangmanArray = [
        <line x1="60" y1="48" x2="60" y2="2" stroke="black" />,
        <line x1="60.5" y1="2" x2="30" y2="2" stroke="black" />,
        <line x1="30" y1="1.5" x2="30" y2="10" stroke="black" />,
        <circle cx="30" cy="13" r="3" stroke="black" fill="#a19d98" />,
        <line x1="30" y1="16" x2="30" y2="30" stroke="black" />,
        <line x1="30" y1="16" x2="24" y2="22" stroke="black" />,
        <line x1="30" y1="16" x2="36" y2="22" stroke="black" />,
        <line x1="30" y1="29.5" x2="24" y2="39" stroke="black" />,
        <line x1="30" y1="29.5" x2="36" y2="39" stroke="black" />
    ]
    let showArray = hangmanArray.slice(0, hangmanArray.length - props.attempts)
    return (
        <div className="hangman-img">
            <svg width="90%"  viewBox="0 0 100 50" xmlns="http://www.w3.org/2000/svg">
                {showArray}
            </svg>
        </div>
    )
}