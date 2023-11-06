import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';



const NavBar = () => {

    const { user, logOut } = useAuth();

    const theme = false
    const navigate = useNavigate()

    const handleLogOut = async () => {
        await logOut();
    }

    const links = <div className={`flex flex-col gap-2 lg:flex-row lg:gap-10 font-medium lg:text-lg ${theme ? "text-white" : "text-green-700"}`}>

        <li>
            <NavLink
                to="/"
                className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "text-green-800 font-bold underline underline-offset-4" : ""
                }
            >
                Home
            </NavLink>
        </li>
        <li>
            <NavLink
                to="/all-blogs"
                className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "text-green-800 font-bold underline underline-offset-4" : ""
                }
            >
                All Blogs
            </NavLink>
        </li>
        <li>
            <NavLink
                to="/featured"
                className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "text-green-800 font-bold underline underline-offset-4" : ""
                }
            >
                Featured Blogs
            </NavLink>
        </li>
        <li>
            <NavLink
                to="/wishlist"
                className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "text-green-800 font-bold underline underline-offset-4" : ""
                }
            >
                Wishlist
            </NavLink>
        </li>
        <li>
            <NavLink
                to="/add-blog"
                className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "text-green-800 font-bold underline underline-offset-4" : ""
                }
            >
                Add Blog
            </NavLink>
        </li>
        
        
        {
            user === null &&
            <>
                <li className='lg:hidden'>
                    <NavLink
                        to="/login"
                        className={({ isActive, isPending }) =>
                            isPending ? "pending" : isActive ? "text-green-800 font-bold underline underline-offset-4" : ""
                        }
                    >
                        Login
                    </NavLink>
                </li>
                <li className='lg:hidden'>
                    <NavLink
                        to="/register"
                        className={({ isActive, isPending }) =>
                            isPending ? "pending" : isActive ? "text-green-800 font-bold underline underline-offset-4" : ""
                        }
                    >
                        Register
                    </NavLink>
                </li>
            </>
        }

        {
            user === null ||
            <>
                <li onClick={handleLogOut} className='lg:hidden font-bold text-red-700'>
                    <NavLink>Logout</NavLink>
                </li>
            </>
        }



    </div>

    const endLinks = <div className='hidden lg:flex gap-5 font-medium lg:text-lg justify-center items-center'>

        <li>
            <NavLink
                to="/login"
                className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "text-blue-700 font-bold underline underline-offset-4" : ""
                }
            >
                Login
            </NavLink>
        </li>
        <li>
            <NavLink
                to="/register"
                className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "text-blue-700 font-bold underline underline-offset-4" : ""
                }
            >
                Register
            </NavLink>
        </li>
    </div>






    return (
        <div className={`bg-base-200 w-full`}>
            <div className="navbar container mx-auto h-24">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {links}
                        </ul>

                    </div>
                    <div onClick={() => navigate("/")} className="text-xl font-bold flex cursor-pointer">
                        <div>
                            <img className='h-10 w-28' src="/techlogo.png" alt="" />
                        </div>
                    </div>
                </div>
                <div className="navbar-center">
                    <ul className="menu-horizontal px-1 hidden lg:flex">
                        {links}

                    </ul>
                    {/* <div onClick={()=>navigate("/")} className="text-xl font-bold lg:hidden flex cursor-pointer">
                        <div className='bg-green-700 text-white text-center px-2 py-1 rounded-l-md'>
                            Event
                        </div>
                        <div className='bg-red-700 text-white text-center px-2 py-1 rounded-r-md'>
                            Station
                        </div>
                    </div> */}
                </div>
                <div className="navbar-end">

                    <div className='flex justify-center items-center mr-5'>
                        <label className="swap swap-rotate">

                            {/* this hidden checkbox controls the state */}
                            <input onClick={()=>setTheme(!theme)} type="checkbox" />

                            {/* sun icon */}
                            <svg className="swap-on fill-current w-7 h-7" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" /></svg>

                            {/* moon icon */}
                            <svg className="swap-off fill-current w-7 h-7" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" /></svg>

                        </label>
                    </div>
                    <ul className="px-1">
                        {
                            user === null &&
                            endLinks

                        }
                        {
                            user === null ||
                            <div className='pr-5 lg:pr-0 flex gap-2 flex-row lg:gap-5 font-medium lg:text-lg'>
                                <li className='flex items-center'>
                                    <div>
                                        <img className='h-6 w-6 lg:h-9 lg:w-9 rounded-full' src={user.photoURL} alt="" />
                                    </div>
                                </li>
                                <li className='flex items-center'>
                                    {user.displayName}
                                </li>
                                <li onClick={handleLogOut} className='hidden lg:flex items-center cursor-pointer font-bold text-red-700'>
                                    Logout
                                </li>
                            </div>

                        }

                    </ul>
                </div>
            </div>
        </div>
    );
};

export default NavBar;