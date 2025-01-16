import { PersonList } from '../sw-components/item-lists.jsx';
import { useParams, useNavigate } from 'react-router-dom';
import { PersonDetails } from "../sw-components/details.jsx";

function PeopleDetailsWrapper() {
    const { id } = useParams();
    return <PersonDetails itemId={id} />;
}

function PeoplePage() {
    const navigate = useNavigate();

    return (
        <PersonList
            onItemSelected={(itemId) => {
                navigate(`/people/${itemId}`);
            }}
        />
    );
}

export { PeoplePage, PeopleDetailsWrapper };
