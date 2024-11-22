import React, { useState, useEffect } from 'react';
import SwapiService from "../../services/swapi-service.js";
import './person-details.css';
import BlankWindowDetails from "../blank-window-details/blank-window-details.jsx";

const PersonDetails = ({ personId }) => {
    const swapiService = new SwapiService();
    const [person, setPerson] = useState(null);

    useEffect(() => {
        if (!personId) {
            console.log("No personId provided");
            return;
        }

        console.log("Fetching person with id:", personId);
        swapiService
            .getPerson(personId)
            .then((personData) => {
                console.log("Person data:", personData);
                setPerson(personData);
            })
            .catch((error) => {
                console.error('Error fetching person:', error);
            });
    }, [personId]);

    if (!person) {
        return <BlankWindowDetails />;
    }

    const { id, name, gender, birthYear, eyeColor } = person;

    return (
        <div className="container-person-details">
            <img
                className="person-img"
                src={`https://starwars-visualguide.com/assets/img/characters/${id}.jpg`}
                alt={name}
            />
            <div className="container-info-person">
                <ul className="info-person">
                    <div className="label-person">{name}</div>
                    <li className="info-item">
                        <span>Gender: </span>
                        <span>{gender}</span>
                    </li>
                    <li className="info-item">
                        <span>Birth Year: </span>
                        <span>{birthYear}</span>
                    </li>
                    <li className="info-item">
                        <span>Eye Color: </span>
                        <span>{eyeColor}</span>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default PersonDetails;
