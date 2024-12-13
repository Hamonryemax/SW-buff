import {useState, useEffect, useContext} from 'react';
import React from 'react';
import SwapiServiceContext from "../swapi-service-context/swapi-service-context.jsx";

export const withSwapiService = (WrappedComponent) => {
    return (props) => {
        const swapiService = useContext(SwapiServiceContext);

        return <WrappedComponent {...props} swapiService={swapiService} />;
    };
};

export const useData = (getData) => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    useEffect(() => {
        setLoading(true);
        setError(false);

        getData()
            .then((data) => {
                setData(data);
                setLoading(false);
            })
            .catch(() => {
                setError(true);
                setLoading(false);
            });
    }, [getData]);

    return { data, loading, error };
};