import { Link } from 'react-router-dom';

import './header.css';

const Header = () => {
    return (
        <div className="header">
            <ul className="nav nav-tabs">
                <li className="nav-label">
                    <Link className="nav-label-link" to="/">SWbuff</Link>
                </li>
                <div className="container-btn">
                    <li className="nav-item">
                        <Link className="nav-link" to="/people">People</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/planets">Planets</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/starships">Starships</Link>
                    </li>
                </div>
            </ul>
        </div>
    )
}

export default Header;