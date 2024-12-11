import React, { useState } from 'react';
import Header from '../header/header.jsx';
import RandomPlanet from '../random-planet/random-planet.jsx';
import { PlanetList, StarshipList, PersonList } from '../sw-components/item-lists.jsx';
import { PersonDetails, PlanetDetails, StarshipDetails } from '../sw-components/details.jsx'
import './app.css';


function App() {

    const [selectedPerson, setSelectedPerson] = useState(null);
    const [selectedStarship, setSelectedStarship] = useState(null);
    const [selectedPlanet, setSelectedPlanet] = useState(null);

    const onPersonSelected = (id) => setSelectedPerson(id);
    const onStarshipSelected = (id) => setSelectedStarship(id);
    const onPlanetSelected = (id) => setSelectedPlanet(id);

    return (
        <div className="container">
            <Header/>
            <RandomPlanet/>
            <div className="container-for-panel">
                <PersonList onItemSelected={onPersonSelected}/>
                <PersonDetails itemId={11}/>
            </div>
            <div className="container-for-panel">
                <PlanetList onItemSelected={onPlanetSelected}/>
                <PlanetDetails itemId={5}/>
            </div>
            <div className="container-for-panel">
                <StarshipList onItemSelected={onStarshipSelected}/>
                <StarshipDetails itemId={9}/>
            </div>
        </div>
    )
        ;
}

export default App;
