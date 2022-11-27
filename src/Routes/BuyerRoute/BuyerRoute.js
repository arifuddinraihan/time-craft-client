import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import SpinnerPrimary from '../../components/Spinner/SpinnerPrimary';
import { UserContext } from '../../context/UserValidation';
import useBuyer from '../../Hook/useBuyer';


const BuyerRoute = ({ children }) => {
    const { user, loading } = useContext(UserContext);
    const [isBuyer, isBuyerLoading] = useBuyer(user?.email)
    // console.log(isAdmin)
    const location = useLocation()
    if (loading || isBuyerLoading) {
        // console.log('from loading state')
        return <SpinnerPrimary></SpinnerPrimary>;
    }
    if (user && isBuyer) {
        // console.log('from user and admin true state')
        return children;
    }
    return <Navigate to={'/'} state={{ from: location }} replace></Navigate>;

};

export default BuyerRoute;