import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import SpinnerPrimary from '../../components/Spinner/SpinnerPrimary';
import { UserContext } from '../../context/UserValidation';

const ProtectedRoute = ({ children }) => {
    const location = useLocation();
    const { user, loader } = useContext(UserContext)
    if (loader) {
        return <SpinnerPrimary></SpinnerPrimary>
    }
    if (user === null) {
        return <Navigate to={'/login'} state={{ from: location }} replace></Navigate>
    }
    return children;
};

export default ProtectedRoute;