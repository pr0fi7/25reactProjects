import {useRef, useState} from 'react';

import useOutsideClick from '.';

export default function TestOutsideClick() {
    const [showContent, setShowContent] = useState(false);
    const ref = useRef();
    useOutsideClick(ref, () => setShowContent(false));

    return (
        <div>
            <button onClick={() => setShowContent(!showContent)}>Toggle Content</button>
            {showContent && (
                <div ref={ref} style={{border: '1px solid black', padding: '10px'}}>
                    Click outside of this box to close it
                </div>
            )}
        </div>
    );
}
