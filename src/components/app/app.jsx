import React, { useState } from 'react';
import Header from '../header/header.jsx';
import RandomPlanet from '../random-planet/random-planet.jsx';
import ItemList from "../item-list/item-list.jsx";
import ItemDetails from "../item-details/item-details.jsx";
import PeoplePage from "../people-page/people-page.jsx";
import SwapiService from "../../services/swapi-service.js";

import './app.css';

function App() {
    const swapiService = new SwapiService();
    const [selectedPerson, setSelectedPerson] = useState(null);

    const onPersonSelected = (id) => {
        setSelectedPerson(id);
    };

    const { getPerson,
            getStarship,
            getPersonImage,
            getStarshipImage } = swapiService;

    const personDetails = (
        <ItemDetails
            itemId={11}
            getData={getPerson}
            getImageUrl={getPersonImage}/>
    );

    const starshipDetails = (
        <ItemDetails
            itemId={9}
            getData={getStarship}
            getImageUrl={getStarshipImage}/>
    );

    return (
        <div className="container">
            <Header/>
            <RandomPlanet/>
            <PeoplePage/>
            <div className="container-for-panel">
                <ItemList
                    onItemSelected={onPersonSelected}
                    getData={swapiService.getAllPlanets}
                    renderItem={(item) => item.name}/>
                {personDetails}
            </div>
            <div className="container-for-panel">
                <ItemList
                    onItemSelected={onPersonSelected}
                    getData={swapiService.getAllStarships}
                    renderItem={(item) => item.name}/>
                {starshipDetails}
            </div>
        </div>
    );
}

export default App;
