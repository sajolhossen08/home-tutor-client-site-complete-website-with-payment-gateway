import React from 'react';
import { Link } from 'react-router-dom';

const serviceStyle = {
    textDecoration: 'none',
    fontFamily: 'Poppins'
};

const ServiceLink = ({service}) => {
    return (
        <Link to={`/user/${service._id}`} className='text-center' style={serviceStyle}>
            <img className='img-fluid w-25 mx-auto my-3' src={service.img} alt=""/>
            <h5 className='text-info'>{service.name}</h5>
            <p className='text-secondary'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea sunt dolore necessitatibus. Ab, quam? Rerum. {service.description}</p>
        </Link>
    );
};

export default ServiceLink;