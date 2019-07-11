import React from 'react';

import './style.css';

const ListenContainer = () => {
  return (
    <div className="listen">
      <div className="title-wrapper">
        <h3>Listen live with JQBX</h3>
        </div>

      <p>Listen to music with other Plaids at the same time.<br />
      Requires Spotify Premium.</p>
      <a
        href="https://app.jqbx.fm/room/5d262aa339a99000c4ebe1d4"
        target="_blank"
        rel="noopener noreferrer"
      >
        <strong>Go to JQBX ></strong>
      </a>
      <br />
      <div className="img-wrapper">
        <img
          src="https://www.yourlocalplumber.co.uk/wp-content/uploads/2016/12/greensquare.jpg"
          alt="jqbx link"
        />
      </div>
    </div>
  );
};

export default ListenContainer;
