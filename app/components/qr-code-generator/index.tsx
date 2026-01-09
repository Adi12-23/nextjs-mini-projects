"use client"
import  QRCode  from "react-qr-code"
import { useState } from "react"

export default function QrCodeGenerator(){
    const [qrCode,setQRCode] = useState("");
    const [input,setInput] = useState("");
    function handleGenerateQRCode(){
        setQRCode(input)
        setInput("")
    }
    return (
        <div className="min-h-screen flex flex-col items-center justify-center gap-6 bg-gray-100">
        <h1>QR Code Generator</h1>
        <div>
            <input type="text" name="qr-code" 
            placeholder="Enter your value here"
            onChange={(e)=>setInput(e.target.value)}
            value={input}
             className="px-4 py-2 border rounded-md w-64 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <button
            onClick={handleGenerateQRCode}
            disabled={input.trim()===""}
             className="px-4 py-2 rounded-md bg-blue-500 text-white font-medium disabled:bg-gray-400 disabled:cursor-not-allowed"
            >Generate</button>
        </div>
        <div>
            <QRCode
            id="qr-code-value"
            value={qrCode}
            size={400}
            bgColor="#ffff"
            className="bg-white p-4 rounded-lg shadow"
            />
        </div>
        </div>
    )
}