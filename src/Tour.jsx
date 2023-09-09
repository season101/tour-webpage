import React from 'react';

const Tour = ({ id, image, info, name, price }) => {
  return (
    <div>
      <img src={image} alt={name} style={{ height: '175px', width: '175px' }} />
      <h2>{name}</h2>
      <p>{info}</p>
      <p>${price}</p>
    </div>
  );
};

export default Tour;
