import React from 'react';

import './style.css';

const CatalogContainer = () => {
  return (
    <div className="catalog">
      <div className="title-wrapper">
        <h3>Stream from the Catalog</h3>
        <p>Hymns sang by Angels (kiddin')! Explore our</p>
        <p>Channel Catalog for tunes for just the right Mood.</p>
        <strong>Check out the catalog ></strong>
        <br />
        <div className="img-wrapper">
          <a
            href="https://open.spotify.com/playlist/3xNntNhnAXwbWJP9ndYcG3?si=k7CPpPkMQriYf1h99A1AZw"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="https://pl.scdn.co/images/pl/default/daf85b89c1bb308fbc3f529a5a37d29934b7849d"
              alt="album artwork"
            />
          </a>
          <a
            href="https://open.spotify.com/playlist/4iNPKmPqk0eWmJVCWv8BT6?si=_fvC8a5XTrK9WtcFAQTj1A"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="https://pl.scdn.co/images/pl/default/764a3e69067d82a35f781cd42b2cb9449fa1f34f"
              alt="album artwork"
            />
          </a>
          <a
            href="https://open.spotify.com/playlist/5RidITVguVdVUhYLtMFBOh?si=LK93y2GCRGquLHMJl-kS5Q"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="https://pl.scdn.co/images/pl/default/7d311ca1510a0075f07848038f43fd7c2b25eef7"
              alt="album artwork"
            />
          </a>
          <a href="test" target="_blank" rel="noopener noreferrer">
            <img
              src="https://www.yourlocalplumber.co.uk/wp-content/uploads/2016/12/greensquare.jpg"
              alt="album artwork"
            />
          </a>
          <a href="test" target="_blank" rel="noopener noreferrer">
            <img
              src="https://www.yourlocalplumber.co.uk/wp-content/uploads/2016/12/greensquare.jpg"
              alt="album artwork"
            />
          </a>
          <a href="test" target="_blank" rel="noopener noreferrer">
            <img
              src="https://www.yourlocalplumber.co.uk/wp-content/uploads/2016/12/greensquare.jpg"
              alt="album artwork"
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default CatalogContainer;
