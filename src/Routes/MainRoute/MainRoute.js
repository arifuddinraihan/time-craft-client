import { createBrowserRouter  } from "react-router-dom"
import DashboardLayout from "../../Layouts/DashboardLayout/DashboardLayout";
import MainLayout from "../../Layouts/MainLayout/MainLayout"

const mainRoute = createBrowserRouter([
    {
        path : '/',
        element : <MainLayout></MainLayout>,
        // errorElement : ,
        // children : [
        //     {
        //         path : '/',
        //         element : 
        //     }
        // ]
    },
    {
        path : '/dashboard',
        element : <DashboardLayout></DashboardLayout>
    }
])

export default mainRoute;