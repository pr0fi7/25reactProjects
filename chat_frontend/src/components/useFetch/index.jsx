import { useState, useEffect } from 'react';


export default function useFetch(url) {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    async function fetchUrl(url) {
        try {
            setLoading(true);
            const response = await fetch(url);
            if (!response.ok) {
                throw new Error({error: response.statusText});
            }
            const data = await response.json();
            setData(data);
            setLoading(false);
            setError(null);
        }
        catch (error) {
            setError(error);
            setLoading(false);
        }
    }

    useEffect(() => {
        fetchUrl(url);
    }, [url]);

    return {data, loading, error};
}