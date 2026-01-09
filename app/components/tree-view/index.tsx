"use client"
import menulist from "./data";
import MenuList from "./menu-list"
import "./styles.css";
export default function TreeView(){

    return <div className="tree-view-container">
        <MenuList list={menulist} />
    </div>
}