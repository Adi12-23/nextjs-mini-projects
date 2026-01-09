import { useState } from "react";
import MenuList from "./menu-list";
import { FaPlus,FaMinus } from "react-icons/fa";
import "./styles.css";
type NavItem = {
  label: string;
  to: string;
  children?: NavItem[];
};
type MenuItemProps ={
  item:NavItem
}
export default function MenuItem({item}:MenuItemProps){
    const [displayCurrentChildren,setDisplayCurrentChildren]=useState<Record<string, boolean>>({});
    function handleToggleChildren(getCurrentLabel:string){
      setDisplayCurrentChildren({
        ...displayCurrentChildren,
        [getCurrentLabel] : !displayCurrentChildren[getCurrentLabel]
      })
    }
    return(<li >
      <div className="menu-item-container">
      <p>{item.label}</p>
      {
        item && item.children && item.children.length >0 ?<span onClick={()=>handleToggleChildren(item.label)}>
          {
            displayCurrentChildren[item.label]?<FaMinus color="#fff" size={25} />:<FaPlus color="#fff" size={25} />
          }
        </span>:null
      }
      </div>
      {
        item && item.children && item.children.length >0 && displayCurrentChildren[item.label]?<MenuList list={item.children} />:null
      }
    </li>)
}