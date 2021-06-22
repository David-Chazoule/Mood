import React from 'react';

import './SpotifyConnect.css';

function SpotifyConnect() {
  const generateRandomString = (length) => {
    let text = '';
    const possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

    for (let i = 0; i < length; i++) {
      text += possible.charAt(Math.floor(Math.random() * possible.length));
    }
    return text;
  };

  const handleConnect = () => {
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
    <div className="connection-card">
      <div className="connect-card">
        <h1 className="title-connection"> WELCOME TO MOOD </h1>
        <p className="text-presentation">
          The website that connects your emotions to music. <br /> modulate your mind, your motivation, your desires thanks to playlists specially
          chosen for the occasion.
        </p>
        <p className="text-connect">to fully enjoy your musical experience, you need to log into your Spotify account.</p>
        <div className="button-spotify">
          <input className="btn-spot" type="button" onClick={handleConnect} value="Connect to Spotify" />
        </div>
      </div>
    </div>
  );
}

export default SpotifyConnect;
