import { createBrowserRouter  } from "react-router-dom"
import DashboardLayout from "../../Layouts/DashboardLayout/DashboardLayout";
import MainLayout from "../../Layouts/MainLayout/MainLayout"
import DashboardPanel from "../../Pages/DashboardPage/DashboardPanel/DashboardPanel";
import HomePageLayout from "../../Pages/HomePage/HomePageLayout/HomePageLayout";
import ErrorPage from "../../Pages/Shared/ErrorPage/ErrorPage";

const mainRoute = createBrowserRouter([
    {
        path : '/',
        element : <MainLayout></MainLayout>,
        errorElement : <ErrorPage></ErrorPage>,
        children : [
            {
                path : '/',
                element : <HomePageLayout></HomePageLayout>
            }
        ]
    },
    {
        path : '/dashboard',
        errorElement : <ErrorPage></ErrorPage>,
        element : <DashboardLayout></DashboardLayout>,
        children : [
            {
                path : '/dashboard',
                element : <DashboardPanel></DashboardPanel>
            }
        ]
    }
])

export default mainRoute;