import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPaw } from '@fortawesome/free-solid-svg-icons'


function AboutPage() {
  return (
    <div>
      <section>
        <div className="break mt-5">
          <img className="flower" src="img/flower-line.png" alt="decoration-flower"></img>
        </div>
        <h2 className="header-members text-dark mt-5">About Us</h2>
        <div className="row row-about">
          <div className="column">
            <div className="card">
              <img className="card-img-top p-5 person" src="img/ray.png" alt="Ray"></img>
              <div className="container">
              <h2>Ray Shao<FontAwesomeIcon icon={faPaw} /></h2>
              <p class="title">Ordinary-optimist</p>
              <p>Have less and be more.</p>
              <p>shaoy23@uw.edu</p>
              <p><button className="button button-about bg-dark">Contact</button></p>
              </div>
            </div>
          </div>

          <div className="column">
            <div className="card">
              <img className="card-img-top p-5 person" src="img/sylvia.png" alt="Sylvia"></img>
              <div className="container">
              <h2>Sylvia Dou<FontAwesomeIcon icon={faPaw} /></h2>
              <p className="title">Cat-lover</p>
              <p>A believing heart is your magic!</p>
              <p>douw2@uw.edu</p>
              <p><button className="button button-about bg-dark">Contact</button></p>
              </div>
            </div>
          </div>

          <div className="column">
            <div className="card">
              <img className="card-img-top p-5 person" src="img/yi.png" alt="Yi"></img>
              <div className="container">
                <h2>Yi Zhong<FontAwesomeIcon icon={faPaw} /></h2>
                <p className="title">Raccoon-lover</p>
                <p>May the Force be with you☁⋆</p>
                <p>zhongy20@uw.edu</p>
              <p><button className="button button-about bg-dark">Contact</button></p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default AboutPage;