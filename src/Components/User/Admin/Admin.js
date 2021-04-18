import React, { useState } from 'react';
import { faHdd, faLocationArrow, faPlus, faUserPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useHistory } from 'react-router-dom';
import AdminServiceList from './AdminServiceList/AdminServiceList';
import AddService from './AddService/AddService';
import MakeAdmin from './MakeAdmin/MakeAdmin';

const Admin = ({setLoggedInUser,setUser}) => {
    const history = useHistory();
    const [serviceList, setServiceList] = useState(true);
    const [addService, setAddService] = useState(false);
    const [makeAdmin, setMakeAdmin] = useState(false);
    const handleClick = (logic) =>{
        if(logic === 'serviceList'){
            setServiceList(true);
            setAddService(false);
            setMakeAdmin(false)

        }else if(logic === 'addService'){
            setServiceList(false);
            setAddService(true);
            setMakeAdmin(false)

        }else{
            setServiceList(false);
            setAddService(false);
            setMakeAdmin(true)
        }
    }
    const handleSignOut = () =>{
        setLoggedInUser({});
        setUser({});
        history.replace('/');
    } 
    return (
        <section className='container-fluid m-0'>
            <div className="row">
                <div className="col-md-2 my-5">
                    <p onClick={() => handleClick('serviceList')} style={{color: serviceList ? '#007bff': 'black', cursor: 'pointer'}}><FontAwesomeIcon icon={faHdd}/> Service list</p>
                    <p onClick={() => handleClick('addService')} style={{color: addService ? '#007bff': 'black', cursor: 'pointer'}}><FontAwesomeIcon icon={faPlus}/> Add Service</p>
                    <p onClick={() => handleClick('makeAdmin')} style={{color: makeAdmin ? '#007bff': 'black', cursor: 'pointer'}}><FontAwesomeIcon icon={faUserPlus}/> Make Admin</p>
                    <p onClick={() => handleSignOut()} className="text-danger" style={{cursor: 'pointer'}}><FontAwesomeIcon icon={faLocationArrow}/> Sign out</p>
                </div>
                <div className="col-md-10 user-maintain">
                <div className="row justify-content-between">
                    <div className="col-md-6 text-md-left text-sm-center text-xs-center">
                        {
                            serviceList && <h3>Service List</h3>
                        }
                        {
                            addService && <h3> Add Services</h3>
                        }
                        {
                            makeAdmin && <h3> Make Admin</h3>
                        }
                    </div>
                    <div className="col-md-6 text-md-right text-sm-center text-xs-center text-danger">
                        <h3>Admin</h3>
                    </div>
                </div>
                    <div className="jumbotron w-100 m-0">
                        {
                            serviceList && <AdminServiceList/>
                        }
                        {
                            addService && <AddService/>
                        }
                        {
                            makeAdmin && <MakeAdmin/>
                        }
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Admin;