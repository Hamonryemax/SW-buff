import React, { useState } from 'react';
import Header from '../header/header.jsx';
import RandomPlanet from '../random-planet/random-planet.jsx';
import ItemList from "../item-list/item-list.jsx";
import PersonDetails from "../person-details/person-details.jsx";
import './app.css';

function App() {
    const [selectedPerson, setSelectedPerson] = useState(null);

    const onPersonSelected = (id) => {
        console.log("Selected person ID:", id);
        setSelectedPerson(id); // Обновляем состояние с правильным `id`
    };

    return (
        <div className="container">
            <Header />
            <RandomPlanet />
            <div className="container-for-panel">
                <ItemList onItemSelected={onPersonSelected} />
                <PersonDetails personId={selectedPerson} />
            </div>
        </div>
    );
}

export default App;
