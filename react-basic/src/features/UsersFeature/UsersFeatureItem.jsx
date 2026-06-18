import { useState } from "react"
import { Link } from "react-router"

const UsersFeatureItem = ({ user }) => {

    const [expand, setExpand] = useState(false)
    if (!user) return
    // => JS destructuring
    const { username, email, address, id } = user

    const userPath = `/users/${id}`
    
    return <div id={`user_list_key_${id}`}>
        <h3>{username}</h3>
        <p>{email}</p>
        <button onClick={() => setExpand(!expand)}>Expand {id}</button>

        <Link to={userPath}>Details</Link>
        
        <div style={{ display: expand ? "block" : "none" }}>
            <p>Address: {address?.street || "Address not known"}</p>
        </div>
    </div>

}

export default UsersFeatureItem