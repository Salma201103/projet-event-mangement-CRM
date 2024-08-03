// Card.js
// import React from 'react';

// const Card = ({ imgSrc, title, text, link }) => {
//   return (
//     <div className="card" style={{ width: '18rem', margin: '10px' }}>
//       <img src={imgSrc} className="card-img-top" alt="..." />
//       <div className="card-body">
//         <h5 className="card-title">{title}</h5>
//         <p className="card-text">{text}</p>
//         <a href={link} className="btn btn-primary">Book Now</a>
//       </div>
//     </div>
//   );
// };

// export default Card;
import React from "react";
import "../../assets/styles/style.css"; // Import your CSS file

const CardEvent = ({ imgSrc, title, text, link }) => {
  return (
    <div
      className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg"
      style={{ width: "18rem", margin: "10px",height:"26rem" }}
    >
      <img
        src={imgSrc}
        className="w-full align-middle rounded-t-lg"
        alt="Event"
      />
      <blockquote className="relative p-8 mb-4">
        <svg
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 583 95"
          className="absolute left-0 w-full block h-95-px -top-94-px"
        >
          <polygon
            points="-30,95 583,95 583,65"
            className="text-white fill-current"
          ></polygon>
        </svg>
        <h4 className="text-xl font-bold text-blueGray-800">{title}</h4>
        <p className="text-md font-light mt-2 text-blueGray-700">{text}</p>
        <div className="button-container">
          <button type="button" className="book-btn">
            Book Now
          </button>
          <button className="fav-button" type="button" >
            <i className="fas fa-heart"></i> Small
          </button>
        </div>
      </blockquote>
    </div>
  );
};

export default CardEvent;

