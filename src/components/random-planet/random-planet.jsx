import React, { useState, useEffect } from 'react';
import Spinner from '../spinner/spinner.jsx'

import SwapiService from "../../services/swapi-service.js";

import './random-planet.css';

const RandomPlanet = () => {

    const swapiService = new SwapiService();

    const [id, setId] = useState(null);
    const [name, setName] = useState('Planet');
    const [population, setPopulation] = useState(null);
    const [rotationPeriod, setRotationPeriod] = useState(null);
    const [diameter, setDiameter] = useState(null);
    const [loading, setLoading] = useState(true);

    const updatePlanet = ()=> {
        setLoading(true);
        const id = Math.floor(Math.random()*20) + 2;
        swapiService.getPlanet(id)
            .then((planet) => {
                setId(id);
                setName(planet.name);
                setPopulation(planet.population);
                setRotationPeriod(planet.rotation_period);
                setDiameter(planet.diameter);
                setLoading(false);
            });
    };

    useEffect(() => {
        updatePlanet();
    }, []);

    if (loading) {
        return <Spinner />;
    }

    return (
        <div className="container-randomplanet">
            <img className="random-planet-img" alt="Planet"
                src={`https://starwars-visualguide.com/assets/img/planets/${id}.jpg`}/>
            <div className="container-infoplanet">
                <ul className="info-planet">
                    <div className="label-planet">{name}</div>
                    <li className="info-item">
                        <span className="term">Population: </span>
                        <span>{population}</span>
                    </li>
                    <li className="info-item">
                        <span className="term">Rotation Period: </span>
                        <span>{rotationPeriod}</span>
                    </li>
                    <li className="info-item">
                        <span className="term">Diameter: </span>
                        <span>{diameter}</span>
                    </li>
                </ul>
            </div>
        </div>

    )
}

export default RandomPlanet;