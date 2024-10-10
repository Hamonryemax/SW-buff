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

    if (loading) {
        return <Spinner />;
    }

    return (
        <div>
            <ul className="list-item">
                {peopleList.map((person) => (
                    <li key={person.id} className="list-group-item list-group-item-action item">
                        {person.name}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default ItemList;
