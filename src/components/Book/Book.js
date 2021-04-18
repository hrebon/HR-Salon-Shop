import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { UserContext } from '../../App';
import Sidebar from '../Dashboard/Sidebar/Sidebar';
import ProcessPayment from '../ProcessPayment/ProcessPayment';

const Book = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const info = {...loggedInUser};
    const {id} = useParams();
    const [oder,setOder] = useState([]);
    useEffect(() =>{
        fetch(`https://pure-sands-23213.herokuapp.com/service/${id}`)
        .then(response => response.json())
        .then(data => setOder(data));
    },[])

    
    const handleService = () =>{
        let service = {...oder}
        fetch('https://pure-sands-23213.herokuapp.com/addBookingList',{
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(service)
        })
        alert("Your service has been Booked")
    }
    
    
    
    return (
        <section className="container-fluid row">
            <Sidebar></Sidebar>
            <div className="col-md-10 p-4 pr-5" style={{ position: "absolute", right: 0, backgroundColor: "#F4FDFB" }}>
                <h1>Book</h1>
                <table>
                    <tr>
                    <input
            name="name"
            defaultValue={loggedInUser.name}
            placeholder="Your Name"
          />
                    </tr>
                    <tr>
                    <br/>
                    <input
            name="email"
            defaultValue={loggedInUser.email}
            placeholder="Your Email"
          />
                    <br/>
                    <br/>
                    </tr>
                    <tr>
                        {
                            oder.map(od => <th><br/><input
                                name="email"
                                defaultValue={od.service}
                                placeholder="Your service"
                              /></th>)
                        }
                    </tr>
                    <tr>
                        <th>
                            <button onClick={handleService} class="btn btn-primary">Booked</button>
                        </th>
                    </tr>
                </table>
                <ProcessPayment></ProcessPayment>

            </div>
            
        </section>
         
    );
};

export default Book;