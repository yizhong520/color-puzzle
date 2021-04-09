import React from 'react';
import PAINTINGS from './artworkList/painting.json';
import { RenderPaintingAll } from './artworkList/PaintingSection';

let paintings = PAINTINGS;

function ArtListPage() {
  return (
    <div>
      <section class="main-content" id="PaingtingL">
        <a name="PaingtingL">
          <div className="break">
            <img class="flower" src="img/flower-line.png" alt="decoration-flower"></img>
          </div>
          <h2 className="header-members text-dark">Artwork List</h2>
          <div>
            <RenderPaintingAll paintArray={paintings}/>
          </div>
        </a>
      </section>
    </div>
  );
}

export default ArtListPage;