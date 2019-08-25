import React, { useState,useRef } from "react";
import { BrowserRouter as Router, Route,Redirect } from "react-router-dom";
import Map from "./components/Map/Map";
import Header from "./components/Header/Header";
import Results from "./components/Results/Results";
import CountryContext from "./context/country-context";
import AuthContext from './context/auth-context';
import DetailedRecipe from "./components/DetailedRecipe/DetailedRecipe";
import SideDrawer from './components/SideDrawer/SideDrawer';
import SavedRecipes from './components/SavedRecipes/SavedRecipes';
//set up react router
//set up auth route
//set up param route
//put links in header


function Main(){
  const [countrySelected, setSelectedCountry] = useState("");
  
  return (
    <CountryContext.Provider value={{ countrySelected, setSelectedCountry }}>
      <div className="App">
        <Map />
        <Results/>
      </div>
    </CountryContext.Provider>
  );
}
function App() {
  const [auth,setAuth]=useState(false);
  const [openDrawer,setDrawer] = useState(false);
  const  drawerRef = useRef(null);

  const handleClick = e => {
    if (drawerRef.current && drawerRef.current.contains(e.target)) {
      // inside click
      setDrawer(true);
    }
    else{
      setDrawer(false);
    }
    // outside click 
    
  };
  return (
    <Router>
      <AuthContext.Provider value={{auth,setAuth}}>
        <Header clicked={setDrawer} open={openDrawer}/>
        <SideDrawer auth ={auth} show={openDrawer} drawerHandler={handleClick} ref={drawerRef}/>
        <Route exact path="/" component={Main} />
        <Route path="/recipe/:previewSelected" component={DetailedRecipe} />
        <Route path="/savedRecipes" render={()=>(!auth?<Redirect to={'/'}/>:<SavedRecipes/>)}></Route>
      </AuthContext.Provider>
    </Router>
  );
}

export default App;
