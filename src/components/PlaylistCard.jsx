import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import logo from './Assets/logo_spotify.png';

import './PlaylistCard.css';

function PlaylistCard(props) {
  const [playlist, setPlaylist] = useState();
  const location = useLocation();

  useEffect(() => {
    const hash = location.hash;
    const token = hash.split('#access_token=')[1].split('&')[0];

    const url = props.url;
    fetch(url, {
      method: 'GET',
      headers: {
        Authorization: 'Bearer ' + token,
      },
    })
      .then((res) => res.json())
      .then((data) => setPlaylist(data));
  }, [location]);

  return (
    <div className="console">
      <div className="describe-playlist">
        <h2 className="title-playlist">{playlist && playlist.name}</h2>

        <div className="playlist-spotify">
          {console.log(playlist)}
          <img src={playlist && playlist.images[0].url} alt="playlist" className="cardPlaylist-img" />
          <p className="txt-describe">{props.description}</p>
        </div>
        <div className="btn-spotify">
          <button className="link-spotify" type="button" onClick={() => window.open(props.spotify, '_blank')}>
            <img className="logo-spotify" src={logo} alt="spotify" />
            Open Spotify
          </button>
        </div>
      </div>
    </div>
  );
}

export default PlaylistCard;
