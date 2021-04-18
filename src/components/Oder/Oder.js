import React, { useEffect, useState } from 'react';
import Sidebar from '../Dashboard/Sidebar/Sidebar';
import './Oder.css';
const Oder = () => {
    const [store, setStore] = useState([]);
    useEffect(() => {
        fetch('https://pure-sands-23213.herokuapp.com/BookingList')
        .then((response) => response.json())
        .then(data => setStore(data));
    },[])
    return (
        <section className="container-fluid row">
            <Sidebar></Sidebar>
            <div className="col-md-10 p-4 pr-5" style={{ position: "absolute", right: 0, backgroundColor: "#F4FDFB" }}>
            <h1>Oder List</h1>
            <table>
                <tr className="head">
                    <th>Name</th>
                    <th>Email</th>
                    <th>Service</th>
                    <th>Pay with</th>
                    <th>Status</th>
                </tr>
            {
                store.map(str=> (
                    <tr>
                        <th>Habibur</th>
                        <th>habibebon90@gmail.com</th>
                        <th>{str[0].service}</th>
                        <th>Credit Card</th>
                        <th>Pending</th>
                    </tr>
                ))
            }
            </table>
            
            </div>
        </section>
    );
};

export default Oder;