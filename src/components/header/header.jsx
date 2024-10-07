import React from 'react';

import './header.css';

const Header = () => {
    return (
        <div className="header">
            <ul className="nav nav-tabs">
                <li className="nav-label">
                    <a className="nav-label-link">SWbuff</a>
                </li>
                <div className="container-btn">
                    <li className="nav-item">
                        <a className="nav-link" href="#">People</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Planets</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Starships</a>
                    </li>
                </div>
            </ul>
        </div>
    )
}

export default Header;