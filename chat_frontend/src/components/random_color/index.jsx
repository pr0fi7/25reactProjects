import { useState, useEffect } from "react";

export default function RandomColor() {
    const [hexColor, setHexColor] = useState("#000000");
    const [rgbColor, setRgbColor] = useState("rgb(0,0,0)");
    const [type, setType] = useState(true);

    let hexValues = ["0","1","2","3","4","5","6","7","8","9","A","B","C","D","E","F"];

    function updateHexColor() {
        let hex = "#";
        for (let i = 0; i < 6; i++) {
            hex += hexValues[Math.floor(Math.random()*hexValues.length)];
        }
        setHexColor(hex);
        setType(true);
    }

    function updateRGBColor() {
        let rgb = `rgb(${Math.floor(Math.random()*256)},${Math.floor(Math.random()*256)},${Math.floor(Math.random()*256)})`;
        setRgbColor(rgb);
        setType(false);
    }

    useEffect(() => {
        console.log("Updated Hex Color:", hexColor);
        console.log("Updated RGB Color:", rgbColor);
    }, [hexColor, rgbColor]); // Logs when the state updates

    return (
        <div className="random-color" style={{ backgroundColor: type ? hexColor : rgbColor, height: "100vh", textAlign: "center" }}>
            <button onClick={updateHexColor} className="hexColor">Generate HEX color</button>
            <button onClick={updateRGBColor} className="rgbColor">Generate RGB color</button>
            
            <div className="color-box" style={{
                backgroundColor: type ? hexColor : rgbColor,
                width: "200px",
                height: "200px",
                margin: "20px auto",
                border: "2px solid black"
            }}>
            </div>

            <div className="color-code" style={{
                color: "#fff", 
                fontSize: "20px", 
                padding: "10px"
            }}>
                Current color: {type ? hexColor : rgbColor}
            </div>
        </div>
    );
}
