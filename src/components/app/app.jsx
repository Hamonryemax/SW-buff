import { useState } from 'react'
import Header from '../header/header.jsx';
import RandomPlanet from '../random-planet/random-planet.jsx';
import './app.css'

function App() {

    return (
        <>
            <div className="container">
                <Header />
                <RandomPlanet />
            </div>
        </>
    )
}

export default App
