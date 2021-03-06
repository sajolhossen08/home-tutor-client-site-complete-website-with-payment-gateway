import React, {useContext, useState } from 'react';
import { useEffect } from 'react';
import { UserContext } from '../../../../App';

const OrderFrom = ({handleSubmit,userServiceKey}) => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);

    const [currentService, setCurrentService] = useState({});
    useEffect(()=>{
        userServiceKey !== "customer" && userServiceKey !== "hire_us_for_your_service" && fetch(`https://quiet-bastion-53490.herokuapp.com/services/${userServiceKey}`)
        .then(res => res.json())
        .then(data => {
            setCurrentService(data);
        })
        .catch(err => console.log(err))
    },[userServiceKey]);
    


    return (
        <div>
        <div>
        <form onSubmit={handleSubmit} className='w-50'>
            <div className="form-group">
                <input type="text" name='name' className='form-control' placeholder='Your name' required/>
            </div>
            <div className="form-group">
                    <input type="text" name='email' className='form-control' placeholder='Your email address' required/>
            </div>
            <div className="form-group">
                <input type="text" name='projectTitle' defaultValue={currentService.name} className='form-control text-success' placeholder='Your service title' required/>
            </div>
            <div className="form-group">
                <textarea name="projectDetail" cols="30" rows="6" className='form-control' placeholder='Your comment' required/>    
            </div>
            <div className="d-flex ">
                <input type="number" name='price' className="form-control w-50 mr-1" placeholder="Price" required/>
            </div>
            <input type="submit" className='btn btn-primary px-5' value="Send"/>
        </form>
    </div>
    </div>
    );
};

export default OrderFrom;