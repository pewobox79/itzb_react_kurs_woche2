const TextBlock = (props) => {
    console.log("props in TextBlock", props)
    return <p>{props.text}</p>
}

export default TextBlock