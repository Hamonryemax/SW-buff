import { useState, useEffect } from 'react';

const useData = (getData) => {
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

export default useData;
