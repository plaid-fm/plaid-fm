import React from 'react';

import './style.css';

const ListenContainer = () => {
  return (
    <div className="listen">
      <h2>Listen live with JQBX</h2>
      Listen live with other Plaids at the same time.
      <br />
      Requires Spotify Premium.
      <br />
      <a
        href="https://app.jqbx.fm/room/5d262aa339a99000c4ebe1d4"
        target="_blank"
        rel="noopener noreferrer"
      >
        <strong>Go to JQBX > </strong>
      </a>
      <br />
      <div className="img-wrapper">
        <img src="https://www.yourlocalplumber.co.uk/wp-content/uploads/2016/12/greensquare.jpg" />
      </div>
    </div>
  );
};

export default ListenContainer;
