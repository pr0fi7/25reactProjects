import MenuList from './menu_list';
import './styles.css';

export default function TreeView({menus=[]}){
    return (
        <div className="tree-view">
            <MenuList list={menus} />
        </div>
    );
    
}