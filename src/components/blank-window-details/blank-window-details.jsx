import './blank-window-details.css';

const BlankWindowDetails = () => {

    return (
        <div className="container-person-details">
            <img className="person-image" alt={'name'}/>
            <div className="container-info-person">
                <ul className="info-person">
                    <div className="label-person">Name</div>
                    <li className="info-item">
                        <span>Gender </span>
                        <span></span>
                    </li>
                    <li className="info-item">
                        <span>Birth Year </span>
                        <span></span>
                    </li>
                    <li className="info-item">
                        <span>Eye Color </span>
                        <span></span>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default BlankWindowDetails;
