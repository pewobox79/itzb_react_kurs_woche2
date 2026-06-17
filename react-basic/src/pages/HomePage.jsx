import EventComponent from "../components/EventComponent"
import { useState } from "react"
import LoginFeature from "../features/LoginFeature"

const HomePage = ({ children }) => {
    
    const [changeColor, setChangeColor] = useState(false)
    return <>
        <h1 style={{ color: changeColor ? "purple" : "green" }}>Homepage</h1>
        <button onClick={() => setChangeColor(!changeColor)}>change h1 von hompeage</button>
        <EventComponent
            changeColor={changeColor}
            setChangeColor={setChangeColor} />
        {children}
        <LoginFeature />
    </>
}

export default HomePage