import React from 'react';
import Contact from './Contact/Contact';
import Feedback from './Feedback/Feedback';
import Footer from './Footer/Footer';
import Header from './Header/Header';
import Pricing from './Pricing/Pricing';
import Services from './Services/Services';
import Teachers from './Teachers/Teachers';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Services></Services>
            <Teachers></Teachers>
            <Pricing></Pricing>
            <Feedback></Feedback>
            <Contact></Contact>
            <Footer></Footer>
        </div>
    );
};

export default Home;