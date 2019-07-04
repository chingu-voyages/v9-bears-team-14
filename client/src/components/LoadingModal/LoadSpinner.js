import React from 'react';
import Loader from 'react-loader-spinner'

import './LoadSpinner.css';
const LoadSpinner =()=>{

    return(
         <div className="LoadSpinner__Container">
             <div className="LoadSpinner__Content">
                <h1>Loading your Recipes</h1>
                <Loader type="ThreeDots" color="black" height={80} width={80} /> 
             </div>
        </div>
    )
}

export default LoadSpinner;