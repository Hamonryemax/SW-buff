import React from 'react';
import SpinnerItemList from "../spinner-item-list/spinner-item-list.jsx";
import ErrorIndicator from '../error-indicator/error-indicator.jsx';
import useData from '../sw-components/use-data.jsx';
import './item-list.css'

const ItemList = ({ onItemSelected, getData, renderItem }) => {
    const { data, loading, error } = useData(getData);

    if (error) {
        return <ErrorIndicator />;
    }

    if (loading) {
        return <SpinnerItemList />;
    }

    const renderItems = (items) => {
        return items.map((item) => {
            const { id } = item;
            const label = renderItem(item);

            return (
                <li
                    key={id}
                    className="list-group-item list-group-item-action item"
                    onClick={() => onItemSelected(id)}
                >
                    {label}
                </li>
            );
        });
    };

    return (
        <div className="container-for-item">
            <ul className="list-item">{renderItems(data)}</ul>;
        </div>
    )
};

export default ItemList;
