import React, { useState } from 'react';
import Header from '../header/header.jsx';
import RandomPlanet from '../random-planet/random-planet.jsx';
import ErrorBoundary from "../error-boundry/error-boundry.jsx";
import { PlanetList, StarshipList, PersonList } from '../sw-components/item-lists.jsx';
import { PersonDetails, PlanetDetails, StarshipDetails } from '../sw-components/details.jsx';
import { SwapiServiceProvider } from "../swapi-service-context/swapi-service-context.jsx";
import SwapiService from "../../services/swapi-service.js";

import './app.css';

function App() {
    const swapiService = new SwapiService();
    const [selectedPerson, setSelectedPerson] = useState(null);
    const [selectedStarship, setSelectedStarship] = useState(null);
    const [selectedPlanet, setSelectedPlanet] = useState(null);

    const onPersonSelected = (id) => setSelectedPerson(id);
    const onStarshipSelected = (id) => setSelectedStarship(id);
    const onPlanetSelected = (id) => setSelectedPlanet(id);

    return (
        <ErrorBoundary>
            <SwapiServiceProvider value={swapiService}>
                <div className="container">
                    <Header />
                    <RandomPlanet />
                    <div className="container-for-panel">
                        <PersonList onItemSelected={onPersonSelected} />
                        <PersonDetails itemId={selectedPerson} />
                    </div>
                    <div className="container-for-panel">
                        <PlanetList onItemSelected={onPlanetSelected} />
                        <PlanetDetails itemId={selectedPlanet} />
                    </div>
                    <div className="container-for-panel">
                        <StarshipList onItemSelected={onStarshipSelected} />
                        <StarshipDetails itemId={selectedStarship} />
                    </div>
                </div>
            </SwapiServiceProvider>
        </ErrorBoundary>
    );
}

export default App;
