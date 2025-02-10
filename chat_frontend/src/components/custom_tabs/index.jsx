import './styles.css';
import {useState} from "react";


export default function Tabs({tabsContent, onChange}) {
    const [activeTab, setActiveTab] = useState(0);

    function handleClick(index) {
        setActiveTab(index);
        onChange(index);
    }

    return (
        <div className="custom-tabs">
            {tabsContent && tabsContent.length > 0 ? (
                <div className="tabs">
                    {tabsContent.map((tab, index) => (
                        <div key={index} className={`tab ${index === activeTab ? 'active' : ''}`} onClick={() => handleClick(index)}>
                            {tab.title}
                            <div className='tabsContent'>
                                {index === activeTab ? tab.content: null}
                            </div>
                        </div>
                    ))}
                </div>
            ) : null}

            

        </div>

    )


}