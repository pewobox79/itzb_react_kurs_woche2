// Komponente als Arrow Function

import TextBlock from "./TextBlock"

const Heading = (props) => {
    console.log("heading props", props)
    const { title, text, children } = props // => Destructuring object
    return <>
        <h1>{title}</h1>
        <TextBlock text={text}/>
        {children}
    </>
}
export default Heading