import React from "react";
// import { Link } from "react-router-dom";

// components

import Navbar from "components/Navbars/NavbarImg.js";
import Footer from "components/Footers/Footer.js";
import CardEvents from "../components/Cards/CardEvents.js";

export default function CreateEvent() {
  return (
    <>
      <Navbar fixed />
      <section className="relative w-full h-full py-40 min-h-screen">
        <div
          className="absolute top-0 w-full h-full bg-blueGray-800 bg-no-repeat bg-full"
          style={{
            backgroundImage:
              "url(" + require("assets/img/register_bg_2.png").default + ")",
            zIndex: -1,
          }}
        ></div>
        <div className="relative z-10">
          <div className="flex mb-3" style={{ marginTop: '-2rem', marginLeft: '13rem' }}>
            <h1 className="text-4xl font-bold text-white mr-auto">
              My Favorites
            </h1>
          </div>
          <div   style={{ marginTop: '2rem' }}>
          <CardEvents />
          <CardEvents />
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
