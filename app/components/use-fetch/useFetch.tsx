"use client"

import { useEffect, useState } from "react";

interface useFetchProps {
    url:string;
    options?:RequestInit;
}

export default function useFetch<T=unknown>({url,options={}}:useFetchProps){
    const[data,setData]=useState<T | null>(null);
    const[loading,setLoading]=useState(false);
    const[error,setError]=useState<string | null>(null);

    async function fetchData(){
        try{
         setLoading(true);
         const response=await fetch(url,{...options})
         if(!response.ok) throw new Error(response.statusText);
         const result = await response.json();
         setData(result)
         setError(null);
        } catch(err){
            if(err instanceof Error) setError(`Error: ${err.message}`);
            else setError("Something went wrong")
        }finally{
            setLoading(false);
        }
    }

    useEffect(()=>{
    fetchData()
    },[url]);

    return {data,error,loading};
}