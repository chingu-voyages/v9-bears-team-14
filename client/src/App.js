import React, { useState } from "react";
import Map from "./components/Map/Map";
import Header from "./components/Header/Header";
import Results from "./components/Results/Results";
import CountryContext from "./context/country-context";
import Preview from "./components/Preview/Preview";
import Modal from "./components/Modal/Modal";
import DetailedRecipe from './components/DetailedRecipe/DetailedRecipe';
function App() {
  const [countrySelected, setSelectedCountry] = useState("");
  const [showModal, setModal] = useState(false);
  const [previewSelected, setPreview] = useState(null);
  const videoEl = React.createRef();

  const modalHandler = e => {
    e.preventDefault();
    if (videoEl.current.contains(e.target)) {
      setModal(true); // outside click opens preview component
      return;
    }
    setModal(false); // outside click closes preview component
  };

  return (
    <CountryContext.Provider value={{ countrySelected, setSelectedCountry }}>
      <div className="App">
        <Header />
        <Map />
        <Results 
          clickedPreview={setPreview} 
          clickedModal={setModal} 
        />
        {showModal && (
          <React.Fragment>
            <Modal />
            {/* <Preview
              ref={videoEl}
              previewSelected={previewSelected}
              clicked={modalHandler}
            /> */}
            <DetailedRecipe
              ref={videoEl}
              previewSelected={previewSelected}
              clicked={modalHandler}
            />
          </React.Fragment>
        )}
      </div>
    </CountryContext.Provider>
  );
}

export default App;
