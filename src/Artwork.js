import React from 'react';
import PAINTINGS from './artworkList/painting.json';
import { RenderPaintingAll } from './artworkList/PaintingSection';

let paintings = PAINTINGS;

function ArtListPage() {
  return (
    <div>
      <section className="main-content" id="PaingtingL">
        <div className="PaingtingL">
          <div className="break">
            <img className="flower" src="img/flower-line.png" alt="decoration-flower"></img>
          </div>
          <h2 className="header-members text-dark">Artwork List</h2>
          <div>
            <RenderPaintingAll paintArray={paintings}/>
          </div>
        </div>
      </section>
    </div>
  );
}

export default ArtListPage;