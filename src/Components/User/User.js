import React, { useContext } from 'react';
import Admin from './Admin/Admin';
import Customer from './Customer/Customer';
import logo from '../../images/logo.jpg'
import { UserContext } from '../../App';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';

const User = () => {
    const [loggedInUser, setLoggedInUser, user,setUser] = useContext(UserContext);
    const userServiceKey = useParams();

    return (
        <div className="p-5">
            <Link to='/'>
                <img src={logo} className='m-2' style={{height: '50px'}} alt=""/>
            </Link>
            {
                user.title === "Admin"
                ? <Admin setLoggedInUser={setLoggedInUser} setUser={setUser}></Admin>
                : <Customer userServiceKey={userServiceKey.userServiceKey} loggedInUser={loggedInUser}></Customer>
            }
        </div>
    );
};

export default User;