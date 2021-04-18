import React from 'react';

const ManageServiceDetails = (props) => {
    const {description, img,service,_id} = props.manage;
    return (
        <div>
            <h1>{description}</h1>
            <table>
                <tr>
                    <th>Description</th>
                    <th>Service</th>
                </tr>
            </table>
        </div>
    );
};

export default ManageServiceDetails;