

import WindowResizeHook from ".";

export default function WindowResizeTest(){
    const windowSize = WindowResizeHook();
    const {width, height} = windowSize;

    return (
        <div>
            <h1>Window Size</h1>
            <p>Width: {width}</p>
            <p>Height: {height}</p>
        </div>
    )
}