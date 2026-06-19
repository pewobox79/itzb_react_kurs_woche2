import { Outlet } from "react-router"
import { useLocalStorage } from "../hooks/useLocalStorage"
const ProtectedLayout =()=>{

    const [value] = useLocalStorage("itzb_user")
    return <div style={{border: "1px solid red"}}>
        {value.role === "teamleiter" && <div>das ist ein teamleiter bereich</div>}
        <Outlet/>
    </div>
}

export default ProtectedLayout