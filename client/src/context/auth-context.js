import React,{useContext} from 'react'
                 //not initializing createContext means tests fail
const AuthContext = React.createContext({auth:false});//create custom hook to retrieve context for testing, otherwise test fails for Map component //https://medium.com/7shifts-engineering-blog/testing-usecontext-react-hook-with-enzyme-shallow-da062140fc83

export const useAuthContext = ()=>useContext(AuthContext);        
export {AuthContext as default}