import React from 'react';
import HairMaster from '../HairMaster/HairMaster';

const HairSpecialist = () => {
    return (
        <section className="doctors">
            <div className="container">
                <h5 className="text-center  text-primary mb-5">Our Hair Specialist</h5>
                <div className="row">
                    <HairMaster/>
                    <HairMaster/>
                    <HairMaster/>
                </div>
            </div>
        </section>
    );
};

export default HairSpecialist;