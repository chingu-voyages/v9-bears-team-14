import React from 'react';
import Loader from 'react-loader-spinner'

import './LoadSpinner.css';
const LoadSpinner =({color,message})=>{

    return(
         <div className="LoadSpinner__Container">
             <div className="LoadSpinner__Content">
                <h1>{message}</h1>
                <Loader type="ThreeDots" color={color} height={80} width={80} /> 
             </div>
        </div>
    )
}

export default LoadSpinner;