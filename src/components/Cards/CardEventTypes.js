import React from "react";
import CardEvents from "./CardEvents";

const CardEventTypes = () => {
  const [openTab, setOpenTab] = React.useState(1);
  return (
    <>
       <div className="flex flex-wrap">
        <div className="w-full">
          <ul
            className="flex mb-0 list-none flex-wrap pt-3 pb-4 flex-row"
            role="tablist"
          >
            {[1, 2, 3, 4, 5, 6, 7].map(tabIndex => (
              <li
                key={tabIndex}
                className="-mb-px mr-2 last:mr-0 flex-auto text-center"
              >
                <a
                  className={
                    "text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal " +
                    (openTab === tabIndex
                      ? "text-white bg-indigo-600"
                      : "text-indigo-600 bg-white")
                  }
                  onClick={e => {
                    e.preventDefault();
                    setOpenTab(tabIndex);
                  }}
                  href={`#link${tabIndex}`}
                  role="tablist"
                >
                  Tab {tabIndex}
                </a>
              </li>
            ))}
          </ul>
          <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded">
            <div className="px-4 py-5 flex-auto">
              <div className="tab-content tab-space">
                {[1, 2, 3, 4, 5, 6, 7].map(tabIndex => (
                  <div
                    key={tabIndex}
                    className={openTab === tabIndex ? "block" : "hidden"}
                    id={`link${tabIndex}`}
                  >
                    <p>
                      Content for tab {tabIndex}. Replace this text with
                      your actual content.
                      <br />
                      <br /> More details for tab {tabIndex} can be added here.
                    </p>
                    <CardEvents/>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CardEventTypes;