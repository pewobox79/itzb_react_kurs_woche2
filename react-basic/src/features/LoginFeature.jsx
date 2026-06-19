import { useContext, useState } from "react"
import { useLocalStorage } from "../hooks/useLocalStorage"
import { ThemeContext } from "../store/context/themeContext"
import Heading from '../components/Heading'

const INIT_VALUES = { username: "", password: "" }
const LoginFeature = () => {
    console.log("login feature rendered")
    const { setThemeState } = useContext(ThemeContext)

    const [userData, setUserData] = useState(INIT_VALUES)
    const [setStoredValue] = useLocalStorage("itzb_user")

    function handleChange(eventObject) {

        const { name, value } = eventObject.target
        setUserData({ ...userData, [name]: value }) // => spread operator erstellt Shallow copy

    }

    function handleSubmit(e) {
        // => localStorage soll die user daten abspeichern
        // => isLoggedin: true
        e.preventDefault()
        const loggedStatus = { loggedIn: true, role: "hausmeister" }
        const updatedValues = { ...userData, ...loggedStatus }
        alert(JSON.stringify(userData))
        setStoredValue(updatedValues)
        
    }

    return <div>
        <Heading title="das ist das heading" text="das ist der heading text" />
        <button onClick={()=>setThemeState("light")}>switch theme to light</button>
        <form style={{ display: "flex", flexDirection: "column", width: "50%", margin: "auto", padding: "20px 0" }}>
            <input
                type="text"
                name="username"
                placeholder="Username"
                value={userData.username}
                onChange={handleChange}
            />
            <input type="text" name="password" placeholder="Password" value={userData.password} onChange={handleChange} />
            <button onClick={handleSubmit}>Submit</button>
        </form>
    </div>
}

export default LoginFeature