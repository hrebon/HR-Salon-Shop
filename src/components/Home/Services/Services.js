import React, { useEffect, useState } from 'react';
import ServiceDetail from '../ServiceDetail/ServiceDetail';



const Services = () => {
    const [service, setService] = useState([]);
    useEffect(() =>{
        fetch('https://pure-sands-23213.herokuapp.com/service')
        .then(response => response.json())
        .then(data => setService(data));
    },[])
    return (
        <section className="services-container mt-5">
            <div className="text-center">
                <h5 style={{color: 'gray'}}>OUR SERVICES</h5>
                <h2>Services We Provide</h2>
            </div>
            <div className="d-flex justify-content-center">
            <div className="w-75 row mt-5 pt-5">
                {
                    service.map(service => <ServiceDetail service={service} key={service.id}></ServiceDetail>)
                }
            </div>
        </div>
        </section>
    );
};

export default Services;