import React, { useEffect, useState } from 'react';
import Testimonial from '../Testimonial/Testimonial';
import './Testimonials.css';




const Testimonials = () => {

    const [testimonial, setTestimonial] = useState([]);
    useEffect(() => {
        fetch('https://pure-sands-23213.herokuapp.com/review')
        .then((response) => response.json())
        .then(data =>setTestimonial(data));
    },[])

    return (
       <section className="testimonials my-5 py-5">
           <div className="container">
               <div className="section-header">
                   <h5 className="text-primary text-uppercase text-center">Testimonial</h5>
                   
               </div>
               <div className="card-deck mt-5">
                    {
                        testimonial.map(testimonial => <Testimonial testimonial={testimonial} key={testimonial.name}/>)
                    }
                </div>
           </div>
       </section>
    );
};

export default Testimonials;