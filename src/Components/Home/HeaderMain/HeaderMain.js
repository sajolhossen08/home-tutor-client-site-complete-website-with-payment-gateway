import React from 'react';
import frontTutor from '../../../images/front-tutor.jpg'
import './HeaderMain.css'

const HeaderMain = () => {
    return (
        <main style={{height:'500px'}}  className="row d-flex align-items-center">
            <div className="col-md-4 offset-md-1">
                <h1 className="text-white">Your Tutors <br/> Are Here </h1>
                <p className="text-black">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum quam tempora placeat dicta officia, molestiae necessitatibus beatae delenit.</p>
                <button className="btn btn-primary mb-2">
                    HIRE TUTOR
                </button>
            </div>
            <div className="col-md-6">
                <img src={frontTutor} alt="..." className="img-fluid rounded front-tutor-img"/>
            </div>
        </main>
    );
};

export default HeaderMain;