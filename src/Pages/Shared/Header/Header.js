import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../context/AuthProvider';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faHospitalUser, faList, faRightFromBracket } from '@fortawesome/free-solid-svg-icons'
import { faCalendarCheck } from '@fortawesome/free-regular-svg-icons';

const Header = () => {

    const { user, logoutUser } = useContext(AuthContext);

    const handleSignOut = () => {
        logoutUser()
            .then(() => alert("Logout successfull"))
            .catch((error) => console.log(error.message))
    }

    const menuItems = <>

        <li>
            <Link to='/'> <FontAwesomeIcon icon={faHome} className=''></FontAwesomeIcon>Home</Link>
        </li>
        <li><Link to='/about'><FontAwesomeIcon icon={faList} /> About</Link></li>
        <li><Link to='/appoinment'><FontAwesomeIcon icon={faCalendarCheck} />Appointment</Link></li>

        {user?.uid ?
            <>
                <div className="dropdown dropdown-end cursor-pointer">
                    <div tabIndex={0} className="avatar online">
                        <div className="w-8 ml-3 mt-2 md:w-12 rounded-full">
                            <img src={user?.photoURL} alt='' />
                        </div>
                    </div>
                    <ul tabIndex={0} 
                    className="dropdown-content menu p-2  bg-[#1E2B47]  w-52">
                        <li className='hover:bg-base-100 hover:text-black'><Link to='/reviews'>{user?.displayName}</Link></li>
                        <li className='hover:bg-base-100 hover:text-black'><Link to='/dashboard'>Dashboard</Link></li>
                        <li className='hover:bg-base-100 hover:text-black'><button onClick={handleSignOut}>SignOut</button></li>
                    </ul>
                </div>

            </>
            :
            <>
                <li><Link to='/login'> <FontAwesomeIcon icon={faRightFromBracket} /> Login</Link></li>
            </>
        }

    </>

    return (
        <div className="navbar bg-[#1E2B47] flex justify-between">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 text-white shadow rounded-box w-52 ">
                        {menuItems}
                    </ul>
                </div>
                <Link to='/' className="btn btn-ghost normal-case text-xl">
                    <p className='text-xl text-white font-'>
                        <FontAwesomeIcon className='mr-3' icon={faHospitalUser} />
                        Doctors-Portal
                    </p>
                </Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal items-center text-white  p-0">
                    {menuItems}
                </ul>
            </div>
            <label htmlFor="dashboard-drawer" tabIndex={2} className="btn btn-ghost lg:hidden">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>
        </div>
    );
};

export default Header;