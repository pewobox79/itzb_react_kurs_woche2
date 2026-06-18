import { Outlet } from "react-router"
const ProtectedLayout =()=>{

    return <div style={{border: "1px solid red"}}>
        <Outlet/>
    </div>
}

export default ProtectedLayout