import React, { useContext } from 'react';
import ItemDetails, { Record } from '../item-details/item-details.jsx';
import SwapiServiceContext from "../swapi-service-context/swapi-service-context.jsx";

const PersonDetails = ({ itemId }) => {
    const swapiService = useContext(SwapiServiceContext);
    const { getPerson, getPersonImage } = swapiService;

    return (
        <ItemDetails
            itemId={itemId}
            getData={getPerson}
            getImageUrl={getPersonImage}>
            <Record field="gender" label="Gender" />
            <Record field="birthYear" label="Birth Year" />
            <Record field="eyeColor" label="Eye Color" />
        </ItemDetails>
    );
};

const PlanetDetails = ({ itemId }) => {
    const swapiService = useContext(SwapiServiceContext);
    const { getPlanet, getPlanetImage } = swapiService;

    return (
        <ItemDetails
            itemId={itemId}
            getData={getPlanet}
            getImageUrl={getPlanetImage}>
            <Record field="population" label="Population" />
            <Record field="rotationPeriod" label="Rotation Period" />
            <Record field="diameter" label="Diameter" />
        </ItemDetails>
    );
};

const StarshipDetails = ({ itemId }) => {
    const swapiService = useContext(SwapiServiceContext);
    const { getStarship, getStarshipImage } = swapiService;

    return (
        <ItemDetails
            itemId={itemId}
            getData={getStarship}
            getImageUrl={getStarshipImage}>
            <Record field="model" label="Model" />
            <Record field="length" label="Length" />
            <Record field="costInCredits" label="Cost" />
        </ItemDetails>
    );
};

export {
    PersonDetails,
    PlanetDetails,
    StarshipDetails,
}