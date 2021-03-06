import React, { useContext, useState } from 'react';
import './Customer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCommentAlt, faHdd, faLocationArrow, faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { UserContext } from '../../../App';
import { useHistory } from 'react-router';
import OrderFrom from './OrderFrom/OrderFrom';
import ServiceList from './ServiceList/ServiceList';
import Review from './Review/Review';

const Customer = ({userServiceKey}) => {
    const [loggedInUser,setLoggedInUser,user,setUser] = useContext(UserContext);
    const history = useHistory();
    const [order, setOrder] = useState(true);
    const [serviceList, setServiceList] = useState(false);
    const [review, setReview] = useState(false);
    const handleClick = (logic) =>{
        if(logic === 'order'){
            setOrder(true);
            setServiceList(false);
            setReview(false)

        }else if(logic === 'service'){
            setOrder(false);
            setServiceList(true);
            setReview(false)

        }else{
            setOrder(false);
            setServiceList(false);
            setReview(true)
        }
    }
    const handleSubmit = (evt)=>{
        evt.preventDefault();
        const formData = new FormData();
        formData.append('customerEmail', loggedInUser.email);
        formData.append('action', 'Pending')
        formData.append('actionBG', "#FFE3E3")
        formData.append('actionColor', "#FF4545")
        formData.append('name', evt.target.name.value)
        formData.append('price', evt.target.price.value)
        formData.append('email', evt.target.email.value)
        formData.append('projectTitle', evt.target.projectTitle.value)
        formData.append('projectDetails', evt.target.projectDetail.value)
        formData.append('file', evt.target.file.files[0])

        fetch('https://quiet-bastion-53490.herokuapp.com/addClientProject', {
            method: 'POST',
            body: formData
        })
        .then(response => response.json())
        .then(data => {
            data && alert('Welcome Your Project Is Uploaded Successfully!!!');
        })
        .catch(error => {
            console.error(error);
        })
    }
    const handleLogout = ()=>{
        setLoggedInUser({});
        setUser({});
        history.replace('/');
    }

    return (
        <section className='container-fluid m-0'>
            <div className="row">
                <div className="col-md-2 my-5">
                    <p onClick={() => handleClick('order')} style={{color: order? '#007bff': 'black', cursor: 'pointer'}}><FontAwesomeIcon icon={faShoppingCart }/> Order</p>
                    <p onClick={() => handleClick('service')} style={{color: serviceList? '#007bff': 'black', cursor: 'pointer'}}><FontAwesomeIcon icon={faHdd}/> Service list</p>
                    <p onClick={() => handleClick('review')} style={{color: review? '#007bff': 'black', cursor: 'pointer'}}><FontAwesomeIcon icon={faCommentAlt}/> Review</p>
                    <p onClick={() => handleLogout()} className="text-danger" style={{cursor: 'pointer'}}><FontAwesomeIcon icon={faLocationArrow}/> Logout</p>

                </div>
                <div className="col-md-10 user-maintain">
                    <div className="row justify-content-between">
                        <div className="col-md-6 text-md-left text-sm-center text-xs-center">
                            {
                                order && <h4>Order</h4>
                            }
                            {
                                serviceList && <h4>Service List</h4>
                            }
                            {
                                review && <h4>Review</h4>
                            }
                        </div>
                        <div className="col-md-6 text-md-right text-sm-center text-primary text-xs-center">
                            <h4>{loggedInUser.name}</h4>
                        </div>
                    </div>
                    <div className="jumbotron w-100 m-0">
                        {
                            order && <OrderFrom user={user} userServiceKey={userServiceKey} handleSubmit={handleSubmit}/>
                        }
                        {
                            serviceList && <ServiceList checkedEmail={loggedInUser.email}/>
                        }
                        {
                            review && <Review/>
                        }
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Customer;