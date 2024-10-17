import React, { useState, useEffect } from 'react';
import Spinner from '../spinner/spinner.jsx';

import './item-list.css';
import SwapiService from "../../services/swapi-service.js";

const ItemList = () => {
    const swapiService = new SwapiService();

    // Состояния для списка персонажей и загрузки
    const [peopleList, setPeopleList] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        swapiService
            .getAllPeople()
            .then((peopleList) => {
                setPeopleList(peopleList);
                setLoading(false);
            })
            .catch((error) => {
                console.error('Error fetching people:', error);
                setLoading(false);
            });
    }, []);


    return (
        <div className="container-for-item">
            { loading ? <Spinner/> :
            <ul className="list-item">
                {peopleList.map((person, index) => (
                    <li key={index} className="list-group-item list-group-item-action item">
                        {person.name}
                    </li>
                ))}
            </ul>
            }
        </div>
    );
}

export default ItemList;
