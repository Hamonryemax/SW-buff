import React, { useState } from 'react';

import './random-planet.css';

const RandomPlanet = () => {

    return (

        <div className="container-randomplanet">
            <img className="random-planet-img"/>
            <div className="container-infoplanet">
                <ul className="info-planet">
                    <div className="label-planet">Name Planet</div>
                    <li className="info-item">population</li>
                    <li className="info-item">rotation-period</li>
                    <li className="info-item">diameter</li>
                </ul>
            </div>
        </div>

    )
}

export default RandomPlanet;