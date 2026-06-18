import { useEffect, useState } from "react"
import UsersFeatureItem from "./UsersFeatureItem"

//const URL_VICI = "http://localhost:5173/api/users"
const URL_GUACAMOLE = "https://jsonplaceholder.typicode.com/users"

const UsersFeature = () => {

    const [users, setUsers] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {

        setTimeout(() => {

            fetch(URL_GUACAMOLE)
                .then(res => res.json())
                .then(data => {
                    setUsers(data)
                    setIsLoading(false)
                })

        }, 1)

    }, [])

    console.log("users", users)

    // dynamic rendering
    const UserList = users.map((user) => {
        console.log("user", user)
        return <UsersFeatureItem 
            key={"user_list_key_" + user.username} 
            user={user} />
    })
    console.log("userlist", UserList)
    if(isLoading || users.length == 0) return <div>...UserData is Loading...</div>

    return <div>
        <h3>Userslist</h3>
        {/* manuelle intergration der user 1-3 => sind allerdings auch ein eigener Scope */}
        <h3>Manuelle Einträge</h3>
        <UsersFeatureItem user={users[0]}/>
        <UsersFeatureItem user={users[1]}/>
        <UsersFeatureItem user={users[2]}/>
        <hr/>
        <h3>Dynamischen einträge</h3>
        {UserList}
    </div>
}

export default UsersFeature