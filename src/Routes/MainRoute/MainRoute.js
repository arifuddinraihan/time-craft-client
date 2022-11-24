import { createBrowserRouter  } from "react-router-dom"
import DashboardLayout from "../../Layouts/DashboardLayout/DashboardLayout";
import MainLayout from "../../Layouts/MainLayout/MainLayout"
import AdminDashboard from "../../Pages/DashboardPage/AdminDashboard/AdminDashboard";
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
            },
            {
                path : '/blog',
                element : <HomePageLayout></HomePageLayout>
            },
            {
                path : '/login',
                element : <HomePageLayout></HomePageLayout>
            },
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
            },
            {
                path : '/dashboard/admin',
                element : <AdminDashboard></AdminDashboard>
            },
        ]
    }
])

export default mainRoute;