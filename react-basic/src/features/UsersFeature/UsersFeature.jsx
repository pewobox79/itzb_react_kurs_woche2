import { useEffect, useState } from "react"
import UsersFeatureItem from "./UsersFeatureItem"

const URL_VICI = "http://localhost:5173/api/users"
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

        }, 2000)

    }, [])

    console.log("users", users)

    // dynamic rendering
    const UserList = users.map((user) => {
        console.log("user", user)
        return <UsersFeatureItem key={"user_list_key_" + user.id} user={user} />

    })
    console.log("userlist", UserList)
    if(isLoading) return <div>...UserData is Loading...</div>

    return <div>
        <h3>Userslist</h3>
        {UserList}
    </div>
}

export default UsersFeature