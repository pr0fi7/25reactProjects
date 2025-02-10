import {useState, useEffect} from "react";
import './styles.css';

export default function ScrollIndicator() {
    const [allData, setData] = useState([]);
    const [loading, setLoading] = useState(false);   
    const [scrolled_percentage, setScrolledPercentage] = useState(0);
    
    function handleScroll() {

        let percentages = (document.documentElement.scrollTop / (document.documentElement.scrollHeight - document.documentElement.clientHeight)) * 100;
        console.log(percentages);
        setScrolledPercentage(percentages);
    }


    async function fetchdata(){
        setLoading(true);
        const response = await fetch("https://dummyjson.com/products?limit=100");
        const data = await response.json();
        setData(    
            ...allData,
            data.products);
        setLoading(false);
    }

    useEffect(() => {
        fetchdata();
        console.log(allData);
    }, []);

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        }
    }, []);



    return (
        <div className="scroll-indicator">
            <div className="indicator">
                <p>Scroll Indicator</p>
                <div className="progress_bar" style={{width: `${scrolled_percentage}%`}}></div>
                {allData && allData.length > 0 ? (
                    <ul>
                        {allData.map((item) => (
                            <li key={item.id}>{item.title}</li>
                        ))}
                    </ul>
                ) : null}
        
            </div>
        </div>
    );
}