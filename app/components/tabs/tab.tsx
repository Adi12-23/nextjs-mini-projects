"use client"
import { useState } from "react"
interface tabItem {
    label:string,
    content:React.ReactElement
}
interface TabsProps {
    tabsContent:tabItem[],
    onChange:Function
}
export default function Tabs({tabsContent,onChange}:TabsProps){
    const [currentTabIndex,setCurrentTabIndex] = useState(0);

    function handleOnClick(getCurrentIndex:number){
           setCurrentTabIndex(getCurrentIndex);
           onChange(getCurrentIndex)
    }
    return(<div className="wrapper">
    <div className="heading">
    {
        tabsContent.map((tabItem,index)=><div className={`tab-item ${currentTabIndex === index ? "active":""}`} key={tabItem.label} onClick={()=>handleOnClick(index)}>
            <span className="label">
                {tabItem.label}
            </span>
        </div>)
    }
    </div>
    <div className="content" style={{color:"aquamarine"}}>
        {
        tabsContent[currentTabIndex] && tabsContent[currentTabIndex].content
        }
    </div>

    </div>)
}