import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import SpinnerPrimary from '../../components/Spinner/SpinnerPrimary';
import { UserContext } from '../../context/UserValidation';
import useAdmin from '../../Hook/useAdmin';

const AdminOnlyRoute = ({ children }) => {
    const { user, loading } = useContext(UserContext);
    const [isAdmin, isAdminLoading] = useAdmin(user?.email);
    console.log(isAdmin)
    const location = useLocation()
    if (loading || isAdminLoading) {
        console.log('from loading state')
        return <SpinnerPrimary></SpinnerPrimary>;
    }
    if (user && isAdmin) {
        console.log('from user and admin true state')
        return children;
    }
    return <Navigate to={'/'} state={{ from: location }} replace></Navigate>;

};

export default AdminOnlyRoute;