import React from 'react';
import { useContext } from 'react';
import { UserContext } from '../../../../App';
import uploadIcon from '../../../../images/upload.png';

const AddService = () => {
    const [loggedInUser,setLoggedInUser,user] = useContext(UserContext);
    const handleSubmit = (evt) => {
        evt.preventDefault();
        console.log(evt.target.file.files[0])
        const formData = new FormData();
        formData.append('adminEmail', user.email);
        formData.append('title', evt.target.title.value)
        formData.append('description', evt.target.description.value)
        formData.append('file', evt.target.file.files[0])
        fetch('http://localhost:5050/addServices', {
            method: 'POST',
            body: formData
        })
        .then(response => response.json())
        .then(data => {
            console.log(data);
            alert('Welcome!!! Your Project Is Uploaded Successfully');
        })
        .catch(error => {
            console.error(error,loggedInUser,setLoggedInUser)
        })
    }

    return (
        <div>
            <form onSubmit={handleSubmit} className='w-100 card p-5 m-2' id='useForm'>
                <div className="row">
                    <div className="form-group col-md-7">
                        <label className='font-weight-bold'>Service Title</label>
                        <input type="text" name='title' className="form-control mr-1" placeholder="Enter title" required/>
                    </div>
                    <div className="form-group col-md-3">
                        <label className='font-weight-bold'>Service icon</label>
                        <input type="file" name="file" id="upload-file" required/>
                        <label className='btn btn-warning form-control ml-1' id="upload-label" htmlFor="upload-file" title='Upload image'><img style={{height: '30px'}} src={uploadIcon} alt=""/></label>
                    </div>
                </div>
                <div className="row">
                    <div className="form-group col-md-7">
                        <label className='font-weight-bold'>Description</label>
                        <textarea name="description" cols="30" rows="5" className='form-control' placeholder='Enter Description' required/>    
                    </div>
                </div>
            </form>
            <div className="d-flex justify-sm-content-start justify-content-end">
                <button type='submit' form='useForm' className='btn btn-primary'>Submit</button>
            </div>
        </div>
    );
};

export default AddService;