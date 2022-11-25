import React, { useContext } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { UserContext } from '../../context/UserValidation';
import Navbar from '../../Pages/Shared/Navbar/Navbar';

const DashboardLayout = () => {
    const {user} = useContext(UserContext)
    
    const dashboardMenu = {

    }

    return (
        <div className='bg-base-100'>
            <div className='container mx-auto'>
                <Navbar></Navbar>
                <div className="drawer drawer-mobile">
                    <input id="dashboard-panel-drawer" type="checkbox" className="drawer-toggle" />
                    <div className="drawer-content flex flex-col">
                        <Outlet></Outlet>

                    </div>
                    <div className="drawer-side">
                        <label htmlFor="dashboard-panel-drawer" className="drawer-overlay"></label>
                        <div className="flex flex-col items-center pt-3 bg-base-100">
                            <div className='flex flex-col items-center my-4'>
                                <img className="object-cover w-24 h-24 mx-2 rounded-full" 
                                src={user?.photoURL} alt="avatar" />
                                <h4 className="mx-2 mt-2 font-medium text-warning hover:underline">{user?.displayName}</h4>
                                <p className="mx-2 mt-1 text-sm font-medium text-primary hover:underline">{user?.email}</p>
                            </div>
                            <ul className="menu p-4 w-80 bg-base-100 text-base-content">
                                <li><a>My orders for Buyer only</a></li>
                                <li><a>Wishlist for Buyer only</a></li>
                                <li><a>Add a product for Seller only</a></li>
                                <li><a>My Products for Seller only</a></li>
                                <li><a>My Buyers for Seller only</a></li>
                                <li><Link to={'/dashboard/admin/buyers'}>All Buyers for Admin only</Link></li>
                                <li><a>All Sellers for Admin only</a></li>
                                <li><a>Reported Items for Admin only</a></li>
                            </ul>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default DashboardLayout;