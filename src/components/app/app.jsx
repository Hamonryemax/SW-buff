import React from 'react';
import Header from '../header/header.jsx';
import RandomPlanet from '../random-planet/random-planet.jsx';
import ErrorBoundary from "../error-boundry/error-boundry.jsx";
import { PeoplePage, PlanetsPage, StarshipsPage } from "../pages";
import { SwapiServiceProvider } from "../swapi-service-context/swapi-service-context.jsx";
import SwapiService from "../../services/swapi-service.js";

import './app.css';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
    const swapiService = new SwapiService();


    return (
        <ErrorBoundary>
            <SwapiServiceProvider value={swapiService}>
                <Router>
                    <div className="container">
                        <Header />
                        <RandomPlanet />
                        <Routes>
                            <Route path="/people" element={<PeoplePage />} />
                            <Route path="/planets" element={<PlanetsPage />} />
                            <Route path="/starships" element={<StarshipsPage />} />
                        </Routes>
                    </div>
                </Router>
            </SwapiServiceProvider>
        </ErrorBoundary>
    );
}

export default App;
