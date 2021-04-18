import React from 'react';
import wilson from '../../../images/wilson.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'

const Testimonial = (props) => {
    const {describe,company,name,from ,img} = props.testimonial;
    return (
        <div className="card shadow-sm">
            <div className="card-footer d-flex  align-items-center">
                <img className="mx-3" src={wilson} alt="" width="60"/>
                <div>
                    <h6 className="text-primary">{name}</h6>
                    <p className="m-0">{company}</p>
                    <FontAwesomeIcon style={{color: 'gold'}} icon={faStar} />
                    <FontAwesomeIcon style={{color: 'gold'}} icon={faStar} />
                    <FontAwesomeIcon style={{color: 'gold'}} icon={faStar} />
                    <FontAwesomeIcon style={{color: 'gold'}} icon={faStar} />


                </div>
            </div>
            <div className="card-body">
                <p className="card-text text-center">{describe}</p>
            </div>
            
       </div>
    );
};

export default Testimonial;