import React, { useEffect, useState } from 'react';
import BookingListDetails from '../BookingListDetails/BookingListDetails';
import Sidebar from '../Dashboard/Sidebar/Sidebar';

const BookingList = () => {
    const [booking,setBooking] = useState([]);
    useEffect(() => {
        fetch('https://pure-sands-23213.herokuapp.com/BookingList')
        .then((response) => response.json())
        .then(data => setBooking(data));
    },[])
    return (
        <section className="container-fluid row">
            <Sidebar></Sidebar>
            <div className="col-md-10 p-4 pr-5" style={{ position: "absolute", right: 0, backgroundColor: "#F4FDFB" }}>
                <h1>Booking List</h1>
                {
                    booking.map(book => <BookingListDetails book={book}></BookingListDetails>)
                }
            </div>

        </section>
    );
};

export default BookingList;