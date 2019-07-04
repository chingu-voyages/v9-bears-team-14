import React from 'react';
import "./Modal.css";


//todo: add a ref?

 const Modal = ({children})=>{
    return(
        <div className="Modal__Container">
            {children}
        </div>
    )
}

export default Modal;