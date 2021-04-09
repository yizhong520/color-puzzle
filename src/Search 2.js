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
      <section class="main-content" id="PaingtingL">
        <a name="PaingtingL">
          <div className="break">
            <img class="flower" src="img/flower-line.png" alt="decoration-flower"></img>
          </div>
          <h2 className="header-members text-dark">Search Artworks</h2>

          <section class="check-box-section">
            <div class="painting-prob-section">

              <p class="painting-prob">Looking for a specific type of artwork?</p>
              <form onSubmit={handleSubmit} class="p-2">
                      <input
                        className="form-control enter-artist"
                        placeholder="Popular types: classic, modern, anime..."
                        value={inputtedValue}
                        onChange={handleChange}
                      />
              </form>
            </div>
          </section>

          <div>
            <RenderPainting paintArray={paintings} inputtedValue={inputtedValue}/>
          </div>
        </a>
      </section>
    </div>
  );
}




export default SearchPage;