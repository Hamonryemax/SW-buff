import Header from '../header/header.jsx';
import RandomPlanet from '../random-planet/random-planet.jsx';
import ErrorBoundary from "../error-boundry/error-boundry.jsx";
import { StarshipsPage, StarshipDetailsWrapper } from "../pages/starships-page.jsx"
import { PeoplePage, PeopleDetailsWrapper } from "../pages/people-page.jsx"
import { PlanetsPage, PlanetsDetailsWrapper } from "../pages/planets-page.jsx"
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
                            <Route path="/" element={<h1>Hello world</h1>} />
                            <Route path="/people" element={<PeoplePage />} />
                            <Route path="/people/:id" element={<PeopleDetailsWrapper />} />
                            <Route path="/planets" element={<PlanetsPage />} />
                            <Route path="/planets/:id" element={<PlanetsDetailsWrapper />} />
                            <Route path="/starships" element={<StarshipsPage />} />
                            <Route path="/starships/:id" element={<StarshipDetailsWrapper />} />
                        </Routes>
                    </div>
                </Router>
            </SwapiServiceProvider>
        </ErrorBoundary>
    );
}

export default App;
