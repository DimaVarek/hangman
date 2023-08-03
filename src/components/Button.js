export default function Button (props) {
    let className = "page-button " + props.buttonClassName
    return (
        <button className={className} onClick={props.onClickEvent}>{props.text}</button>
    )
}