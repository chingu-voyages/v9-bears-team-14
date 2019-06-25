import React,{useContext,useState} from 'react'

//const CountryContext = React.createContext();                     //not initializing createContext means tests fail
const CountryContext = React.createContext({countrySelected:""});//create custom hook to retrieve context for testing, otherwise test fails for Map component //https://medium.com/7shifts-engineering-blog/testing-usecontext-react-hook-with-enzyme-shallow-da062140fc83

export const useCountryContext = ()=>useContext(CountryContext);        
export {CountryContext as default}