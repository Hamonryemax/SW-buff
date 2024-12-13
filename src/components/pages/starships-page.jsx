import React, {useState} from "react";
import { StarshipList } from '../sw-components/item-lists.jsx';
import { StarshipDetails } from '../sw-components/details.jsx';


export function StarshipsPage() {
    const [selectedStarship, setSelectedStarship] = useState(null);
    const onStarshipSelected = (id) => setSelectedStarship(id);

    return (
        <div className="container-for-panel">
            <StarshipList onItemSelected={onStarshipSelected}/>
            <StarshipDetails itemId={selectedStarship}/>
        </div>
    )
}
