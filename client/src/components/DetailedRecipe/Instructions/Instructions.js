import React from 'react';
import './Instructions.css';
const Instructions =(props)=>{
    return(
        <div className="Description__Instructions">
          <div className="Instructions__Header">
            <h2 className="Instructions--Heading">Instructions</h2>
          </div>
          <div className="Instructions__Wrapper">
            <p className="Instruction--Content">{props.instructions}</p>
          </div>
        </div>
    )
}

export default Instructions;