import React from "react";
// import { Link } from "react-router-dom";
// import Img from "../assets/img/launch.svg"
// components

import Navbar from "components/Navbars/NavbarImg.js";
import Footer from "components/Footers/Footer.js";
import CardCreateEventForm from "../components/Cards/CardCreateEventForm.js";
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
          }}
        ></div>
        {/* <div className="container mx-auto px-4"> */}
        <CardCreateEventForm />
        {/* </div> */}
         
      </section>

      <Footer />
    </>
  );
}
