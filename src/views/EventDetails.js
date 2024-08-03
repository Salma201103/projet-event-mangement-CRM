import React, { useRef } from "react";
// import { Link } from "react-router-dom";
import "../assets/styles/style.css";

// components

// import Navbar from "components/Navbars/AuthNavbar.js";
import Navbar from "components/Navbars/NavbarImg.js";
import Footer from "components/Footers/Footer.js";
// import SearchBar from "components/Searchbar/Searchbar";
// import CardEvents from "components/Cards/CardEvents";
import CardEvents from "components/Cards/CardEvents";

export default function EventDetails() {
  // useRef for Referencing the Full Description Section
  const fullDescriptionRef = useRef(null);

  const scrollToFullDescription = () => {
    fullDescriptionRef.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <Navbar transparent />
      <main>
        <div className="relative pt-16 pb-32 flex content-center items-center justify-center min-h-screen-75">
          <div
            className="absolute top-0 w-full h-full bg-center bg-cover"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1583795484071-3c453e3a7c71?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
            }}
          >
            <span
              id="blackOverlay"
              className="w-full h-full absolute opacity-50 bg-black"
            ></span>
          </div>
          <div className="container relative mx-auto">
            <div className="items-center flex flex-wrap">
              <div className="w-6/12 text-left mr-auto custom-margin">
                <div className="pr-2">
                  <h1 className="text-white font-semibold  custom-title-size py-10">
                    Jimmy Concert
                  </h1>
                  <p className="mt-1 text-2xl text-blueGray-200 custom-description">
                    This is a simple example of a Landing Page you can build
                    using Notus React. It features multiple CSS components based
                    on the Tailwind CSS design system.
                  </p>
                  <button
                    onClick={scrollToFullDescription}
                    className="mt-2 px-3 py-1 bg-purple-500 text-white font-semibold rounded hover:bg-purple-700 transition duration-300 ease-in-out"
                  >
                    View More
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* <div className="container mx-auto px-10 "> */}
          <div className=" lg:pt-32 w-full md:w-4/12 px-4  text-center ml-auto">
            <div className="custom-left-position relative flex flex-col min-w-0 break-words bg-white w-full shadow-lg rounded-lg mt-10 py-6">
              {" "}
              {/* Increased height */}
              <div className="px-8 py-12 flex-auto">
                <h6 className="text-lg font-semibold mt-2">Date & time</h6>
                <p className="mt-1 mb-4 text-blueGray-500">
                  Saturday, August 12, 7.30PM to 9.30PM
                </p>
                <h6 className="text-lg font-semibold mt-4">Price</h6>
                <p className="mt-1 mb-4 text-blueGray-500">80 TND per person</p>
                <div className="mt-4">
                  <button
                    className="bg-purple-500 text-white active:bg-purple-600 font-bold uppercase text-s px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                  >
                    Book now
                  </button>
                </div>
                <div className="mt-2">
                  <button className="bg-gray-200 text-gray-700 font-bold uppercase text-xs px-3 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150">
                    Add to Favourites
                  </button>
                </div>
              </div>
            </div>
          </div>
          {/* </div> */}

          {/* </div> */}

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
                className="text-white fill-current"
                points="2560 0 2560 100 0 100"
              ></polygon>
            </svg>
          </div>
        </div>

        <section className="pb-20 bg-white -mt-24">
          <div className="container mx-auto px-10">
            {/* <div className="flex flex-wrap justify-center"> */}

            {/* <div className="w-full md:w-4/12 px-4 text-center">
                <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                  <div className="px-4 py-5 flex-auto">
                    <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-lightBlue-400">
                      <i className="fas fa-retweet"></i>
                    </div>
                    <h6 className="text-xl font-semibold">Free Revisions</h6>
                    <p className="mt-2 mb-4 text-blueGray-500">
                      Keep you user engaged by providing meaningful information.
                      Remember that by this time, the user is curious.
                    </p>
                  </div>
                </div>
              </div> */}

            {/* <div className="pt-6 w-full md:w-4/12 px-4 text-center">
                <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                  <div className="px-4 py-5 flex-auto">
                    <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-emerald-400">
                      <i className="fas fa-fingerprint"></i>
                    </div>
                    <h6 className="text-xl font-semibold">Verified Company</h6>
                    <p className="mt-2 mb-4 text-blueGray-500">
                      Write a few lines about each one. A paragraph describing a
                      feature will be enough. Keep you user engaged!
                    </p>
                  </div>
                </div>
              </div> */}
            {/* </div> */}

            {/* Full Description Section */}
            {/* <div ref={fullDescriptionRef} className="container mx-auto my-10">
              <div className="w-10/12 mx-auto">
                <h2 className="text-3xl font-semibold">Full Description</h2>
                <p className="mt-4 text-lg text-blueGray-200">
                  This is a simple example of a Landing Page you can build using
                  Notus React. It features multiple CSS components based on the
                  Tailwind CSS design system. This full description contains all
                  the details that were truncated in the summary section. Here,
                  you can provide a more detailed explanation or additional
                  information about the event.
                </p>
                
              </div>
            </div> */}

            <div className="flex flex-wrap items-center  mt-32 ">
              <div
                ref={fullDescriptionRef}
                className="w-full md:w-5/12 px-1 mr-auto ml-auto custom-left-margin"
              >
                <h3 className="text-3xl mb-2 font-semibold leading-normal ">
                  Description
                </h3>
                <p className="text-lg font-normal leading-relaxed mt-2 mb-4 text-blueGray-600">
                  This is a simple example of a Landing Page you can build using
                  Notus React. It features multiple CSS components based on the
                  Tailwind CSS design system. This full description contains all
                  the details that were truncated in the summary section. Here,
                  you can provide a more detailed explanation or additional
                  information about the event.
                </p>
                {/* <div className="w-full md:w-5/12 px-1 mr-auto ml-auto"> */}
                <h3 className="text-3xl mb-2 font-semibold leading-normal">
                  Location
                </h3>
                <p className="text-lg font-normal leading-relaxed mt-2 mb-4 text-blueGray-600">
                  Venue Name, Street Address, City, State, ZIP Code
                </p>
                {/* </div> */}
                {/* <div className="w-full md:w-5/12 px-1 mr-auto ml-auto"> */}
                <h3 className="text-3xl mb-2 font-semibold leading-normal">
                  Date & Time
                </h3>
                <p className="text-lg font-normal leading-relaxed mt-2 mb-4 text-blueGray-600">
                  Saturday, August 12, 7:30 PM to 9:30 PM
                </p>
                {/* </div> */}
                {/* <div className="w-full md:w-5/12 px-1 mr-auto ml-auto"> */}
                <h3 className="text-3xl mb-2 font-semibold leading-normal">
                  Contact Info
                </h3>
                <p className="text-lg font-normal leading-relaxed mt-2 mb-4 text-blueGray-600">
                  Email: example@example.com <br />
                  Phone: (123) 456-7890
                </p>
                {/* </div>  */}
              </div>

              {/* section for the map  */}
              <div className="w-full md:w-4/12 px-4 mr-auto ml-auto">
                <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg bg-lightBlue-500">
                  <iframe
                    title="Event Location Map"
                    width="100%"
                    height="450"
                    frameBorder="0"
                    style={{ border: 0 }}
                    referrerPolicy="no-referrer-when-downgrade"
                    src="https://www.google.com/maps/embed/v1/place?q=place_id:ChIJOwg_06VPwokRYv534QaPC8g&key=YOUR_API_KEY"
                    allowFullScreen
                  ></iframe>
                </div>
              </div>
            </div>
            <div className="flex  mb-3 mt-24 ">
              <h1 className="text-4xl font-bold text-blue-700 ">
                Other Events You May Like
              </h1>
            </div>
            <div className="mt-5">
              <CardEvents />
              <CardEvents />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
