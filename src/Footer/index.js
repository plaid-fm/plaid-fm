import React from 'react';

import instagramLogo from './instagram.png';
import twitterLogo from './twitter.png';

import './style.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="wrapper">
        <div className="slogan">
          <div className="line" />
          <p>It's not just a Plaiderdays project.</p>
          <p>It's a movement.</p>
        </div>
        <div className="credits">
          <p>Brought to you by the Plaid FM team</p>
          <p>© Plaid Inc. 2019</p>
        </div>
        <div className="links">
          <a
            href="https://www.instagram.com/plaid/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={instagramLogo} alt="instagram logo" />
          </a>
          <a
            href="https://twitter.com/Plaid"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={twitterLogo} alt="twitter logo" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
