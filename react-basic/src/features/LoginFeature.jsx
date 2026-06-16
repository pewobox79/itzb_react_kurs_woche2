import { useState } from "react"

const INIT_VALUES = { username: "", password: "" }
const LoginFeature = () => {
    const [userData, setUserData] = useState(INIT_VALUES)

    function handleChange(eventObject) {

        const { name, value } = eventObject.target
        setUserData({ ...userData, [name]: value }) // => spread operator erstellt Shallow copy

    }

    function handleSubmit(){
        alert(JSON.stringify(userData))
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