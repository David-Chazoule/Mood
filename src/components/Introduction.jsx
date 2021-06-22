import React from 'react';

import './Introduction.css';

function Introduction() {
  return (
    <div className="intro-container">
      <div className="intro-card">
        <h1 className="title-intro">A playlist for every mood</h1>
        <p className="text-enter">
          Connect your mind to the music.
          <br /> Numerous studies have shown the many positive effects of the music on the mind.
          <br /> It improves sleep, allows relaxation and focus. It also reduces anxiety and stress levels, while enhancing the mood.
          <br /> If you feel like influencing your current state of mind, try one of our playlists, selected particularly to improve your mood.
        </p>
      </div>
      <div className="feeling">
        <h2>How do you feel today ?</h2>
      </div>
    </div>
  );
}

export default Introduction;
