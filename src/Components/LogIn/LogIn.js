import React, { useContext, useRef, useState } from 'react';
import './LogIn.css';
import logo from '../../images/logo.jpg';
import googleIcon from '../../images/google-Icon.png';
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './FirebaseConfig/FirebaseConfig';
import { UserContext } from '../../App';
import { useHistory, useLocation } from 'react-router';
import { Link } from 'react-router-dom';




const LogIn = () => {
    if (!firebase.apps.length) {
        firebase.initializeApp(firebaseConfig);
     }else {
        firebase.app();
     }

    const [loggedInUser, setLoggedInUser,user,setUser] = useContext(UserContext);
    const [admin, setAdmin] = useState(false);
    const nameRef = useRef();
    let history = useHistory();
    let location = useLocation();

    let { from } = location.state || { from: { pathname: "/" } };

    const handleSignIn = () => {
        
        const googleProvider = new firebase.auth.GoogleAuthProvider();
        firebase.auth().signInWithPopup(googleProvider)
        .then(result => {
            const user = result.user;
            const {displayName, email, photoURL, emailVerified} = user;
            const signedInUser = {
                name: displayName,
                email: email,
                photoURL: photoURL,
                emailVerified: emailVerified
            }
            setLoggedInUser(signedInUser);
            setUser({title: '', email: '', img: ''});
            history.replace(from);

        })
        .catch(function(error) {
            const errorMessage = error.message;
            console.log(errorMessage,loggedInUser,user);
        });
    }
    const handleSubmit = (evt) =>{
        evt.preventDefault();
        // console.log(evt.target.email.value);
        const email = evt.target.email.value;
        fetch(`http://localhost:5050/admin?email=${email}`)
        .then(res => res.json())
        .then(data => {
            // console.log(data.length > 0);
            if(data.length > 0){
                setLoggedInUser({});
                setUser(data[0]);
                history.replace(from);
            }else{
                alert("Sorry!!! Your email didn't matched as an admin");
                nameRef.current.value = "";
                history.replace('/');
            }
        })
        .catch(err => {
            console.log(err);
        })
    }

    return (
        <div className='d-flex flex-column justify-content-center text-center  full-page'>
        <Link to='/'>
            <img style={{width: '157px',margin: '0 auto'}} src={logo} alt=""/>
        </Link>
        {
           admin 
           ? <div className="m-4 card w-50 p-4 mx-auto border-info">
               <h5 className='font-weight-light my-3'>Sign in with email as an Admin</h5>
               <form onSubmit={handleSubmit} className=''>
                   <div className="form-group w-100 form-inline justify-content-center">
                        <input ref={nameRef} type="text" className='form-control w-50 mr-3' name='email' placeholder="Enter Your Email" required/>
                        <input type="submit" className="btn btn-primary" value="Login"/>
                   </div>
               </form>
               <p className='mt-2 font-italic'>Have an account as a customer? <span onClick={() => setAdmin(!admin)} className='text-primary' style={{textDecoration: 'underline',cursor: 'pointer'}}>Login with google</span></p>
           </div>
           : <div className="m-5 card w-50 p-4 mx-auto border-info">
                <h4 className='font-weight-light'>Login With</h4>
                <button onClick={handleSignIn} className='btn btn-outline-primary mx-auto google-btn mt-3'><img className='gLogo-img' src={googleIcon} alt=""/> <span className='google-line'>Continue With Google</span></button>
                <p className='mt-2 font-italic'>Have an account as an admin? <span onClick={() => setAdmin(!admin)} className='text-primary' style={{textDecoration: 'underline',cursor: 'pointer'}}>Sign in with email</span></p>
            </div>
        }
    </div>
    );
};

export default LogIn;