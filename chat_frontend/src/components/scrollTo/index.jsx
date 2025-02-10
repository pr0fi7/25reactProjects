
import useFetch from "../useFetch/index";

import { useRef } from 'react';

export default function ScrollTo() {
    const { data, error, loading } = useFetch(
        "https://dummyjson.com/products",
        {}
      );
    console.log(data);
    const bottomRef = useRef(null);

    function GoMoveToBottom() {
        bottomRef.current.scrollIntoView({ behavior: "smooth" });
    }

    function GoMoveToTop(){
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
        
    }

    return (
        <div>
            <h1>Scroll To</h1>
            {loading && <h1>Loading...</h1>}
            {error && <h1>Error: {error}</h1>}
            <button onClick={GoMoveToBottom}>Scroll to Bottom</button>
            {data && data.products.length ?
                data.products.map((product) =>
                <p key={product.id}>
                    {product.title} 
                </p>)
                :
                null}
            <button onClick={GoMoveToTop}>Scroll to Top</button>
            <div ref={bottomRef}></div>
        </div>
    )
}