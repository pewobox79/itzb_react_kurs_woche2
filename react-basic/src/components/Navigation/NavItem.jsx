const NavItem =({link, label})=>{

    if(!link || !label) return
    return <a href={link}>{label}</a>
}

export default NavItem