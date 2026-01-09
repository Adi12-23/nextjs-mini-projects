"use client"

import React from "react"

interface SuggestionsProps {
    data:string[],
    handleClick:(event:React.MouseEvent<HTMLLIElement>)=>void
}
export default function Suggestions({data,handleClick}:SuggestionsProps){
    return <ul>
        {
            data && data.length ? 
            data.map((item:string,index)=><li onClick={handleClick} key={index}>
             {item}
            </li>):
            null
        }
    </ul>

}