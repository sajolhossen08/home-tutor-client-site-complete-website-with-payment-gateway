import React from 'react';
import './Teacher.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhoneAlt } from '@fortawesome/free-solid-svg-icons';

const Teacher = ({teacher}) => {

    return (
        <div className="col-md-3 text-center teacher p-2 m-2 tutor-card">
            <img className="img-fluid mb-3" src={teacher.img} alt=""/>
            <h4>{teacher.name}</h4>
            <h6>Experience: {teacher.experience}</h6>
            <p>Qualification: Lorem ipsum dolor sit amet. samet. </p>
            <p> <FontAwesomeIcon className="text-primary" icon={faPhoneAlt}/> +880-1----55</p>
        </div>
    );
};

export default Teacher;