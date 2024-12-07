import React, { useState, useEffect } from 'react';
import ErrorIndicator from '../error-indicator/error-indicator.jsx';
import './item-list.css';
import SwapiService from "../../services/swapi-service.js";
import SpinnerItemList from "../spinner-item-list/spinner-item-list.jsx";

const ItemList = ({ onItemSelected }) => {
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
                console.error('Error fetching people list:', error);
                setLoading(false);
                setError(true);
            });
    }, []);

    const renderItems = (peopleList) => {
        return peopleList.slice(0, 5).map((person) => (
            <li
                className="list-group-item list-group-item-action item"
                key={person.id}
                onClick={() => onItemSelected(person.id)}
            >
                {person.name}
            </li>
        ));
    };

    if (error) {
        return <ErrorIndicator />;
    }

    return (
        <div className="container-for-item">
            {loading ? (
                <SpinnerItemList />
            ) : (
                <ul className="list-item">
                    {peopleList && renderItems(peopleList)}
                </ul>
            )}
        </div>
    );
};

export default ItemList;
