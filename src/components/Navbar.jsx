import React from 'react';
import { Link } from 'react-router-dom';

import './Navbar.css';

function Navbar() {
  const handleConnect = () => {
    const generateRandomString = (length) => {
      let text = '';
      const possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

      for (let i = 0; i < length; i++) {
        text += possible.charAt(Math.floor(Math.random() * possible.length));
      }
      return text;
    };
    const client_id = '105332a1b14743f287658bfc2516bf72';
    const scope = 'user-read-private user-read-email';
    const redirect_uri = 'https://david-chazoule.github.io/home';
    const state = generateRandomString(16);
    const url = `https:///accounts.spotify.com/authorize?response_type=token&client_id=${encodeURIComponent(client_id)}&scope=${encodeURIComponent(
      scope,
    )}&redirect_uri=${encodeURIComponent(redirect_uri)}&state=${encodeURIComponent(state)}`;
    window.location = url;
  };

  return (
    <header>
      <div className="logo-navbar">
        <img
          className="imageLogo"
          src="https://media.discordapp.net/attachments/816334477898809355/832201529602998272/Screen_Shot_2021-04-15_at_12.30.45_PM.png"
          alt="Logo"
        />
      </div>
      <div className="liens">
        <button className="Link" onClick={handleConnect}>
          Home Page
        </button>
        <Link to="/ContactUs">
          <button className="Link" >Contact Us</button>
        </Link>
      </div>
    </header>
  );
}

export default Navbar;
