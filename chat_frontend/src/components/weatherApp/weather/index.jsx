import {useState, useEffect} from 'react';
import Search from '../search';

export default function Weather() {
    const ApiKey = '9f62629eaa2b980c8fa8bec35eebefb5';
    const [query, setQuery] = useState("");
    const [weatherData, setWeatherData] = useState({});
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    async function fetchWeather(param) {
        setLoading(true);
        try {
            const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${param}&appid=${ApiKey}`);
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const data = await response.json();
            console.log(data);
            setWeatherData(data);
            setError(null); // clear previous error on successful fetch
        } catch (error) {
            console.error('Fetch error:', error);
            setError(error);
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        fetchWeather('London');
    }, []);

    function handleRequest() {
        fetchWeather(query);
    }

    function getCurrentDate() {
        const date = new Date();
        return date.toDateString();
    }

    return (
        <>
            <Search
                query={query}
                setQuery={setQuery}
                handleRequest={handleRequest}
            />
            {loading && <div>Loading...</div>}
            {error ? (
                <div>City not found, try again...</div>
            ) : weatherData.main ? (
                <>
                    <div>City: {weatherData.name}</div>
                    <div>Current date: {getCurrentDate()}</div>
                    <div>Temperature: {weatherData.main.temp}</div>
                    <div>Humidity: {weatherData.main.humidity}</div>
                    <div>Status: {weatherData.weather && weatherData.weather.length ? weatherData.weather[0].description : null}</div>
                    <div>Wind: {weatherData.wind.speed}</div>
                </>
            ) : null}
        </>
    );
}
