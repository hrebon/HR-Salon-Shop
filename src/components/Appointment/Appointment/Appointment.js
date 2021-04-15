import React from 'react';
import Footer from '../../Home/Footer/Footer';
import Navbar from '../../Home/Navbar/Navbar';
import AppointmentHeader from '../AppointmentHeader/AppointmentHeader';

const Appointment = () => {
    return (
        <div>
            <Navbar></Navbar>
            <AppointmentHeader></AppointmentHeader>
            <Footer></Footer>
        </div>
    );
};

export default Appointment;