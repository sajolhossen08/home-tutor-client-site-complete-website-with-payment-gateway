import React, { useEffect, useState } from 'react';
import './Feedback.css';
import CircularProgress from '@material-ui/core/CircularProgress';
import ClientFeedback from './ClientFeedback';

const Feedback = () => {
    const [clients, setClients] = useState([]);
    useEffect(() =>{
        fetch(`http://localhost:5050/clientComments`)
        .then(res => res.json())
        .then(data => {
            // console.log(data);
            setClients(data);
        })
    },[])

    return (
        <section className='perfect-bg'>
            <h3 className='my-5 w-50 text-center mx-auto feedback'>Clients <span style={{color: '#007bff'}}>Feedback</span></h3>
            <div className="row w-100 my-5 justify-content-center">
                {
                    !clients.length && <div className='text-center'>
                            <CircularProgress color="dark" /> 
                            <h2 style={{color: '#007bff', }}>loading....</h2>
                        </div>
                }
                {
                    clients.map((client) => <ClientFeedback key={client._id} client={client}/>)
                }
            </div>
        </section>
    );
};

export default Feedback;