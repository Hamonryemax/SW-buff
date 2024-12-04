import React, { useState } from 'react';
import Header from '../header/header.jsx';
import RandomPlanet from '../random-planet/random-planet.jsx';
import ItemList from "../item-list/item-list.jsx";
import PersonDetails from "../person-details/person-details.jsx";
import './app.css';
import PeoplePage from "../people-page/people-page.jsx";

function App() {
    // const [selectedPerson, setSelectedPerson] = useState(null);
    //
    // const onPersonSelected = (id) => {
    //     setSelectedPerson(id);
    // };

    return (
        <div className="container">
            <Header />
            <RandomPlanet />
            <PeoplePage />
        </div>
    );
}

export default App;
