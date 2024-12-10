import React, { useState } from 'react';
import Header from '../header/header.jsx';
import RandomPlanet from '../random-planet/random-planet.jsx';
import ItemList from "../item-list/item-list.jsx";
import ItemDetails, { Record } from "../item-details/item-details.jsx";
import PeoplePage from "../people-page/people-page.jsx";
import SwapiService from "../../services/swapi-service.js";
import './app.css';


function App() {
    const swapiService = new SwapiService();
    const [selectedPerson, setSelectedPerson] = useState(null);
    const [selectedStarship, setSelectedStarship] = useState(null);

    const onPersonSelected = (id) => setSelectedPerson(id);
    const onStarshipSelected = (id) => setSelectedStarship(id);

    return (
        <div className="container">
            <Header />
            <RandomPlanet />
            <div className="container-for-panel">
                <PeoplePage />
                <ItemList
                    getData={swapiService.getAllPeople}
                    onItemSelected={onPersonSelected}
                    renderItem={(item) => item.name}
                />
                {selectedPerson && (
                    <ItemDetails
                        itemId={selectedPerson}
                        getData={swapiService.getPerson}
                        getImageUrl={swapiService.getPersonImage}
                    >
                        <Record field="gender" label="Gender" />
                        <Record field="birthYear" label="Birth Year" />
                        <Record field="eyeColor" label="Eye Color" />
                    </ItemDetails>
                )}
            </div>
            <div className="container-for-panel">
                <ItemList
                    getData={swapiService.getAllStarships}
                    onItemSelected={onStarshipSelected}
                    renderItem={(item) => item.name}
                />
                {selectedStarship && (
                    <ItemDetails
                        itemId={selectedStarship}
                        getData={swapiService.getStarship}
                        getImageUrl={swapiService.getStarshipImage}
                    >
                        <Record field="model" label="Model" />
                        <Record field="length" label="Length" />
                        <Record field="costInCredits" label="Cost" />
                    </ItemDetails>
                )}
            </div>
        </div>
    );
}

export default App;
