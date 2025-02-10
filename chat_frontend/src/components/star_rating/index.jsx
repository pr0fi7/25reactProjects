import { FaStar } from "react-icons/fa";    
import { useState } from "react";
import "./styles.css";

export default function StarRating({ maxRating = 5 }) {
    const [selectedStars, setSelectedStars] = useState(0);
    const [hoveredStars, setHoveredStars] = useState(0);

    function handleClick(index) {
        setSelectedStars(index);
    }

    function handleMouseEnter(index) {
        setHoveredStars(index);
    }

    function handleMouseLeave() {
        setHoveredStars(0);
    }

    return (
        <div className="star-rating" onMouseLeave={handleMouseLeave}>
            {[...Array(maxRating)].map((_, index) => (
                <FaStar 
                    className={index < (hoveredStars || selectedStars) ? "star" : "star-empty"}
                    key={index}
                    onClick={() => handleClick(index + 1)}
                    onMouseEnter={() => handleMouseEnter(index + 1)}
                    size={50}
                />
            ))}
        </div>
    );
}
