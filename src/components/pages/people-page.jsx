import React, {useState} from "react";
import { PersonList } from '../sw-components/item-lists.jsx';
import { PersonDetails } from '../sw-components/details.jsx';


export function PeoplePage() {
    const [selectedPerson, setSelectedPerson] = useState(null);
    const onPersonSelected = (id) => setSelectedPerson(id);

    return(
        <div className="container-for-panel">
            <PersonList onItemSelected={onPersonSelected}/>
            <PersonDetails itemId={selectedPerson}/>
        </div>
    )
}