import React from 'react';
import { useState } from 'react';

function ContactPage() {
  const [inputtedArtwork, setInputtedArtwork] = useState("");

  const handleChange1 = (event) => {
    let inputArtwork = event.target.value;
    setInputtedArtwork(inputArtwork);
  }

  const [inputtedAuthor, setInputtedAuthor] = useState("");

  const handleChange2 = (event) => {
    let inputAuthor = event.target.value;
    setInputtedAuthor(inputAuthor);
  }

  const [inputtedEmail, setInputtedEmail] = useState("");

  const handleChange3 = (event) => {
    let inputEmail = event.target.value;
    setInputtedEmail(inputEmail);
  }

  const [formClassName, setFormClassName] = useState("p-2 form");
  const [divClassName, setDivClassName] = useState("submit-container row submit-success d-none");

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Submitting!");
    setFormClassName("p-2 form d-none");
    setDivClassName("submit-container row submit-success");
  }

  const handleGoBack = () => {
    setFormClassName("p-2 form");
    setDivClassName("submit-container row submit-success d-none");
  }

    return (
      <div>
        <section className="submit-function" id="ContactU">
          <div name="ContactU">
            <div className="break">
              <img class="flower" src="img/flower-line.png" alt="decoration-flower"></img>
            </div>
            <p className="submit-intro">Want us to include the work you like? Contact us here!</p>

            <div className={divClassName}>
              <div class="col">
                <p class="alert-success p-2">Thank you! We Appreciative Your Participation, and we will contact you with {inputtedEmail} for more information!</p>
              </div>
              <div class="col">
                <button type="button" class="btn btn-outline-secondary go-back-button" onClick={handleGoBack}>Want to Add More? Go Back</button>
              </div>
            </div>

            <form onSubmit={handleSubmit} class={formClassName} novalidate>
              <div class="form-group row">
                <label for="artworkInput" class="col-lg-1">Artwork name:</label>
                <div class="col-lg-11">
                    <input 
                      className="form-control input-check"
                      placeholder="Artwork Name"
                      value={inputtedArtwork}
                      onChange={handleChange1}
                      minLength="1" 
                      required 
                    />
                </div>
              </div>
              <div class="form-group row">
                <label for="artworkInput" class="col-lg-1">Author name:</label>
                <div class="col-lg-11">
                    <input 
                      className="form-control input-check"
                      placeholder="Author Name"
                      value={inputtedAuthor}
                      onChange={handleChange2}
                      minLength="1" 
                      required 
                    />
                </div>
              </div>
              <div class="form-group row">
                <label for="artworkInput" class="col-lg-1">Your Email:</label>
                <div class="col-lg-11">
                    <input 
                      type="email"
                      className="form-control input-check"
                      placeholder="xxx@xx.xxx"
                      value={inputtedEmail}
                      onChange={handleChange3}
                      required 
                    />
                </div>
              </div>

              <button type="submit" class="btn btn-outline-secondary form-button display-button">Submit</button>
            </form>
          </div>
        </section>
      </div>
    );
}

export default ContactPage;