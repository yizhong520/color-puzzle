import React from 'react';
import PALETTES from './palette/palette.json';
import { RenderPalette } from './palette/PaletteSection'

let palettes = PALETTES;

function PalettePage() {
  return (
    <div>
      <section className="main-content" id="ColorP">
        <div name="ColorP">
          <div className="break">
            <img class="flower" src="img/flower-line.png" alt="decoration-flower"></img>
          </div>
          <h2 className="header-members text-dark">Get Some Inspirations</h2>
          <div>
            <RenderPalette palettesArray={palettes}/>
          </div>
        </div>
      </section>
    </div>
  );
}

export default PalettePage;