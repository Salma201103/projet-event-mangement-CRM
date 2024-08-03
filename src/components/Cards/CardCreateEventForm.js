export default function CardCreateEventForm() {
  return (
    <>
      <div className="flex flex-wrap justify-center">
        <div className="w-full lg:w-6/12 px-4">
          <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-200">
            <div className="flex-auto p-5 lg:p-10">
              <h4 className="text-2xl font-semibold">Create Event</h4>

              {/* Event Name and Event Type */}
              <div className="flex w-full mb-3 mt-8">
                <div className="w-1/2 mr-2">
                  <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2" htmlFor="event-name">
                    Event Name
                  </label>
                  <input
                    type="text"
                    id="event-name"
                    className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                    placeholder="Event Name"
                  />
                </div>
                <div className="w-1/2 ml-2">
                  <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2" htmlFor="event-type">
                    Event Type
                  </label>
                  <input
                    type="text"
                    id="event-type"
                    className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                    placeholder="Event Type"
                  />
                </div>
              </div>

              {/* Event Price and Event Location */}
              <div className="flex w-full mb-3 mt-8">
                <div className="w-1/2 mr-2">
                  <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2" htmlFor="event-price">
                    Event Price
                  </label>
                  <input
                    type="text"
                    id="event-price"
                    className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                    placeholder="Event Price"
                  />
                </div>
                <div className="w-1/2 ml-2">
                  <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2" htmlFor="event-location">
                    Event Location
                  </label>
                  <input
                    type="text"
                    id="event-location"
                    className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                    placeholder="Event Location"
                  />
                </div>
              </div>

              {/* Start Date and End Date */}
              <div className="flex w-full mb-3 mt-8">
                <div className="w-1/2 mr-2">
                  <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2" htmlFor="start-date">
                    Start Date
                  </label>
                  <input
                    type="text"
                    id="start-date"
                    className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                    placeholder="Start Date"
                  />
                </div>
                <div className="w-1/2 ml-2">
                  <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2" htmlFor="end-date">
                    End Date
                  </label>
                  <input
                    type="text"
                    id="end-date"
                    className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                    placeholder="End Date"
                  />
                </div>
              </div>

              {/* Start Time and End Time */}
              <div className="flex w-full mb-3 mt-8">
                <div className="w-1/2 mr-2">
                  <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2" htmlFor="start-time">
                    Start Time
                  </label>
                  <input
                    type="text"
                    id="start-time"
                    className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                    placeholder="Start Time"
                  />
                </div>
                <div className="w-1/2 ml-2">
                  <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2" htmlFor="end-time">
                    End Time
                  </label>
                  <input
                    type="text"
                    id="end-time"
                    className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                    placeholder="End Time"
                  />
                </div>
              </div>

              {/* Image Upload */}
              <div className="relative w-full mb-3 mt-8">
                <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2" htmlFor="event-image">
                  Event Image
                </label>
                <input
                  type="file"
                  id="event-image"
                  className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                />
              </div>

              {/* Description */}
              <div className="relative w-full mb-3">
                <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2" htmlFor="description">
                  Description
                </label>
                <textarea
                  id="description"
                  rows="4"
                  cols="80"
                  className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full"
                  placeholder="Type a message..."
                />
              </div>
              <div className="text-center mt-6">
                <button
                  className="bg-blueGray-800 text-white active:bg-blueGray-600 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                  type="button"
                >
                  Create Event
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
