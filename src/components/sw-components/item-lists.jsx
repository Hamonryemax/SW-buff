import React from 'react';
import ItemList from "../item-list/item-list.jsx";
import { withSwapiService } from './use-data.jsx';


const PersonList = withSwapiService(
    ({ swapiService, onItemSelected }) => (
        <ItemList
            getData={swapiService.getAllPeople}
            onItemSelected={onItemSelected}
            renderItem={(i) => i.name}
        />
    )
);

const PlanetList = withSwapiService(
    ({ swapiService, onItemSelected }) => (
        <ItemList
            getData={swapiService.getAllPlanets}
            onItemSelected={onItemSelected}
            renderItem={(i) => i.name}
        />
    )
);

const StarshipList = withSwapiService(
    ({ swapiService, onItemSelected }) => (
        <ItemList
            getData={swapiService.getAllStarships}
            onItemSelected={onItemSelected}
            renderItem={(i) => i.name}
        />
    )
);

export {
    PersonList,
    StarshipList,
    PlanetList,
};
