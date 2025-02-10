import { useState, useEffect } from 'react';
import data from './data';
import './accordions.css';

export default function Accordian() {
    const [selected, setSelected] = useState(null);
    const [multipleSelection, setMultipleSelection] = useState(false);
    const [selections, setSelections] = useState([]);

    function changeMultipleSelection() {
        multipleSelection ? setMultipleSelection(false) : setMultipleSelection(true);
        selections && setSelections([]); // Clear selections when multiple selection is turned off
        selected && setSelected(null); // Clear selected when multiple selection is turned off
        console.log("Current state of multiple selection:", multipleSelection);
    }

    function getCurrentID(id) {
        setSelected(id === selected ? null : id);
    }
    function appendSelection(id) {
        if(selections.includes(id)) {
            const newSelections = selections.filter(selection => selection !== id);  // if the id is already in the selections array, remove it
            setSelections(newSelections); // update the selections array with the new array
        } else {
            setSelections([...selections, id]); // add the id to the selections array if it is not already in the array
        }
    }
    
    useEffect(() => {
        console.log('Selected ID:', selected);
    }, [selected]);

    console.log(selected);


    return (
      <div className='container'>
        <h1>Accordions</h1>
        <button onClick={()=>changeMultipleSelection()} className='multiple_selection'>Multiple selection</button>
        <div className='wrapper'>
            { data && data.length > 0 ? 
            data.map(dataItem => 
                <div key={dataItem.id} className="question">
                    <div onClick={()=>multipleSelection ? appendSelection(dataItem.id) : getCurrentID(dataItem.id)} className='header'>
                        <h3>{dataItem.question}</h3>
                    </div>
                    <span className='+'>
                        +
                    </span>
                    <div className='answer'>
                        {!multipleSelection ? selected === dataItem.id ?
                        <div className='content'>
                            {dataItem.answer}
                        </div>
                        :
                        null: selections.includes(dataItem.id) ? 
                        <div className='content'>
                            {dataItem.answer}
                        </div>
                        :
                        null
}
                    </div>
                </div>
            )
            :
            <div>
                No data found
            </div>
        }
        </div>
      </div>
    );
}