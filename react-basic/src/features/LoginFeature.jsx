import { useState } from "react"
import { useLocalStorage } from "../hooks/useLocalStorage"

const INIT_VALUES = { username: "", password: "" }
const LoginFeature = () => {
    const [userData, setUserData] = useState(INIT_VALUES)
    const [value, setStoredValue] = useLocalStorage("itzb_user")

    console.log("value in local storage", value)
    function handleChange(eventObject) {

        const { name, value } = eventObject.target
        setUserData({ ...userData, [name]: value }) // => spread operator erstellt Shallow copy

    }

    function handleSubmit(e) {
        // => localStorage soll die user daten abspeichern
        // => isLoggedin: true
        e.preventDefault()
        const loggedStatus = { loggedIn: true }
        const updatedValues = { ...userData, ...loggedStatus }
        alert(JSON.stringify(userData))
        setStoredValue(updatedValues)
        
    }
    console.log("userData", userData)
    return <div>
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