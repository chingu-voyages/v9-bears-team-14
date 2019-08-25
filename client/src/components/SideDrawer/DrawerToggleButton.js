import React from 'react';
import "./DrawerToggleButton.css";

const DrawerToggleButton=(props)=>{
    return(
        <button aria-label="Menu-button" className="toggle-button" onClick={()=>props.clicked(prev=>!prev)}>
            <div className="toggle-button__line"></div>
            <div className="toggle-button__line"></div>
            <div className="toggle-button__line"></div>
        </button>
    )
}

export default DrawerToggleButton;