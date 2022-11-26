import { createBrowserRouter } from "react-router-dom"
import DashboardLayout from "../../Layouts/DashboardLayout/DashboardLayout";
import MainLayout from "../../Layouts/MainLayout/MainLayout"
import Blog from "../../Pages/Blog/Blog";
import AdminDashboard from "../../Pages/DashboardPage/AdminDashboard/AdminDashboard";
import AllBuyers from "../../Pages/DashboardPage/AdminDashboard/AllBuyers/AllBuyers";
import AllSellers from "../../Pages/DashboardPage/AdminDashboard/AllSellers/AllSellers";
import DashboardPanel from "../../Pages/DashboardPage/DashboardPanel/DashboardPanel";
import AddAProduct from "../../Pages/DashboardPage/SellerDashboard/AddAProduct/AddAProduct";
import MyPostedProducts from "../../Pages/DashboardPage/SellerDashboard/MyPostedProducts/MyPostedProducts";
import HomePageLayout from "../../Pages/HomePage/HomePageLayout/HomePageLayout";
import Login from "../../Pages/Login/Login";
import SignUp from "../../Pages/Login/SignUp";
import ErrorPage from "../../Pages/Shared/ErrorPage/ErrorPage";
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute";

const mainRoute = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout></MainLayout>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <HomePageLayout></HomePageLayout>
            },
            {
                path: '/blog',
                element: <Blog></Blog>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <SignUp></SignUp>
            },
        ]
    },
    {
        path: '/dashboard',
        errorElement: <ErrorPage></ErrorPage>,
        element: <ProtectedRoute><DashboardLayout></DashboardLayout></ProtectedRoute>,
        children: [
            {
                path: '/dashboard',
                element: <DashboardPanel></DashboardPanel>
            },
            {
                path: '/dashboard/admin',
                element: <AdminDashboard></AdminDashboard>
            },
            {
                path: '/dashboard/admin/buyers',
                element: <AllBuyers></AllBuyers>
            },
            {
                path: '/dashboard/admin/sellers',
                element: <AllSellers></AllSellers>
            },
            {
                path: '/dashboard/buyer/addProduct',
                element: <AddAProduct></AddAProduct>
            },
            {
                path: '/dashboard/buyer/MyProducts/',
                element: <MyPostedProducts></MyPostedProducts>
            },
        ]
    }
])

export default mainRoute;