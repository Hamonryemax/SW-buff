import React from 'react';

import './random-planet.css';

const RandomPlanet = () => {
    return (

        <div className="container-randomplanet">
            <img className="random-planet"/>
            <div className="container-infoplanet">
                <div className="label-planet">Planet Name</div>
                <ul className="info-planet">
                    <li className="population">population</li>
                    <li className="rotation-period">rotation-period</li>
                    <li className="diameter">diameter</li>
                </ul>
            </div>
        </div>

    )
}

export default RandomPlanet;