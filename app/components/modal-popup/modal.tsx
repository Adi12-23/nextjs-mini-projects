"use client"
import "./styles.css";
interface ModalProps {
    id?:string,
    header?:React.ReactElement,
    body?:React.ReactElement,
    footer?:React.ReactElement,
    onClose:Function
}
export default function Modal({id,header,body,footer,onClose}:ModalProps){

    return(
        <div id={id || "Modal"} 
        className="modal"
        >
            <div
            className="modal-content"
            >
                <div className="header">
                    <span className="close-modal-icon"
                    onClick={()=>onClose()}
                    >
                     &times;
                    </span>
                    <h2>{header?header:"Header"}</h2>
                </div>
                <div className="body">
                    {body?body:"Body"}
                </div>
                <div className="footer">
                    {footer?footer:"Footer"}
                </div>
            </div>
        </div>
    )
}