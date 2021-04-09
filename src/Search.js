import React from 'react';
import PAINTINGS from './artworkList/painting.json';
import { RenderPainting } from './artworkList/PaintingSection';
import { useState } from 'react';

let paintings = PAINTINGS;

function SearchPage() {

  const [inputtedValue, setInputtedValue] = useState("");

  const handleChange = (event) => {
    let newValue = event.target.value;
    setInputtedValue(newValue);
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Submitting!");
  }

  return (
    <div>
      <section className="main-content" id="PaingtingL">
        <div className="PaingtingL">
          <div className="break">
            <img className="flower" src="img/flower-line.png" alt="decoration-flower"></img>
          </div>
          <h2 className="header-members text-dark">Search</h2>

          <section className="check-box-section">
            <div className="painting-prob-section">

              <p className="painting-prob">Looking for a specific artist or artwork?</p>
              <form onSubmit={handleSubmit} className="p-2">
                      <input
                        className="form-control enter-artist"
                        placeholder="Popular search: Vincent van Gogh, Horror, Henry Asencio..."
                        value={inputtedValue}
                        onChange={handleChange}
                      />
              </form>
            </div>
          </section>

          <div>
            <RenderPainting paintArray={paintings} inputtedValue={inputtedValue}/>
          </div>
        </div>
      </section>
    </div>
  );
}




export default SearchPage;