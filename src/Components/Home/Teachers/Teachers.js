import React from 'react';
import Farhan from '../../../images/Ellipse 1.png';
import Obonti from '../../../images/Ellipse 2.png';
import Jesia from '../../../images/Ellipse 3.png';
import Teacher from './Teacher/Teacher';


const Teachers = () => {
    const teachers=[
        {
            name: 'Farhan Ahmed',
            img: Farhan,
            experience: '3 years'
        },
        {
            name: 'Obonti Saha',
            img: Obonti,
            experience: '2 years'
        },
        {
            name: 'Jesia Patel',
            img: Jesia,
            experience: '5 years'
        }
    ]
    return (
        <section className="w-100 container text-center mt-3 mb-3">
             <h2>Here are some of <span style={{color: '#007bff'}}>our Tutors</span></h2>
             <div className="row justify-content-center">
                {
                    teachers.map(teacher => <Teacher teacher = {teacher} key = {teacher.name}></Teacher>)
                }
            </div>
        </section>
    );
};

export default Teachers;