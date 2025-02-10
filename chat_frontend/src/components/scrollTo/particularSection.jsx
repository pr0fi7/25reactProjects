import React, { useRef } from "react";

export default function ParticularSection() {

    const currentRef = useRef(null);

    const sections = [
        {
            name: "section1",
            style: {
                backgroundColor: "red",
                height: "600px",
                width: "100%",
            },
        },
        {
            name: "section2",
            style: {
                backgroundColor: "blue",
                height: "600px",
                width: "100%",
            },
        },
        {
            name: "section3",
            style: {
                backgroundColor: "green",
                height: "600px",
                width: "100%",
            },
        },
        {
            name: "section4",
            style: {
                backgroundColor: "yellow",
                height: "600px",
                width: "100%",
            },
        },
    ]

    function goTo() {
        
        currentRef.current.scrollIntoView({
            behavior: "smooth",
            block: "start",
            });
        }

    return (
        <div>
            <button onClick={goTo}>Go to section 3</button>
            {sections.map((section, index) => {
                return (
                    <div key={section.name} style={section.style} ref={index === 2 ? currentRef : null}>
                        <h1>{section.name}</h1>
                    </div>
                );
            })}
        </div>
    );
}