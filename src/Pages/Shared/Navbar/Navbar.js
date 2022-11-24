import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Navbar = () => {
    const navMenu = <>
        <NavLink className="btn btn-ghost" to={'/dashboard'}>Dashboard</NavLink>
        <NavLink className="btn btn-ghost">Blog</NavLink>
        <NavLink className="btn btn-ghost">Login</NavLink>
        <NavLink className="btn btn-ghost">Logout</NavLink>
    </>

    return (
        <div className='bg-base-100'>
            <div className="navbar container mx-auto">
                <div className="navbar-start">
                    <label htmlFor="dashboard-panel-drawer"  className="btn btn-sm btn-ghost drawer-button lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
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
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;