import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../../Pages/Shared/Navbar/Navbar';

const DashboardLayout = () => {
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
                        <ul className="menu p-4 w-80 bg-base-100 text-base-content">
                            <li><a>My orders for Buyer only</a></li>
                            <li><a>Wishlist for Buyer only</a></li>
                            <li><a>Add a product for Seller only</a></li>
                            <li><a>My Products for Seller only</a></li>
                            <li><a>My Buyers for Seller only</a></li>
                            <li><a>All Buyers for Admin only</a></li>
                            <li><a>All Sellers for Admin only</a></li>
                            <li><a>Reported Items for Admin only</a></li>
                        </ul>

                    </div>
                </div>

            </div>
        </div>
    );
};

export default DashboardLayout;