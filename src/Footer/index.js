import React from 'react';

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
      </div>
    </footer>
  );
};

export default Footer;
