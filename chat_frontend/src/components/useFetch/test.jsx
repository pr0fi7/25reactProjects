import useFetch from "."

export default function UseFetchTest() {
    const { data, error, pending } = useFetch(
        "https://dummyjson.com/products",
        {}
      );
    console.log(data);
    return (
        <div>
            <h1>useFetch Test</h1>
            {pending && <h1>Loading...</h1>}
            {error && <h1>Error: {error}</h1>}
            {data && data.products.length ?
                data.products.map((product) =>
                <p key={product.id}>
                    {product.title} 
                </p>)
                :
                null}
        </div>
    )
}