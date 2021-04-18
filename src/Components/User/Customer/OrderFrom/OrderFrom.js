import React, { useCallback, useState } from 'react';
import { useEffect } from 'react';
import uploadIcon from '../../../../images/upload.png'

const OrderFrom = ({handleSubmit,userServiceKey}) => {
    const [currentService, setCurrentService] = useState({});
    useEffect(()=>{
        userServiceKey !== "customer" && userServiceKey !== "hire_us_for_your_service" && fetch(`http://localhost:5050/services/${userServiceKey}`)
        .then(res => res.json())
        .then(data => {
            setCurrentService(data);
        })
        .catch(err => console.log(err))
    },[userServiceKey])

    return (
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
    );
};

export default OrderFrom;