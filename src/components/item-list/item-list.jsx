import React, { useState, useEffect } from 'react';
import Spinner from '../spinner/spinner.jsx';
import ErrorIndicator from '../error-indicator/error-indicator.jsx';

import './item-list.css';
import SwapiService from "../../services/swapi-service.js";

const ItemList = () => {
    const swapiService = new SwapiService();

    const [peopleList, setPeopleList] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    useEffect(() => {
        swapiService
            .getAllPeople()
            .then((peopleList) => {
                setPeopleList(peopleList);
                setLoading(false);
            })
            .catch((error) => {
                setLoading(false);
                setError(true);
            });
    }, []);

    const renderItems = (peopleList) => {
        return peopleList.map((person, index) => {
            return (
                <li
                    className="list-group-item list-group-item-action item"
                    key={index}
                    onClick={() => console.log(person.name)}>
                    {person.name}
                </li>
            );
        });
    }

    if (error) {
        return <ErrorIndicator />;
    }

    return (
        <div className="container-for-item">
            {loading ? (
                <Spinner />
            ) : (
                <ul className="list-item">
                    {renderItems(peopleList)}
                </ul>
            )}
        </div>
    );
}

export default ItemList;
