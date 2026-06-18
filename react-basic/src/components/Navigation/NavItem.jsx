import { NavLink } from 'react-router'
const NavItem = ({ link, label }) => {

    if (!link || !label) return
    return <NavLink
        className={({ isActive }) => isActive ? "active" : "inActive" }
        to={link}>{label}</NavLink>
}

export default NavItem