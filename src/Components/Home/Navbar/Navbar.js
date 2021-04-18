import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../../App';
import logo from '../../../images/logo.jpg';
import './Navbar.css';

const Navbar = () => {
    const [loggedInUser,setLoggedInUser,user] = useContext(UserContext);
    
    if(false){
        console.log(setLoggedInUser);
    }

    return (
        <nav className="navbar sticky-top navbar-expand-md navbar-light bg-light">
            <div className="container-fluid">
                <Link to="/home"><img width="130" height="50" src={logo} className="d-inline-block align-top" alt="home"/></Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ml-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link mr-5 active nav-link-text-style" aria-current="page" to="/home">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link mr-5 active nav-link-text-style" aria-current="page" to="/tutors">Tutors</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link mr-5 active nav-link-text-style" aria-current="page" to="/contact">Contact us</Link>
                        </li>
                        <li>
                        {
                        loggedInUser.email 
                        ? <Link to='/user/customer' className='name-link text-decoration-none'>
                            <img src={loggedInUser.photoURL} style={{height: '40px',borderRadius: '50px'}} alt=""/> <span className='pic-name text-info'>{loggedInUser.name.split(' ')[0]}</span>
                        </Link>

                        : user.title === 'Admin'

                        ? <Link to="/user/admin" className='mx-auto my-auto nav-link btn btn-outline-primary'>Admin</Link>

                        : <Link to="/login" className='mx-auto nav-link btn btn-outline-primary'>Login</Link>
                        }
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;