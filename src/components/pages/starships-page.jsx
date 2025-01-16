import { StarshipList } from '../sw-components/item-lists.jsx';
import { useParams, useNavigate } from 'react-router-dom';
import { StarshipDetails } from "../sw-components/details.jsx";

function StarshipDetailsWrapper() {
    const { id } = useParams();
    return <StarshipDetails itemId={id} />;
}

function StarshipsPage() {
    const navigate = useNavigate();

    return (
        <StarshipList
            onItemSelected={(itemId) => {
                navigate(`/starships/${itemId}`);
            }}
        />
    );
}

export { StarshipsPage, StarshipDetailsWrapper };
