import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

import Introduction from './Introduction';
import Menu from './Menu';
import Articles from './Article';
import Goldenbook from '../componentsguest/Goldenbook';

function LandingPage() {
  const [isOpen, setIsOpen] = useState();
  const [token, setToken] = useState();
  const location = useLocation();

  useEffect(() => {
    const hash = location.hash;
    const token = hash.split('#access_token=')[1].split('&')[0];
    setToken(token);
  }, [location]);

  useEffect(() => {
    const url = 'https://api.spotify.com/v1/browse/categories?offset=0&limit=30';
    fetch(url, {
      method: 'GET',
      headers: {
        Authorization: 'Bearer ' + token,
      },
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
  });
  return (
    <div className="landingPage">
      <Introduction />
      <div className="App-Card">
        {Articles.map((item, index) => {
          let open = false;
          if (index === isOpen) {
            open = true;
          }
          return (
            <Menu
              key={index}
              img={item.img}
              title={item.title}
              alts={item.alts}
              choice={item.choice}
              choiceTwo={item.choiceTwo}
              bulle={item.bulle}
              id={index}
              isOpen={open}
              setIsOpen={setIsOpen}
              url={item.url}
              url2={item.url2}
              description={item.description}
              spotify={item.spotify}
            />
          );
        })}
      </div>

      <Goldenbook />
    </div>
  );
}

export default LandingPage;
