

export default function Profile({profile}) {
    return (
        <div className="profile">
            <img src={profile.avatar_url} alt="Avatar" />
            <a href={`https://github.com/${profile.login}`}>{profile.login || profile.name}</a>        
            <p>Number of repos: {profile.public_repos}</p>
        </div>
    )
}