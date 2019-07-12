import React from 'react';

import listenImage from './jqbx-cover@2x.png';

import './style.css';

const ListenContainer = () => {
  return (
    <div className="listen">
      <div className="title-wrapper">
        <h3>Listen live with JQBX</h3>
      </div>

      <p>
        Listen to music with other Plaids at the same time.
        <br />
        Requires Spotify Premium.
      </p>
      <a
        href="https://app.jqbx.fm/room/5d262aa339a99000c4ebe1d4"
        target="_blank"
        rel="noopener noreferrer"
      >
        <strong>Go to JQBX ></strong>
      </a>
      <br />
      <div className="img-wrapper">
        <a
          href="https://app.jqbx.fm/room/5d262aa339a99000c4ebe1d4"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={listenImage} alt="jqbx link" />
        </a>
      </div>
    </div>
  );
};

export default ListenContainer;
