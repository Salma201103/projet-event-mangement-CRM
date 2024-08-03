import React from "react";
// import Navbar from "../components/Navbars/Navbarr.js";
// import CardComments from "components/Cards/CardComments";
import CardEventTypes from "../components/Cards/CardEventTypes.js";
export default function Test() {
  return (
    <>
      <div
        className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg"
        style={{ width: '18rem', margin: '10px' }}
      >
        <img
          src={require("assets/img/team-1-800x800.jpg").default}
          className="shadow-lg rounded-full mx-auto max-w-120-px"
          alt="Profile"
        />
        <blockquote className="relative p-8 mb-4">
          {/* SVG can be uncommented if needed */}
          {/* <svg
            preserveAspectRatio="none"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 583 95"
            className="absolute left-0 w-full block h-95-px -top-94-px"
          >
            <polygon
              points="-30,95 583,95 583,65"
              className="text-white fill-current"
            ></polygon>
          </svg> */}
          <h4 className="text-xl font-bold text-blueGray-800">Name</h4>
          <div className="mt-4 p-4 bg-blue-800 text-white rounded-lg shadow-md">
            <p className="text-md font-light">Blabla</p>
          </div>
          {/* Uncomment the below line to add a button */}
          {/* <a href={link} className="btn btn-primary mt-4">Book Now</a> */}
        </blockquote>
        
      </div>
      <CardEventTypes/>
      <div className="card mb-3" style={{ maxWidth: '540px' }}>
      <div className="row g-0">
        <div className="col-md-4">
          <img src="..." className="img-fluid rounded-start" alt="..." />
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">
              This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.
            </p>
            <p className="card-text">
              <small className="text-body-secondary">Last updated 3 mins ago</small>
            </p>
          </div>
        </div>
      </div>
    </div>
      
    </>
  );
}
