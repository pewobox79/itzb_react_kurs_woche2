import { useEffect, useState } from "react"
import { useParams } from "react-router"

//const URL_VICI = "http://localhost:5173/api/users"
const URL_GUACAMOLE = "https://jsonplaceholder.typicode.com/users"

const SingleUserPage = () => {

    const paramValues = useParams()
    const [user, setUser] = useState({})
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        const singleUserUrl = `${URL_GUACAMOLE}/${paramValues.id}`
        fetch(singleUserUrl)
            .then(res => res.json())
            .then(data => {
                setUser(data)
                setIsLoading(false)
            })
    }, [])


    console.log("param value", paramValues)
    console.log("user", Object.keys(user))

    // => prüfen ob ladezyklus läuft
    if (isLoading) return <h3>daten werden geladen....</h3>
    //=> prüfen ob user "truthy" ist oder ob das Object einträge hat
    if (!user || Object.keys(user).length == 0) {

        return <>
            <h3>no user available</h3>
        </>
    }

    return <div>
        <h3>Name: {user?.name}</h3>
        <p>Company: {user?.company?.name}</p>
        <p>Email: {user?.email}</p>
        <p>Website: {user?.website}</p>

    </div>
}

export default SingleUserPage