import React, { useContext } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { AuthContext } from '../context/AuthProvider';
import useAdmin from '../hooks/useAdmin';
import Header from '../Pages/Shared/Header/Header';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcaseMedical, faHome, faList, faRightFromBracket, faUserDoctor, faUsers } from '@fortawesome/free-solid-svg-icons'
import { faCalendarCheck } from '@fortawesome/free-regular-svg-icons';

const DashboardLayout = () => {

    const { user } = useContext(AuthContext);

    const [isAdmin] = useAdmin(user?.email)

    return (
        <div>
            <Header></Header>
            <div className="drawer drawer-mobile">
                <input id="dashboard-drawer" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-col">
                    <Outlet></Outlet>
                </div>
                <div className="drawer-side">
                    <label htmlFor="dashboard-drawer" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 bg-base-100 text-base-content">
                        {/* <!-- Sidebar content here --> */}
                        <li>
                            <Link to='/dashboard'>
                                <FontAwesomeIcon icon={faCalendarCheck} />
                                <p className='font-semibold'>My Appointmen</p>
                            </Link>
                        </li>
                        {
                            isAdmin &&
                            <>
                                <li>
                                    <Link to='/dashboard/allusers'>
                                        <FontAwesomeIcon icon={faUsers} />
                                        <p className='font-semibold'>All Users</p>
                                    </Link>
                                </li>
                                <li>
                                    <Link to='/dashboard/add-doctor'>
                                        <FontAwesomeIcon icon={faUserDoctor} />
                                        <p className='font-semibold'>Add Doctors</p>
                                    </Link>
                                </li>
                                <li>
                                    <Link to='/dashboard/manage-doctors'>
                                        <FontAwesomeIcon icon={faBriefcaseMedical} />
                                        <p className='font-semibold'>Manage Doctor</p>
                                    </Link>
                                </li>
                            </>
                        }
                    </ul>

                </div>
            </div>
        </div>
    );
};

export default DashboardLayout;