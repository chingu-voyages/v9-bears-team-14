import React,{useContext,useEffect} from "react";
import {useSpring, animated} from 'react-spring'
import { Link } from "react-router-dom";
import axios from 'axios';
import AuthContext from '../../context/auth-context';
import DrawerToggleButton from '../SideDrawer/DrawerToggleButton';
const Header = props => {
  const {setAuth}=useContext(AuthContext);

  useEffect(()=>{
    (async ()=>{
      try{
        const res = await axios.get('/api/current_user');
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
  },)
  
  const anims = useSpring({opacity: 1, from: {opacity: 0}})
  return (
    <animated.header style={anims} className="Header--wrapper">
      <Link to="/">
        <h1 className="Header--title">Geo Foods</h1>
      </Link>
      <h2 className=" Header--subtitle">
        Explore the World's Cuisines 
      </h2>
      <div className="Header--Button">
        <DrawerToggleButton  clicked={props.clicked} open={props.open}/>
      </div>
    </animated.header>
  );
};

export default Header;
