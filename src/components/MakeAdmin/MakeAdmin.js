import React from 'react';
import Sidebar from '../Dashboard/Sidebar/Sidebar';

const MakeAdmin = () => {
    return (
        <section className="container-fluid row">
            <Sidebar></Sidebar>
            <div className="col-md-10 p-4 pr-5" style={{ position: "absolute", right: 0, backgroundColor: "#F4FDFB" }}>
            <input type="email" name="email" placeholder="Enter your email" id=""/>
            <button className="btn btn-primary">Add Admin</button>
            </div>
        </section>
    );
};

export default MakeAdmin;