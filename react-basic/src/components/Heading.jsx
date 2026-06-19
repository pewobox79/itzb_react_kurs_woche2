// Komponente als Arrow Function

import { useContext } from "react"
import TextBlock from "./TextBlock"
import { ThemeContext } from "../store/context/themeContext"

const Heading = (props) => {
    console.log("heading component rendered")
    const {themeState} = useContext(ThemeContext)
    const { title, text, children } = props // => Destructuring object
    return <>
        <h1>{title} | {themeState}</h1>
        <TextBlock text={text} />
        {children}
    </>
}
export default Heading