import React from 'react'; //import React Component
import  { Route, Switch, Redirect, NavLink } from 'react-router-dom';

import HomePage from './home';
import AboutPage from './about';
import PalettePage from './Palette';
import SearchPage from './Search';
import ArtListPage from './Artwork';
import ContactPage from './contact';
import { HeaderSection } from './Header'
import { FooterSection } from './footer'

function App(props) {
  return (
      <div>
        <HeaderSection />
        <AboutNav />
      
        <main className="container">
          <Switch>
            <Route exact path="/"><HomePage /></Route>
            <Route path="/about"><AboutPage /></Route>
            <Route path="/palette"><PalettePage /></Route>
            <Route path="/search"><SearchPage /></Route>
            <Route path="/artwork"><ArtListPage /></Route>
            <Route path="/contact"><ContactPage /></Route>
            <Redirect to="/"/>
          </Switch>
        </main>

        <FooterSection />
      </div> 
  );
}

function AboutNav() {
  return (
    <div className="topnav">
        <NavLink exact to="/" activeClassName="activeLink">Home</NavLink>
        <NavLink to="/about" activeClassName="activeLink">About Us</NavLink>
        <NavLink to="/palette" activeClassName="activeLink">Palettes</NavLink>
        <NavLink to="/search" activeClassName="activeLink">Search Artworks</NavLink>
        <NavLink to="/artwork" activeClassName="activeLink">Artwork List</NavLink>
        <NavLink to="/contact" activeClassName="activeLink">Contact Us</NavLink>
    </div>
  );
}

export default App;