// import { useState } from 'react'
import Header from '../header/header.jsx';
import RandomPlanet from '../random-planet/random-planet.jsx';
import ItemList from "../item-list/item-list.jsx";
import PersonDetails from "../person-details/person-details.jsx";

import './app.css'

function App() {

    return (
        <>
            <div className="container">
                <Header />
                <RandomPlanet />
                <ItemList />
                <PersonDetails />
            </div>
        </>
    )
}

export default App
