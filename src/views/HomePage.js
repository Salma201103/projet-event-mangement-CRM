import React from "react";
// import { Link } from "react-router-dom";
import "../assets/styles/style.css"
// components

// import Navbar from "components/Navbars/AuthNavbar.js";
import Navbar from "components/Navbars/NavbarImg.js";
import Footer from "components/Footers/Footer.js";
import SearchBar from "components/Searchbar/Searchbar.js";
import CardEvents from "components/Cards/CardEvents.js";
import CardEventTypes from "components/Cards/CardEventTypes.js";

export default function HomePage() {
  return (
    <>
      <Navbar fixed />
      <main>
        <div className="relative pt-16 pb-32 flex content-center items-center justify-center min-h-screen-75 ">
          <div
            className="absolute top-0 w-full h-full bg-center bg-cover"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
            }}
          >
            <span
              id="blackOverlay"
              className="w-full h-full absolute opacity-50 bg-black"
            ></span>
          </div>
          <div className="container relative mx-auto">
            <div className="items-center flex flex-wrap">
              <div className="w-full lg:w-6/12 px-4 ml-auto mr-auto text-center">
                <div className="pr-12">
                  <h1 className="text-white font-semibold text-5xl">
                    Transform Your Event Experience with EventConnect
                  </h1>
                  <p className="mt-4 text-3xl text-blueGray-200">
                    Effortless Planning, Seamless Management, Unforgettable
                    Events.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div
            className="top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden h-70-px"
            style={{ transform: "translateZ(0)" }}
          >
            <svg
              className="absolute bottom-0 overflow-hidden"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
              version="1.1"
              viewBox="0 0 2560 100"
              x="0"
              y="0"
            >
              <polygon
                className="text-blueGray-200 fill-current"
                points="2560 0 2560 100 0 100"
              ></polygon>
            </svg>
          </div>
        </div>

        <section className="pb-20 bg-blueGray-200 -mt-24">
          <div className="container mx-auto px-4">
            {/* <div className="flex flex-wrap"> */}
            {/* <div className="pt-7 w-full md:w-4/12 px-4 text-center"> */}
            <div className="relative flex flex-col break-words  custom-container ">
              {/* <div className="px-4 py-5 flex-auto"> */}
              <SearchBar />

              {/* </div> */}
            </div>
            {/* </div> */}
            {/* </div> */}

            {/* <div className="container mx-auto my-10"> */}
            <div className="flex  mb-3 mt-24  ">
              <h1 className="title-text text-4xl font-bold text-blue-700 mr-auto">
                Upcoming Events
              </h1>
            </div>
            <div className="">
              <CardEvents />
              <CardEvents />
            </div>
            {/* </div> */}
          </div>
          <div className="flex  mb-3 mt-24 ">
            <h1 className="title-right text-4xl font-bold text-blue-700 mr-auto ml-8">
              Events Based on Categories
            </h1>
          </div>
          <div className="flex flex-wrap justify-center">
            <CardEventTypes />
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
