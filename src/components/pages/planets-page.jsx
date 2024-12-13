import React, {useState} from "react";
import { PlanetList } from '../sw-components/item-lists.jsx';
import { PlanetDetails } from '../sw-components/details.jsx';


export function PlanetsPage() {
    const [selectedPlanet, setSelectedPlanet] = useState(null);
    const onPlanetSelected = (id) => setSelectedPlanet(id);

    return(
        <div className="container-for-panel">
            <PlanetList onItemSelected={onPlanetSelected}/>
            <PlanetDetails itemId={selectedPlanet}/>
        </div>
    )
}