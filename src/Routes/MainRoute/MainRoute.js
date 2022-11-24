import { createBrowserRouter  } from "react-router-dom"
import DashboardLayout from "../../Layouts/DashboardLayout/DashboardLayout";
import MainLayout from "../../Layouts/MainLayout/MainLayout"
import ErrorPage from "../../Pages/Shared/ErrorPage/ErrorPage";

const mainRoute = createBrowserRouter([
    {
        path : '/',
        element : <MainLayout></MainLayout>,
        errorElement : <ErrorPage></ErrorPage>,
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