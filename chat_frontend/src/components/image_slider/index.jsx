import {useState, useEffect } from "react";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";
import "./styles.css";


export default function ImageSlider({ url, page, limit }) {
    const [currentImage, setCurrentImage] = useState(0);
    const [images, setImages] = useState([]);
    const [loading, setLoading] = useState(true); // loading state
    const [error, setError] = useState(null); // error state

    useEffect(() => {
        if (url !== "") fetchImages(url);
    }, [url]);

    async function fetchImages(url) {
        try {

            setLoading(true);

            const response = await fetch(`${url}?page=${page}&limit=${limit}`);
            const data = await response.json();

            if (data) {
                setImages(data);
                setLoading(false);
                console.log(data);
            }
        }
        catch (error) {
            setError(error);
            setLoading(false);
        }
    }

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error.message}</p>;


    function handleRightClick() {
        if (currentImage < images.length - 1) {
            setCurrentImage(currentImage + 1);
        } else {
            setCurrentImage(0);
        }
    }

    function handleLeftClick() {
        if (currentImage > 0) {
            setCurrentImage(currentImage - 1);
        } else {
            setCurrentImage(images.length - 1);
        }
    }

    return (
        <div className="container">
            <div className="image_slider">
                <BsArrowLeftCircleFill onClick={handleLeftClick} 
                        className="arrow arrow-left"
/>   
                {images && images.length > 0 ? images.map((image, index) => {
                   return <img src={image.download_url} alt={image.download_url} className={currentImage === index ? "myImage": 'inactive'} key={index} />
                }) : null}
                <BsArrowRightCircleFill onClick={handleRightClick} 
                        className="arrow arrow-right"
/>
                <span className="textCounter">{currentImage + 1} / {images.length}</span>
                <span className="imageIndicator">
                    {images && images.length > 0 ? 
                        images.map((image, index) => {
                            return <button className={currentImage===index ? 'buttonIndicator active': 'buttonIndicator button_inactive'} key={index} onClick={() => setCurrentImage(index)}></button>
                        }) : null
                    }
                </span>
            </div>
        </div>
    )

}