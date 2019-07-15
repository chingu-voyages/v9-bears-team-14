import React,{useContext,useEffect} from "react";
import { Link } from "react-router-dom";
import axios from 'axios';
import AuthContext from '../../context/auth-context';

const Header = props => {
  const {auth,setAuth}=useContext(AuthContext);

  useEffect(()=>{
    (async ()=>{
      try{
        const res = await axios.get('/api/current_user');
        console.log('fetching user');
        console.log(res);
        if(res.data){
          setAuth(true);
        }
        else{
          setAuth(false)
        }
      }catch(error){
        setAuth(false);
      }
    })()
  },[])
  

  return (
    <header className="Header--wrapper">
      <Link to="/">
        <h1 className="Header--title">Geo Foods</h1>
      </Link>
      <h2 className=" Header--subtitle">
        Explore the World's Cuisines {auth? "LOGGED IN":"NOT LOGGED IN"}
      </h2>
      {auth ? <a href="/api/logout">Logout</a> :<a href="/auth/google">LOGIN</a>  }
    </header>
  );
};

export default Header;
