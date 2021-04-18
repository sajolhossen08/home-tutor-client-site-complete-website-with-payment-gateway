import React, { useEffect, useState } from 'react';
// import academic from '../../../images/academic-tutor.png';
// import guitar from '../../../images/music-tutor.png';
// import cock from '../../../images/cooking-tutor.png';
// import computer from '../../../images/computer-tutor.png';
// import dance from '../../../images/dance-tutor.png';
import ServiceDetail from './ServiceDetail/ServiceDetail';
import CircularProgress from '@material-ui/core/CircularProgress';

// const services = [
//     {
//         name: 'Academic Tutor',
//         img: academic
//     },
//     {
//         name: 'Music Tutor',
//         img: guitar
//     },
//     {
//         name: 'Dance Tutor',
//         img: dance
//     },
//     {
//         name: 'Computer Tutor',
//         img: computer
//     },
//     {
//         name: 'Cocking Tutor',
//         img: cock
//     }
// ]

const Services = () => {
    const [services, setServices] = useState([]);
    useEffect(()=>{
        fetch(`http://localhost:5050/services`)
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