import React, { useState, useEffect } from 'react';
import './item-details.css';
import BlankWindowDetails from "../blank-window-details/blank-window-details.jsx";

const Record = ({ item, field, label }) => {
    return (
        <li className="info-item">
            <span>{label}</span>
            <span>{item[field]}</span>
        </li>
    );
};

export { Record };

const ItemDetails = ({ itemId, getData, getImageUrl, children }) => {
    const [item, setItem] = useState(null);
    const [image, setImage] = useState(null);

    useEffect(() => {
        if (!itemId) {
            setItem(null);
            setImage(null);
            return;
        }

        getData(itemId)
            .then((itemData) => {
                setItem(itemData);
                const imageUrl = getImageUrl({ id: itemId });
                setImage(imageUrl);
            })
            .catch((error) => {
                console.error('Error fetching item:', error);
                setItem(null);
                setImage(null);
            });
    }, [itemId, getData, getImageUrl]);

    if (!item) {
        return <BlankWindowDetails />;
    }

    const { name } = item;

    return (
        <div className="container-person-details">
            <img
                className="person-img"
                src={image}
                alt={name || 'item'}
            />
            <div className="container-info-person">
                <ul className="info-person">
                    <div className="label-person">{name}</div>
                    {React.Children.map(children, (child) =>
                        React.cloneElement(child, { item })
                    )}
                </ul>
            </div>
        </div>
    );
};

export default ItemDetails;
