import React, { useState, useEffect } from 'react';
import SwapiService from "../../services/swapi-service.js";
import './item-details.css';
import BlankWindowDetails from "../blank-window-details/blank-window-details.jsx";

const ItemDetails = ({ itemId, getData, getImageUrl }) => {
    const swapiService = new SwapiService();
    const [item, setItem] = useState(null);
    const [image, setImage] = useState(null);



    useEffect(() => {
        if (!itemId) {
            setItem(null);
            return;
        }

        getData(itemId)
            .then((itemData) => {
                setItem(itemData);
                setImage(getImageUrl({ id: itemId }));
            })
            .catch((error) => {
                console.error('Error fetching item:', error);
                setItem(null)
            });
    }, [itemId, getData, getImageUrl]);

    if (!item) {
        return <BlankWindowDetails />;
    }

    const { name, gender, birthYear, eyeColor } = item;

    return (
        <div className="container-person-details">
            <img
                className="person-img"
                src={image}
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

export default ItemDetails;
