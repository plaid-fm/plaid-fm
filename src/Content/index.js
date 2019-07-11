import React from 'react';

import './style.css';
import CatalogContainer from './CatalogContainer';
import ListenContainer from './ListenContainer';

const Content = () => {
  return (
    <div className="content">
      <div className="wrapper">
        <ListenContainer />
        <CatalogContainer />
      </div>
    </div>
  );
};

export default Content;
