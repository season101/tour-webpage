import React from 'react';

const Tour = ({ id, image, info, name, price }) => {
  return (
    <article className="single-tour">
      <img src={image} alt={name} style={{ height: '175px', width: '175px' }} />
      <span className="tour-price">${price}</span>
      <div className="tour-info">
        <h5>{name}</h5>
        <p>{info}</p>
        <button className="delete-btn btn-block btn">not interested</button>
      </div>
    </article>
  );
};

export default Tour;
