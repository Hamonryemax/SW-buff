import React from 'react';
import ItemDetails, { Record } from '../item-details/item-details.jsx'
import SwapiService from "../../services/swapi-service.js";

const swapiService = new SwapiService();

const {
    getPerson,
    getPlanet,
    getStarship,
    getPersonImage,
    getPlanetImage,
    getStarshipImage,
} = swapiService;


const PersonDetails = ({ itemId }) => {
    return (
        <ItemDetails
            itemId={itemId}
            getData={getPerson}
            getImageUrl={getPersonImage}>
            <Record field="gender" label="Gender "/>
            <Record field="birthYear" label="Birth Year "/>
            <Record field="eyeColor" label="Eye Color "/>
        </ItemDetails>
    );
}

const PlanetDetails = (itemId) => {
    return (
        <ItemDetails
            itemId={itemId}
            getData={getPlanet}
            getImageUrl={getPlanetImage}>
            <Record field="gender" label="Gender "/>
            <Record field="birthYear" label="Birth Year "/>
            <Record field="eyeColor" label="Eye Color "/>
        </ItemDetails>
    );
};

const StarshipDetails = (itemId) => {
    return (
        <ItemDetails
            itemId={itemId}
            getData={getStarship}
            getImageUrl={getStarshipImage}>
            <Record field="gender" label="Gender "/>
            <Record field="birthYear" label="Birth Year "/>
            <Record field="eyeColor" label="Eye Color "/>
        </ItemDetails>
    );
};

export {
    PersonDetails,
    PlanetDetails,
    StarshipDetails,
};
