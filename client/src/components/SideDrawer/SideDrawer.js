import React,{useEffect} from 'react';
import {Link} from 'react-router-dom';
import './SideDrawer.css';
const SideDrawer =React.forwardRef((props,ref)=>{
    let drawerClasses = 'side-drawer';

    if(props.show){
        drawerClasses='side-drawer open';
    }

    useEffect(() => {
        // add when mounted
        document.addEventListener("mousedown", props.drawerHandler);
        document.addEventListener("touch", props.drawerHandler);
        // return function to be called when unmounted
        return () => {
          document.removeEventListener("mousedown", props.drawerHandler);
          document.removeEventListener("touch", props.drawerHandler);
        };
      }, [props.drawerHandler]);
    return(
        <nav className={drawerClasses} ref={ref}>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li>{props.auth ? <a href="/api/logout">Logout</a>: <a href="/auth/google">Login With Google</a>}</li>
                <li><Link to="/savedrecipes">Saved Recipes</Link></li>
            </ul>
        </nav>
    )

})

export default SideDrawer;