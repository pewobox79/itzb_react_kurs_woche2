import { Link } from "react-router"
import { memo } from "react"

function Footer() {
    console.log("footer rendered")
    return <footer>
        <h1>das ist ein footer</h1>
        <Link to="/users">Access users</Link>
    </footer>
}

export default memo(Footer)