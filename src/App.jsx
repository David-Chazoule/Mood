import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Footer from './components/Footer';
import Navbar from './components/Navbar';
import ContactUs from './components/ContactUs';
import LandingPage from './components/LandingPage';
import SpotifyConnect from './components/SpotifyConnect';

import './App.css';

function App() {
  return (
    <div className="App-Container App">
      <div className="App-Intro">
        <Navbar />
      </div>
      <Switch>
        <Route exact path="/" component={SpotifyConnect} />
        <Route path="/home" component={LandingPage} />
        <Route path="/ContactUs" component={ContactUs} />
      </Switch>
      <Footer />
    </div>
  );
}
export default App;
