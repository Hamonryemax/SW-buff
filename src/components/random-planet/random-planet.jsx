import React from 'react';

import './random-planet.css';

const RandomPlanet = () => {
    return (

        <div className="container-randomplanet">
            <img className="random-planet-img"/>
            <div className="container-infoplanet">
                <ul className="info-planet">
                    <div className="label-planet">Planet Name</div>
                    <li className="info-item">population</li>
                    <li className="info-item">rotation-period</li>
                    <li className="info-item">diameter</li>
                </ul>
            </div>
        </div>

    )
}

export default RandomPlanet;