import { createBrowserRouter, Outlet } from 'react-router'
import Homepage from '../pages/HomePage'
import MainLayout from '../layouts/MainLayout'
import About from "../pages/About"

export const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout ><h3>ich bin ein props.children von mainlayout</h3></MainLayout>,
        children: [
            {
                index: true,
                element: <Homepage />
            },
            {
                path: "about",
                element: <div>about layout<Outlet/></div>,
                children: [{
                    index:true,
                    element: <About/>
                }]
            }
        ]
    },
    {
        path: "dashboard",
        element: <div>layout<Outlet /></div>,
        children: [
            {
                index: true,
                element: <h1>dashboard</h1>
            }, {
                path: "userprofil",
                element: <h1>userprofil</h1>
            }]
    }
])