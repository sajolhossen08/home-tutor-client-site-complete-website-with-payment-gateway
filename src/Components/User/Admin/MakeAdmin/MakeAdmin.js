import React, { useRef } from 'react';

const MakeAdmin = () => {

    const nameRef = useRef();
    const handleSubmit = (evt) => {
        evt.preventDefault();
        console.log('Admin Added');
        const admin = {
            title: 'Admin',
            email: evt.target.email.value,
            img: 'https://image.freepik.com/free-photo/happy-young-man-using-laptop-computer_171337-19581.jpg'
        }
        const confirmation = window.confirm(`Are you sure to make ${admin.email} email user as an admin???`);
        if(confirmation){
            fetch('http://localhost:5050/addAdmin', {
                method: "POST",
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify(admin)
            })
            .then(data => {
                console.log(data);
                if(data){
                    nameRef.current.value = "";
                }
            })
        }
    }
    return (
        <div>
            <div className="card w-75 border-info p-3">
                   <h4 className='font-weight-normal my-3'>Email</h4>
                   <form onSubmit={handleSubmit} className='w-100 mb-5'>
                       <div className="form-group w-100 form-inline justify-content-start">
                            <input ref={nameRef} type="text" className='form-control w-50 mr-3' name='email' placeholder="Enter Your Email" required/>
                            <input type="submit" className="btn btn-primary" value="Login"/>
                       </div>
                   </form>
               </div>
        </div>
    );
};

export default MakeAdmin;