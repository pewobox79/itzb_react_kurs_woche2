import { useState } from "react"

const UsersFeatureItem =({user})=>{

    const [expand, setExpand] = useState(false)
    return <div id={"user_list_key_" + user.id}>
        <h3>{user.username}</h3>
        <p>{user.email}</p>
        <button onClick={() => setExpand(!expand)}>Expand {user.id}</button>
        <div style={{ display: expand ? "block" : "none" }}>
            <p>Address: {user?.address?.street || "Address not known"}</p>
        </div>
    </div>

}

export default UsersFeatureItem