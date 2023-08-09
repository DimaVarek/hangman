export default function HangmanImage (props) {
    let hangmanArray = [
        <line x1="80%" y1="98%" x2="80%" y2="2%" stroke="black" stroke-width="1.5%"/>,
        <line x1="80.5%" y1="2%" x2="20%" y2="2%" stroke="black" stroke-width="1.5%"/>,
        <line x1="20%" y1="1.5%" x2="20%" y2="15%" stroke="black" stroke-width="1.5%"/>,
        <circle cx="20%" cy="18%" r="5%" stroke="black" fill="#a19d98" stroke-width="1.5%"/>,
        <line x1="20%" y1="22.5%" x2="20%" y2="50%" stroke="black" stroke-width="1.5%"/>,
        <line x1="20%" y1="24%" x2="10%" y2="40%" stroke="black" stroke-width="1.5%"/>,
        <line x1="20%" y1="24%" x2="30%" y2="40%" stroke="black" stroke-width="1.5%"/>,
        <line x1="20%" y1="49%" x2="10%" y2="70%" stroke="black" stroke-width="1.5%"/>,
        <line x1="20%" y1="49%" x2="30%" y2="70%" stroke="black" stroke-width="1.5%"/>
    ]
    let showArray = hangmanArray.slice(0, hangmanArray.length - props.attempts)
    return (
        <div className="hangman-img">
            <svg height="100%">
                {showArray}
            </svg>
        </div>
    )
}