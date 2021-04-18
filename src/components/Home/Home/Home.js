import React from 'react';
import FeaturedService from '../FeaturedService/FeaturedService';
import Testimonials from '../Testimonials/Testimonials';
import Header from '../Header/Header';
import Services from '../Services/Services';
import Contact from '../Contact/Contact';
import Footer from '../Footer/Footer';
import HairSpecialist from '../HairSpecialist/HairSpecialist';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Services></Services>
            <FeaturedService></FeaturedService>
            <Testimonials></Testimonials>
            <HairSpecialist></HairSpecialist>
            <Contact></Contact>
            <Footer></Footer>
        </div>
    );
};

export default Home;