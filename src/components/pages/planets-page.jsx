import { PlanetList } from '../sw-components/item-lists.jsx';
import { useParams, useNavigate } from 'react-router-dom';
import { PlanetDetails } from "../sw-components/details.jsx";

function PlanetsDetailsWrapper() {
    const { id } = useParams();
    return <PlanetDetails itemId={id} />;
}

function PlanetsPage() {
    const navigate = useNavigate();

    return (
        <PlanetList
            onItemSelected={(itemId) => {
                navigate(`/planets/${itemId}`);
            }}
        />
    );
}

export { PlanetsPage, PlanetsDetailsWrapper };
