import { useState } from "react"

const UsersFeatureItem =({user})=>{

    const [expand, setExpand] = useState(false)
    if (!user) return
    // => JS destructuring
    const {username, email, address, id} = user
    
    return <div id={"user_list_key_" + id}>
        <h3>{username}</h3>
        <p>{email}</p>
        <button onClick={() => setExpand(!expand)}>Expand {id}</button>
        <div style={{ display: expand ? "block" : "none" }}>
            <p>Address: {address?.street || "Address not known"}</p>
        </div>
    </div>

}

export default UsersFeatureItem