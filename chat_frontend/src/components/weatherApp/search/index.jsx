

export default function Search({query, setQuery, handleRequest}) {

    return (
        <>
        <input type="text"
        placeholder="Type your city" 
        name="search"
        value={query}
        onChange={(event) => setQuery(event.target.value)}
        className="search-bar"
        />
        <button onClick={handleRequest} className="search-button">Search</button>
        </>
    )
}