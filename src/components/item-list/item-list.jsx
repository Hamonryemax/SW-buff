import React, { useState, useEffect } from 'react';
import ErrorIndicator from '../error-indicator/error-indicator.jsx';
import './item-list.css';
import SpinnerItemList from "../spinner-item-list/spinner-item-list.jsx";

const ItemList = ({ onItemSelected, getData, renderItem }) => {
    const [itemList, setItemList] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    useEffect(() => {
        getData()
            .then((itemList) => {
                setItemList(itemList);
                setLoading(false);
            })
            .catch((error) => {
                console.error('Error fetching item list:', error);
                setLoading(false);
                setError(true);
            });
    }, [getData]);

    const renderItems = (arr) => {
        return arr.slice(0, 5).map((item) => {
            const { id } = item;
            const label = renderItem(item);

            return (
                <li
                    className="list-group-item list-group-item-action item"
                    key={id}
                    onClick={() => onItemSelected(id)}
                >
                    {label}
                </li>
            );
        });
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
                    {itemList && renderItems(itemList)}
                </ul>
            )}
        </div>
    );
};

export default ItemList;
