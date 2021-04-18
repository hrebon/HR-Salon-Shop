import React from 'react';

const BookingListDetails = (props) => {
    const {service,image,description} = props.book[0];
    console.log(props.book[0])

    return (
        <div className='card col-md-6 '>
            <img style={{height: '100px', width: '100px'}} src={`data:image/png;base64,${image.img}`} alt="" />
            <h5 className="mt-3 mb-3">{service}</h5>
            <p className="text-secondary">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam, quaerat?</p>
        </div>
    );
};

export default BookingListDetails;