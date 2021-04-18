import React, { useEffect, useState } from 'react';
import Sidebar from '../Dashboard/Sidebar/Sidebar';

const ManageService = () => {
    const [manage, setManage] = useState([]);
    useEffect(() =>{
        fetch('https://pure-sands-23213.herokuapp.com/service')
        .then(response => response.json())
        .then(data => setManage(data));
    },[])

    const handleDelete = (id) =>{
        const url = `https://pure-sands-23213.herokuapp.com/service/${id._id}`;
        fetch(url,{
            method: 'DELETE',
        }).then(res =>{
            window.location.reload();
        })
    }

    return (
        <section className="container-fluid row">
            <Sidebar></Sidebar>
            <div className="col-md-10 p-4 pr-5" style={{ position: "absolute", right: 0, backgroundColor: "#F4FDFB" }}>
                <h1>Manage Your service</h1>
                <table>
                    <tr>
                        <th>Service Name</th>
                        <th>Description</th>
                        <th>Action</th>
                    </tr>
                </table>
                {
                    manage.map(({service,description,_id}) =>(
                        <tr>
                            <th>{service}</th>
                            <th>{description}</th>
                            <th>
                                <button onClick={() => handleDelete({_id})} className="btn btn-danger">Deleted</button>
                            </th>
                        </tr>
                    ))
                }
            </div>
        </section>
    );
};

export default ManageService;