import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import  { BrowserRouter as Router } from "react-router-dom"
import "./index.css";
import 'bootstrap/dist/css/bootstrap.css';
import firebase from 'firebase';

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyArr0PlUgA_j78zbCHB16xIMu7Wy_mw2dw",
    authDomain: "info340-color-puzzle.firebaseapp.com",
    projectId: "info340-color-puzzle",
    storageBucket: "info340-color-puzzle.appspot.com",
    messagingSenderId: "1072649042735",
    appId: "1:1072649042735:web:62eaad1e9221a807beffda"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

ReactDOM.render(<Router><App /></Router>, document.getElementById('root'));

let form = document.querySelector('#contactForm');
    let submit = document.querySelector(".form-button");
    let alert = document.querySelector('.submit-success');

    if (form) {
        form.addEventListener('submit', function(event) {
            event.preventDefault();
            if(form.checkValidity()) {
                form.classList.add('d-none');
                alert.classList.remove('d-none');
            } else {
                form.classList.add('was-validated');
                submit.disabled = true;
            }
        });
    }

    let inputs = document.querySelectorAll('.input-check');
    inputs.forEach(function(input) {
    input.addEventListener('input', function() {
        if(form.classList.contains('was-validated')) {
        submit.disabled = true;
        } else {
        submit.disabled = false;
        }
    });
    });

    let goBackButton = document.querySelector('.go-back-button');
    if(goBackButton) {
        goBackButton.addEventListener('click', function() {
            form.classList.remove('d-none');
            alert.classList.add('d-none');
        });
    }
    