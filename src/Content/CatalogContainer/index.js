import React from 'react';

import './style.css';

const CatalogContainer = () => {
  return (
    <div className='catalog'>
      <div className="title-wrapper">
      <h3>Stream from the Catalog</h3>
      </div>
      <p>Hymns sang by Angels (kiddin')!.
      Explore our Channel Catalog for tunes for just the right Mood.
      </p>
      <strong>Go to Catalog > </strong>
      <br />
      <div className="img-wrapper">
        <img src="https://www.yourlocalplumber.co.uk/wp-content/uploads/2016/12/greensquare.jpg"></img>
        <img src="https://www.yourlocalplumber.co.uk/wp-content/uploads/2016/12/greensquare.jpg"></img>
        <img src="https://www.yourlocalplumber.co.uk/wp-content/uploads/2016/12/greensquare.jpg"></img>
        <img src="https://www.yourlocalplumber.co.uk/wp-content/uploads/2016/12/greensquare.jpg"></img>
        <img src="https://www.yourlocalplumber.co.uk/wp-content/uploads/2016/12/greensquare.jpg"></img>
        <img src="https://www.yourlocalplumber.co.uk/wp-content/uploads/2016/12/greensquare.jpg"></img>
      </div>


    </div>
  );
};

export default CatalogContainer;
