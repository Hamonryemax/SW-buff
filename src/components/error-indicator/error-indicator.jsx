import React from 'react';

import './error-indicator.css';

const ErrorIndicator = () => {
    return(
        <div className="error-indicator card border-warning mb-3">
            <span className="boom">BOOM!</span>
            <span className="card-text">
                something has gone terribly wrong
            </span>
            <span className="card-text">
                (but we already sent droids to fix it)
            </span>
        </div>
    );
};

export default ErrorIndicator;