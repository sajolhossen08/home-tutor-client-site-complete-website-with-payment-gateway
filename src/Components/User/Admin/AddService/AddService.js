import React from 'react';
import { useContext } from 'react';
import { UserContext } from '../../../../App';

const AddService = () => {
    const [loggedInUser,setLoggedInUser,user] = useContext(UserContext);
    const handleSubmit = (evt) =>{
        evt.preventDefault();
        const clientComment = {
            name: evt.target.name.value,
            description: evt.target.description.value
        }

        fetch(`https://quiet-bastion-53490.herokuapp.com/addServices`, {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(clientComment)
        })
        .then(res => {
            if(res){
                alert("Your add service is successfully done!!!");
            }
        })
    }

    return (
        <form onSubmit={handleSubmit} className='w-50'>
            <div className="form-group">
                <input type="text" name='name' className='form-control' placeholder='Service name' required/>
            </div>
            <div className="form-group">
                <textarea name="description" cols="30" rows="6" className='form-control' placeholder='Description' required/>    
            </div>
            
            <input type="submit" className='btn btn-primary px-5' value="Submit"/>
        </form>
    );
};

export default AddService;