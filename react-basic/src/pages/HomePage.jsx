import EventComponent from "../components/EventComponent"
import { useState } from "react"
import LoginFeature from "../features/LoginFeature"

const HomePage = ({children}) => {
    console.log("Homepage rendered")
    const [changeColor, setChangeColor] = useState(false)
    return <>
        <h1 style={{color: changeColor ? "purple": "green"}}>Homepage</h1>
        <EventComponent
            changeColor={changeColor}
            setChangeColor={setChangeColor} />
        {children}
        <LoginFeature/>
    </>
}

export default HomePage