import React, { useEffect, useState } from 'react';
import academic from '../../../images/academic-tutor.png';
import guitar from '../../../images/music-tutor.png';
import cock from '../../../images/cooking-tutor.png';
import computer from '../../../images/computer-tutor.png';
import dance from '../../../images/dance-tutor.png';
import ServiceDetail from './ServiceDetail/ServiceDetail';
import CircularProgress from '@material-ui/core/CircularProgress';

const services = [
    {
        name: 'Academic Tutor',
        img: academic,
        description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corporis ad reprehenderit molestias. Possimus odit culpa sit"
    },
    {
        name: 'Music Tutor',
        img: guitar,
        description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corporis ad reprehenderit molestias. Possimus odit culpa sit"
    },
    {
        name: 'Dance Tutor',
        img: dance,
        description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corporis ad reprehenderit molestias. Possimus odit culpa sit"
    },
    {
        name: 'Computer Tutor',
        img: computer,
        description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corporis ad reprehenderit molestias. Possimus odit culpa sit"
    },
    {
        name: 'Cocking Tutor',
        img: cock,
        description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corporis ad reprehenderit molestias. Possimus odit culpa sit"
    }
]

const Services = () => {
    // const [services, setServices] = useState([]);
    // useEffect(()=>{
    //     fetch(`https://quiet-bastion-53490.herokuapp.com/services`)
    //     .then(res => res.json())
    //     .then(data => {
    //         console.log(data);
    //         setServices(data);
    //     })
    //     .catch(err => console.log(err))
    // },[])
    return (
        <section className='text-center w-100 my-5'>
            <h2 className='my-5 d-inline-block' style={{fontWeight: '600'}}>Awesome <span style={{color: '#007bff'}}>services</span></h2>
            <h3 className="d-inline-block">({services.length})</h3>

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