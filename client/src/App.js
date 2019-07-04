import React, {useState,useRef} from 'react';
import Map from './components/Map/Map';
import Header from './components/Header/Header';
import Results from './components/Results/Results';
import CountryContext from './context/country-context'
import Preview from './components/Preview/Preview';
import Modal from './components/Modal/Modal';

function App() {
  const [countrySelected, setSelectedCountry] = useState('')
  const [showPreview,setPreview] = useState(false);
  const videoEl = React.createRef();

  const handleClick = e => {
    console.log(videoEl)
    if (videoEl.current.contains(e.target)) {
      // inside click
      console.log('clicked inside');
      setPreview(true)
      return;
    }
    // outside click 
    setPreview(false)
  };
  return (
      <CountryContext.Provider value={ {countrySelected, setSelectedCountry}} >
        <div className="App">
          <Header/>
          <Map />
          <Results  clicked={setPreview}/>
        </div>
        
        {showPreview && <React.Fragment><Modal/> <Preview ref={videoEl} clicked={handleClick}/></React.Fragment>}
      </CountryContext.Provider>
  );
}

export default App;
