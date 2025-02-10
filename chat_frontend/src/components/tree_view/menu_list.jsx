import MenuItem from "./menu_item";

export default function MenuList({ list = [] }) {
    return (
        <ul className="menu-list">
            {
                list && list.length > 0 
                ? list.map((listItem) => (
                    <MenuItem key={listItem.label} item={listItem} />
                ))
                : <p>No items available</p>
            }
        </ul>
    );
}
