import React from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';

const Navbar = () => {
    const navMenu = <>
        <NavLink className="btn btn-ghost" to={'/dashboard'}>Dashboard</NavLink>
        <NavLink className="btn btn-ghost">Blog</NavLink>
        <NavLink className="btn btn-ghost">Login</NavLink>
    </>
    // location tracker for conditional modal button render in navbar
    const location = useLocation();
    const dashboardPath = location.pathname;

    return (
        <div className='bg-base-100'>
            <div className="navbar container mx-auto">
                <div className="navbar-start">
                    {
                        (dashboardPath === '/dashboard') && <label htmlFor="dashboard-panel-drawer" className="btn btn-md btn-ghost drawer-button lg:hidden">
                              <svg className="swap-off fill-current" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 512 512"><path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z"/></svg>
                        </label>
                    }
                    <Link to={'/'} className="btn btn-ghost normal-case text-xl">daisyUI</Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal p-0">
                        {
                            navMenu
                        }
                    </ul>
                </div>
                <div className="navbar-end">
                    <div className="dropdown dropdown-end">
                        <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                            <div className="w-10 rounded-full">
                                <img src="https://placeimg.com/80/80/people" />
                            </div>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 bg-opacity-90 rounded-box w-52">
                            {
                                navMenu
                            }
                            <li className="btn btn-ghost">Logout</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;