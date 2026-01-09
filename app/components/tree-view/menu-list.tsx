import MenuItem from "./menu-item";
import "./styles.css"
type NavItem = {
  label: string;
  to: string;
  children?: NavItem[];
};
type MenuListProps = {
  list?: NavItem[];
};
export default function MenuList({list=[]}:MenuListProps){
    return(<ul className="menu-list-container" >
    {
        list && list.length ?
        list.map((listItem,index)=> <MenuItem key={index} item={listItem} />):null
    }
    </ul>)
}