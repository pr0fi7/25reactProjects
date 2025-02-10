import Suggestions from "./suggestions";
import { useState, useEffect } from 'react';

export default function SearchAutoComplete({}) {
    const [filteredUsers, setFilteredUsers] = useState([]);
    const [query, setQuery] = useState("");


    async function fetchSuggestions() {
        const response = await fetch("https://dummyjson.com/users");
        const data = await response.json();
        const data_users = data.users
        console.log(data_users);  
        if (query.length > 0) 
            {setFilteredUsers(FilterUsers(data_users.map(user => user.firstName), query))}
        else {setFilteredUsers([])}
        console.log(filteredUsers);
    }

    function FilterUsers(users, query) {
        return users.filter(user => user.toLowerCase().startsWith(query));
    }

    useEffect(() => {
        fetchSuggestions();
    }, [query]);


    function onClick(suggestion) {
        console.log(suggestion);
    }

    return (
    <div className="search-auto-complete">
        <input type="text" placeholder="Search..." onChange={(event) => setQuery(event.target.value.toLowerCase())} />
        <Suggestions suggestions={filteredUsers} onClick={onClick} />
    </div>
    
    )


}
