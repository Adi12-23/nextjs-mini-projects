"use client";
import { useEffect, useState } from "react";

export default function RandomColor() {
  const [typeOfColor, setTypeOfColor] = useState("rgb");
  const [color, setColor] = useState("rgb(0,0,0)");

  function handleCreateRandomHexColor() {
    const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
    let hexColor = "#";
    for (let i = 0; i < 6; i++) {
      hexColor += hex[Math.floor(Math.random() * hex.length)];
    }
    console.log(hexColor);
    setColor(hexColor);
  }
  function handleCreateRandomRgbColor() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    const newColor = `rgb(${r}, ${g}, ${b})`;
    setColor(newColor);
    console.log(color);
  }

  useEffect(()=>{
    if(typeOfColor === "rgb") handleCreateRandomRgbColor();
    else handleCreateRandomHexColor();
  },[typeOfColor]);

  return (
    <>
      <div
        style={{
          width: "100vw",
          height: "100vh",
          background: color,
        }}
      >
        <div className="flex justify-center">
          <button
            onClick={() => setTypeOfColor("hex")}
            className="bg-white text-black-500 m-1 p-1 rounded-md font-bold border-solid border-sky-500 border-4 text-sm bg-blue-500 
  shadow-md 
  active:shadow-sm 
  active:translate-y-[1px] 
  transition-all"
          >
            Create Hex Color
          </button>
          <button
            onClick={() => setTypeOfColor("rgb")}
            className="text-sm border-4 bg-white text-black-500 m-1 p-1 rounded-md font-bold border-solid border-sky-500 bg-blue-500 active:bg-blue-600 transition-colors active:text-gray-200"
          >
            Create RGB Color
          </button>
          <button
            onClick={
              typeOfColor === "rgb"
                ? handleCreateRandomRgbColor
                : handleCreateRandomHexColor
            }
            className="border-4 bg-white text-black-500
m-1 rounded-md font-bold p-1 border-solid border-sky-500 text-sm transition-transform duration-100 active:translate-y-[1px] active:scale-95"
          >
            Generate Random Color
          </button>
        </div>
        <div style={{
            display:"flex",
            flexDirection:"column",
            justifyContent:"center",
            alignItems:"center",
            color:"#ffffff",
            fontSize:"60px",
            marginTop:"50px",
            gap:"15px",
            fontWeight:"bold"
        }}>
            <h3>{typeOfColor==="rgb"?"RGB Color":"HEX Color"}</h3>
            <h1>{color}</h1>
        </div>
      </div>
    </>
  );
}
