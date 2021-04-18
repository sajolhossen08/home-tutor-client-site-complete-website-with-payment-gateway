import React from 'react';
import './Footer.css';
import FooterCol from './FooterCol/FooterCol';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram, faGooglePlusG } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
    const noNamed = [
        {name: "lorem epsam" , link: "/emergency"},
        {name: "lorem epsam" , link: "/checkup"},
        {name: "Personal" , link: "/personal-treatment"},
        {name: "lorem epsam" , link: "/tooth-extract"}
    ]
    const ourAddress = [
        {name: "New York - 101010" , link: "//google.com/map"},
        {name: "Yards" , link: "//google.com/map"},
       
    ]
    const quickLinks = [
        {name: "Home" , link: "/home"},
        {name: "Request Tutor" , link: "/request-tutor"},
        {name: "Premium Tutors" , link: "/premium-tutors"},
        {name: "FAQ" , link: "/faq"}
    ]
    const services = [
        {name: "Academic tutor" , link: "/academic"},
        {name: "Music tutor" , link: "/music"},
        {name: "Dance tutor" , link: "/dance"},
        {name: "Computer tutor" , link: "/computer"}
    ]
    return (
        <footer className="footer-area clear-both">
            <div className="container pt-5">
                <div className="row py-5">
                    <FooterCol key={1} menuTitle="Academic" menuItems={noNamed}/>
                    <FooterCol key={2} menuTitle="Services" menuItems={services}/>
                    <FooterCol key={3} menuTitle="Quick links" menuItems={quickLinks}/>
                    <FooterCol key={4} menuTitle="Our Address" menuItems={ourAddress}> 
                        <ul className="social-media list-inline">
                            <li className="list-inline-item"><a href="//facebook.com"><FontAwesomeIcon className="icon active-icon" icon={faFacebookF} /></a></li>
                            <li className="list-inline-item"><a href="//google.com"><FontAwesomeIcon className="icon" icon={faGooglePlusG} /></a></li>
                            <li className="list-inline-item"><a href="//instagram.com"><FontAwesomeIcon className="icon" icon={faInstagram} /></a></li>
                        </ul>
                        <div className="mt-5">
                            <h6>Call now</h6>
                            <button className="btn btn-primary">+202505145</button>
                        </div>
                    </FooterCol>
                </div>
                <div className="copyRight text-center">
                    <p>Copyright {(new Date()).getFullYear()} All Rights Reserved</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;