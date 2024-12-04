import React, { useState, useEffect } from 'react';
import './people-page.css';
import ItemList from "../item-list/item-list.jsx";
import PersonDetails from "../person-details/person-details.jsx";

const PeoplePage = () => {
    const [selectedPerson, setSelectedPerson] = useState(null);
    const onPersonSelected = (id) => {
        setSelectedPerson(id);
    };

    return (
        <div className="container-for-panel">
            <ItemList onItemSelected={onPersonSelected} />
            <PersonDetails personId={selectedPerson} />
        </div>
    );
};

export default PeoplePage;
