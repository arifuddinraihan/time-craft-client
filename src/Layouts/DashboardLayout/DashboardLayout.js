import React, { useContext } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { UserContext } from '../../context/UserValidation';
import useAdmin from '../../Hook/useAdmin';
import useBuyer from '../../Hook/useBuyer';
import useSeller from '../../Hook/useSeller';
import Navbar from '../../Pages/Shared/Navbar/Navbar';

const DashboardLayout = () => {
    const { user } = useContext(UserContext)
    const [isAdmin] = useAdmin(user?.email)
    const [isSeller] = useSeller(user?.email)
    const [isBuyer] = useBuyer(user?.email)
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
                        <div className="flex flex-col items-center pt-3 w-80">
                            <div className='flex flex-col items-center my-4'>
                                <img className="object-cover w-24 h-24 mx-2 rounded-full"
                                    src={user?.photoURL} alt="avatar" />
                                <h4 className="mx-2 mt-2 font-medium text-warning hover:underline">{user?.displayName}</h4>
                                <p className="mx-2 mt-1 text-sm font-medium text-primary hover:underline">{user?.email}</p>
                            </div>
                            <ul className="menu p-4 w-80 text-base-content gap-2">
                                {
                                    isBuyer && <>
                                        <li><Link to={'/dashboard/buyer/MyORders'}>My orders</Link></li>
                                    </>
                                }
                                {
                                    isSeller && <>
                                        <li><Link to={'/dashboard/seller/addProduct'}>Add A Product</Link></li>
                                        <li><Link to={'/dashboard/seller/MyProducts'}>My Products</Link></li>
                                    </>
                                }
                                {
                                    isAdmin && <>
                                        <li><Link to={'/dashboard/admin/buyers'}>Buyers List</Link></li>
                                        <li><Link to={'/dashboard/admin/sellers'}>Sellers List</Link></li>
                                        <li><Link to={'/dashboard/admin/reportedItems'}>Reported Items</Link></li>
                                    </>
                                }
                            </ul>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default DashboardLayout;