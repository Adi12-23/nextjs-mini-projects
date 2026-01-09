"use client"
import { useEffect, useState } from "react";


export default function useLocalStorage(key:string,defaultValue:string){
    const [value,setValue] = useState(()=>{
        let currentValue;
        try{
            currentValue=JSON.parse(localStorage.getItem(key) || String(defaultValue));
        } catch(e){
            console.log(e);
            currentValue=defaultValue;
        }finally{
            return currentValue;
        }
    });

    useEffect(()=>{
        localStorage.setItem(key,JSON.stringify(value));
    },[key,value]);
    return [value,setValue];
}