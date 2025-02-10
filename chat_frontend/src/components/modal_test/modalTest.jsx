import { useState } from 'react';
import './styles.css';
import Modal from './index.jsx';
import { div } from 'framer-motion/client';



export default function ModalTest() {
    const [modalState, setModalState] = useState(false);

    function toggleState() {
        setModalState(!modalState);
    }

    const data = {
        body: <div>
            <h1>This is the header of the modal</h1>
            <button onClick={toggleState}>Close</button>
        </div>,
        header: "headr",
        footer: "footr"
    }

    return (
        <div>
            <button onClick={toggleState}>Toggle State</button>
            <Modal show={modalState} onClose={toggleState} body={data.body} header={data.header} footer={data.footer} />
        </div>
    )
}
