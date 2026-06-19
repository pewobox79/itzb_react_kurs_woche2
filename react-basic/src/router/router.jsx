import { createBrowserRouter, Outlet } from 'react-router'
import Homepage from '../pages/HomePage'
import MainLayout from '../layouts/MainLayout'
import About from "../pages/About"
import SingleUserPage from '../pages/SingleUserPage'
import UsersFeature from '../features/UsersFeature/UsersFeature'
import ProtectedLayout from '../layouts/ProtectedLayout'
import { protectedLoader } from '../auth/loader'
import LoginFeature from '../features/LoginFeature'

export const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout><h3>ich bin ein props.children von mainlayout</h3></MainLayout>, //=> mit children wird dieses element zu einem "layout" element
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
            },
            {
                path:"login",
                element: <LoginFeature/>
            },
            {
                path: "users",
                loader: protectedLoader, // => läuft VOR einem CSR (client side rendering)
                element: <ProtectedLayout />,
                children:[
                    {
                        index:true,
                        element: <UsersFeature/>
                    }, {
                        path: ":id",
                        element: <SingleUserPage />
                    }
                ]
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