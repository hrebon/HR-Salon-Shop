import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignOutAlt, faCalendar, faHome, faGripHorizontal, faUserPlus, faUsers } from '@fortawesome/free-solid-svg-icons';
import { UserContext } from '../../../App';

const Sidebar = () => {
    
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [isAdmin, setAdmin] = useState(false);

    useEffect(()=>{
        fetch('https://pure-sands-23213.herokuapp.com/isAdmin',{
            method: 'POST',
            headers: {'content-type': 'application/json'},
            body: JSON.stringify({email: loggedInUser.email})
        })
        .then(res => res.json())
        .then(data => setAdmin(data));
    },[])
    
    return (
        <div className="sidebar d-flex flex-column justify-content-between col-md-2 py-5 px-4" style={{ height: "100vh" }}>
            <ul className="list-unstyled">
                <li>
                    <Link to="/dashboard" className="text-white">
                        <FontAwesomeIcon icon={faGripHorizontal} /> <span>Dashboard</span>
                    </Link>
                </li>
                <li>
                    <Link to="/" className="text-white">
                        <FontAwesomeIcon icon={faHome} /> <span>Home</span>
                    </Link>
                </li>
                    <li>
                        <Link to='/book' className="text-white">
                            <FontAwesomeIcon icon={faCalendar} /> <span>Book</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/bookingList" className="text-white">
                            <FontAwesomeIcon icon={faUsers} /> <span>Booking list</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/review" className="text-white">
                            <FontAwesomeIcon icon={faUsers} /> <span>Review</span>
                        </Link>
                    </li>
                    {isAdmin &&  <div>
                        <li>
                        <Link to="/Oderlist" className="text-white">
                            <FontAwesomeIcon icon={faUsers} /> <span>Oder list</span>
                        </Link>
                    </li>
                    
                    <li>
                        <Link to="/addService" className="text-white" >
                            <FontAwesomeIcon icon={faUserPlus} /> <span>Add Service</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/Makeadmin" className="text-white">
                            <FontAwesomeIcon icon={faUsers} /> <span>Make Admin</span>
                        </Link>
                    </li>
                    <li>
                    <Link to="/Manageservice" className="text-white">
                        <FontAwesomeIcon icon={faGripHorizontal} /> <span>Manage Service</span>
                    </Link>
                </li>
                </div>}
            </ul>
            <div>
                <Link to="/" className="text-white"><FontAwesomeIcon icon={faSignOutAlt} /> <span>Logout</span></Link>
            </div>
        </div>
    );
};

export default Sidebar;