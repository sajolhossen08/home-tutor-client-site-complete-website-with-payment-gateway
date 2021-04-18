import React, { useEffect, useState } from 'react';
import ServiceDetail from './ServiceDetail/ServiceDetail';
import CircularProgress from '@material-ui/core/CircularProgress';


const Services = () => {
    const [services, setServices] = useState([]);
    useEffect(()=>{
        fetch(`https://quiet-bastion-53490.herokuapp.com/services`)
        .then(res => res.json())
        .then(data => {
            console.log(data);
            setServices(data);
        })
        .catch(err => console.log(err))
    },[])

    return (
        <section className='text-center w-100 my-5'>
            <h2 className='my-5 d-inline-block' style={{fontWeight: '600'}}>Awesome <span style={{color: '#007bff'}}>services</span></h2>

            <div className="row w-100 mx-auto justify-content-center">
                {
                    !services.length && <div className='text-center'>
                            <CircularProgress color="dark" /> 
                            <h2 style={{color: '#007bff', }}>loading....</h2>
                        </div>
                }
                {
                    services.map(service => <ServiceDetail service={service} key={service.name}></ServiceDetail>)
                }
            </div>
        </section>
    );
};

export default Services;