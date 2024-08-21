import React from 'react';

const CardBook = ({ imgSrc, title, text, link }) => {
  return (
    <div className="card-book">
      <div className="card-image">
        <img src={imgSrc} alt="Event" />
      </div>
      <div className="card-content">
        <h4 className="text-xl font-bold text-blueGray-800">{title}</h4>
        <p className="text-md font-light mt-2 text-blueGray-700">{text}</p>
        <div className="button-container">
          <button type="button" className="book-btn">
            Book Now
          </button>
          <button className="fav-button" type="button">
            <i className="fas fa-heart"></i> Small
          </button>
        </div>
      </div>
    </div>
  );
};

export default CardBook;
