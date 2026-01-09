"use client"

import useWindowResize from "./useWindowResize";


export default function UseWindowResizeComponent(){
    const {width,height}=useWindowResize(); 

    return(
        <div>
            <h1>Use Window Resize Hook</h1>
            <div>Width is {width}</div>
            <div>Height is {height}</div>
        </div>
    );
}

