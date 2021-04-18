import React from 'react';
import './AdminServiceList.css';
import { useEffect } from 'react';
import { useState } from 'react';
import fakeService from '../../../FakeService/FakeService';
import CircularProgress from '@material-ui/core/CircularProgress';

const AdminServiceList = () => {
    const [clientServices, setClientServices] = useState([]);
    const statuses = fakeService;
    const [newStatus, setNewStatus] = useState({});
    useEffect(() =>{
        fetch(`http://localhost:5050/clients`)
        .then(res => res.json())
        .then(data => {
            setClientServices(data);
        })
    },[newStatus])

    const handleChangeStatus = (evt) =>{
        evt.preventDefault();
        const targetAction = evt.target.value;
        const targetStyle = statuses.find(status => status.name === targetAction); 
        const id = evt.target.id;
        fetch(`http://localhost:5050/clients/${id}`,{
            method: "PATCH",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({action: targetStyle.name,actionColor: targetStyle.style.color, actionBG: targetStyle.style.background})
        })
        .then(res => res.json())
        .then(data => {
            if(data){
                const curStatus = {...newStatus};
                curStatus.action = targetStyle.name;
                curStatus.actionBG = targetStyle.actionBG;
                curStatus.actionColor = targetStyle.actionColor;
                setNewStatus(curStatus);
            }
        })
        .catch(err => console.log(err))

    }
    return (
        <div className='bg-white rounded p-2 table-form'>
            {
                !clientServices.length ? <div className='text-center my-5'>
                            <CircularProgress color="dark" />
                            <h2 style={{color: '#007bff', }}>loading....</h2>
                        </div>
            
            : <table className="table table-borderless">
                <thead className='bg-light'>
                    <tr>
                        <th className="text-secondary" scope="col">Name</th>
                        <th className="text-secondary" scope="col">Email Id</th>
                        <th className="text-secondary" scope="col">Service</th>
                        <th className="text-secondary" scope="col">Project Details</th>
                        <th className="text-secondary" scope="col">Status</th>
                    </tr>
                </thead>
                <tbody>
                {
                  clientServices.map((clientService) => <tr key={clientService._id}>
                        <td>{clientService.name}</td>
                        <td>{clientService.email}</td>
                        <td>{clientService.projectTitle}</td>
                        <td>{clientService.projectDetails}</td>
                        <td>
                            <div className='btn btn-outline-info' style={{background: clientService.actionBG, color: clientService.actionColor}}><select onChange={handleChangeStatus} style={{background: clientService.actionBG, color: clientService.actionColor,border: 'none',outline: 'none'}}  id={clientService._id}name="status">
                                <option style={{background: clientService.actionBG, color: clientService.actionColor}} value={clientService.action}>{clientService.action}</option>

                                <option style={{color: '#FF4545',background:'#FFE3E3'}} value="Pending">Pending</option>

                                <option style={{color: '#FFBD3E',background:'#FFEDA9'}} value="On going">On going</option>

                                <option style={{color: '#009444', background: '#C6FFE0'}} value="Done">Done</option>
                            </select></div>
                        </td>
                    </tr>
                    )
                }
            </tbody>
        </table>
        }
    </div>
    );
};

export default AdminServiceList;