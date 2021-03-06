import React from 'react';
import { Link } from 'react-router-dom';

const serviceStyle = {
    textDecoration: 'none',
    fontFamily: 'Poppins'
};

const ServiceLink = ({service}) => {
    return (
        <Link to={`/user/${service._id}`} className='text-center' style={serviceStyle}>
            <h5 className='text-info'>{service.name}</h5>
            <p className='text-secondary'>{service.description}</p>
        </Link>
    );
};

export default ServiceLink;