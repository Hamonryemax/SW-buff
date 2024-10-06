import React from 'react';

import './person-details.css';

const PersonDetails = () => {
    return (

        <div className="container-person-details">
            <img className="person-img"/>
            <div className="container-info-person">
                <ul className="info-person">
                    <div className="label-person">Person Name</div>
                    <li className="info-item">population</li>
                    <li className="info-item">rotation-period</li>
                    <li className="info-item">diameter</li>
                </ul>
            </div>
        </div>

    )
}

export default PersonDetails;