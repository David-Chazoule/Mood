import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import PlaylistCard from './PlaylistCard';

import './Menu.css';

function Menu(props) {
  const [show, setShow] = useState(props.isOpen);
  const [subMenu, setSubMenu] = useState(false);
  const [token, setToken] = useState();
  const [urlPlaylist, setUrlPlaylist] = useState();
  const [description, setDescription] = useState();
  const [spotify, setSPotify] = useState();

  const location = useLocation();

  useEffect(() => {
    const hash = location.hash;
    const token = hash.split('#access_token=')[1].split('&')[0];
    setToken(token);
  }, [location]);

  useEffect(() => {
    const url = 'https://api.spotify.com/v1/users/wizzler/playlists/7IzWbgT7kDRsCMsXZNFgkA';
    fetch(url, {
      method: 'GET',
      headers: {
        Authorization: 'Bearer ' + token,
      },
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
  });

  useEffect(() => {
    if (!show) {
      setSubMenu(false);
    }
  }, [show]);

  useEffect(() => {
    if (props.isOpen !== show) {
      setShow(false);
    }
  }, [props]);

  const showMenu = (value) => {
    if (!value) {
      props.setIsOpen(props.id);
    }
    setShow(!value);
  };

  const url1 = () => {
    setUrlPlaylist(props.url);
    setDescription(props.description[0]);
    setSPotify(props.spotify[0]);
    setSubMenu(!subMenu);
  };

  const url2 = () => {
    setUrlPlaylist(props.url2);
    setDescription(props.description[1]);
    setSPotify(props.spotify[1]);
    setSubMenu(!subMenu);
  };

  return (
    <div className="menu">
      <div className="Article-card" onClick={() => showMenu(show)} onKeyPress={() => showMenu(show)} role="button" tabIndex={0}>
        <img src={props.img} alt={props.alts} className="Articlecard-img" />

        <div className="title">
          <h1>{props.title}</h1>
        </div>
      </div>

      <div className="btn-menu">
        {show && (
          <>
            <button className="btn-form" type="button" title={props.bulle[0]} onClick={url1}>
              {props.choice}
            </button>
            <button className="btn-form" type="button" title={props.bulle[1]} onClick={url2}>
              {props.choiceTwo}
            </button>
          </>
        )}
      </div>
      <div className="console-card">{subMenu && <PlaylistCard url={urlPlaylist} description={description} spotify={spotify} />}</div>

      <div className="ligne"></div>
    </div>
  );
}
export default Menu;
