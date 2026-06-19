import { memo } from "react"
import Navigation from "./Navigation/Navigation"

const Header = () => {
    console.log("header rendered")
    return <header>
        <h1> das ist der Header</h1>
        <Navigation/>
    </header>
}

export default memo(Header)