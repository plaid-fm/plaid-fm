import React from 'react';

import './style.css';
import CatalogContainer from './CatalogContainer';
import ListenContainer from './ListenContainer';

const Content = () => {
  return (
    <div className="content">
      <div className="wrapper">
        <h3>RADIO YOUR WAY</h3>
        <h2>Two flavors for your ears</h2>
        <div className="listen_containers">
          <ListenContainer />
          <CatalogContainer />
        </div>
      </div>
    </div>
  );
};

export default Content;
