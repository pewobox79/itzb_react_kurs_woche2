import { navData } from "../../static/navData"
import NavItem from "./NavItem"
const Navigation = () => {
    // => props weitergabe an NavItem durch {...SPREAD-OPERATOR}
    const NavLinks = navData.map((item) => <NavItem key={item.uid} {...item} />)
    return <nav>
        {NavLinks}
    </nav>
}

export default Navigation