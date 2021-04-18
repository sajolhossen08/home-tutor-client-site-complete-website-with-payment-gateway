import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import ShowList from './ShowList';
import CircularProgress from '@material-ui/core/CircularProgress';

const ServiceList = ({checkedEmail}) => {
    const [userServices, setUserServices] = useState([]);
    useEffect(() =>{
        fetch(`http://localhost:5050/clients/email?checkedEmail=${checkedEmail}`)
        .then(res => res.json())
        .then(data => {
            setUserServices(data);
        })
    },[checkedEmail]);

    return (
        <div className="text-center">
            <div className="row justify-content-center">
                {
                    !userServices.length && <div className='text-center'>
                            <CircularProgress color="dark" /> 
                            <h2 style={{color: '#007bff', }}>loading....</h2>
                        </div>
                }
                {
                    userServices.map(service => <ShowList key={service._id} service={service} />)
                }
            </div>
        </div>
    );
};

export default ServiceList;