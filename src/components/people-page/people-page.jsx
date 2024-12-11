import React, { useState } from 'react';
import ItemList from "../item-list/item-list.jsx";
import ItemDetails from "../item-details/item-details.jsx";
import SwapiService from "../../services/swapi-service.js";

import './people-page.css';

const PeoplePage = () => {
    const swapiService = new SwapiService();
    const [selectedPerson, setSelectedPerson] = useState(null);
    const onPersonSelected = (id) => {
        setSelectedPerson(id);
    };

    const itemList = (
        <ItemList
            onItemSelected={onPersonSelected}
            getData={swapiService.getAllPeople}
            renderItem={(i) => i.name} />
    );

    const personDetails = (
        <ItemDetails personId={selectedPerson} />
    );

    return (
        <div className="container-for-panel">
            {itemList}
            {personDetails}
        </div>
    );
};

export default PeoplePage;
