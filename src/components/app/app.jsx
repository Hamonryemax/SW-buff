import React from 'react';
import Header from '../header/header.jsx';
import RandomPlanet from '../random-planet/random-planet.jsx';
import ErrorBoundary from "../error-boundry/error-boundry.jsx";
import { PeoplePage, PlanetsPage, StarshipsPage } from "../pages";
import { SwapiServiceProvider } from "../swapi-service-context/swapi-service-context.jsx";
import SwapiService from "../../services/swapi-service.js";

import './app.css';

function App() {
    const swapiService = new SwapiService();


    return (
        <ErrorBoundary>
            <SwapiServiceProvider value={swapiService}>
                <div className="container">
                    <Header />
                    <RandomPlanet />
                    <PeoplePage />
                    <PlanetsPage />
                    <StarshipsPage />
                </div>
            </SwapiServiceProvider>
        </ErrorBoundary>
    );
}

export default App;
