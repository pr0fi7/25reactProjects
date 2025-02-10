


export default function Suggestions({suggestions, onClick}) {
    return (
        <div className="suggestionContainer">
            {suggestions.map((suggestion, index)=>
                <div key={index} className="suggestion" onClick={()=>onClick(suggestion)}>
                    {suggestion}
                </div>
            )    
        }    

        </div>
    )
}