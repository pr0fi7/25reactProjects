import { useEffect } from "react";
import { useState } from "react";
import "./styles.css";

export default function LoadMoreData() {
    const [items, setItems] = useState([]);
    const [allowLoadMore, setAllowLoadMore] = useState(true);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [count, setCount] = useState(0);

    useEffect(() => {
        fetchItems();
    }, [count]);

    async function fetchItems() {
        try {
            setLoading(true);

            const response = await fetch(
                `https://dummyjson.com/products?limit=20&skip=${
                  count === 0 ? 0 : count * 20
                }`
              );

            const new_data = await response.json();
            const new_products = new_data.products;
            const data = [...items, ...new_products];


            if (data) {
                setItems(data);
                setLoading(false);
            }


        }
        catch (error) {}
    }


    useEffect(() => {
        if (items.length === 40) {
            setAllowLoadMore(false);
        } else {
            setAllowLoadMore(true);
        }
    }, [items]);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error.message}</p>;


    
    return (
        <div className="loadmore_container">
            <div className="products_container">
            {items && items.length > 0 ? items.map((item, index) => (
                <div key={index} className="item">
                    <img src={item.thumbnail} alt="" />
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>
                </div>
            ))
            : <p>No items found</p>    
        } 
        </div>
        <button 
  className={`loadmore_button ${allowLoadMore ? "" : "disabled"}`} 
  disabled={!allowLoadMore} 
  onClick={() => setCount(count + 1)}
>
  Load more Items
</button>
        </div>
    );
}