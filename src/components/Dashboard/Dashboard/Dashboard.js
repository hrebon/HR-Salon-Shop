import React from 'react';
import DashboardDetails from '../../DashboardDetails/DashboardDetails';
import Sidebar from '../Sidebar/Sidebar';
import massage from '../../../images/bodymassage.jpg'
import massage2 from '../../../images/Facial.jpg'
import massage3 from '../../../images/headmassage.jpg'

const serviceData = [
    {
        name: 'Body Massage',
        img: massage
    },
    {
        name: 'Head Massage',
        img: massage3
    },
    {
        name: 'Facial',
        img: massage2
    }
]

const Dashboard = () => {
    return (
        <section className="container-fluid row">
            <Sidebar></Sidebar>
            <div className="col-md-10 p-4 pr-5" style={{ position: "absolute", right: 0, backgroundColor: "lightgray" }}>
            
            <h1>HR-Salon Special Service Here</h1>
            {
                serviceData.map(data => <DashboardDetails data={data}></DashboardDetails>)
            }

            </div>
        </section>
    );
};

export default Dashboard;