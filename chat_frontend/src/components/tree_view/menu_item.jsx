import MenuList from "./menu_list";
import { useState } from "react";

export default function MenuItem({ item }) {
    const [displayCurrentChildren, setDisplayCurrentChildren] = useState({});

    function handleClick(currentItem) {
        setDisplayCurrentChildren({
            ...displayCurrentChildren,
            [currentItem] : !displayCurrentChildren[currentItem]
        });
    }   


    return (
        <li className="menu-item">
            <p>{item.label}</p>

            {item && item.children && item.children.length > 0 ? (
            <span className="toggleChildren" onClick={() => handleClick(item.label)}>
                {displayCurrentChildren[item.label] ? "-" : "+"}
            </span>
            ) : null}
    
            {item && item.children && item.children.length > 0 && displayCurrentChildren[item.label] ? (
                <MenuList list={item.children} />
            ) : null}   

        </li>
    );
}