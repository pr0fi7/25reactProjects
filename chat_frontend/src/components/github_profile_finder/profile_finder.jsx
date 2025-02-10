import { useState, useEffect } from 'react';
import './styles.css';
import Profile from './profile';

export default function ProfileFinder() {
    const [username, setUsername] = useState('pr0fi7');
    const [loading, setLoading] = useState(false);
    const [profile, setProfile] = useState({});
    

    async function fetchGithubProfile() {
        setLoading(true);
        const response = await fetch(`https://api.github.com/users/${username}`);
        const data = await response.json();
        setProfile(data);
        console.log(data);
        setLoading(false);
        setUsername = '';
    }

    useEffect(() => {
        fetchGithubProfile();
    }, []);

    return (
        <div className="profile-finder">
            <input type="text" placeholder='Type the name' value = {username} onChange={(e) => setUsername(e.target.value)} />
            <button onClick={fetchGithubProfile}>Fetch</button>
        <Profile profile={profile} />
        </div>

        

    );

}
