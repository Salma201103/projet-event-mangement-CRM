import React from "react";
import CardEvents from "./CardEvents";
// import './CardEventTypes.css';

// Array of tab names
const tabNames = [
  "Conference",
  "Corporate",
  "Social",
  "Cultural",
  "Sports",
  "Charity",
  "Education",
  "Community",
   "Virtual"
];

// Array of tab contents
const tabContents = [
  " Business conferences, educational seminars, industry workshops, and networking events that bring professionals together to share knowledge and make connections.",
  "Company meetings, product launches, team-building activities, and corporate parties designed to enhance business operations and employee engagement.",
  "Celebratory events such as weddings, birthday parties, anniversaries, and family reunions where people gather to mark significant personal milestones.",
  "Events like festivals, concerts, theater performances, and art exhibitions that highlight and celebrate cultural expressions and creativity.",
  "Athletic events including marathons, tournaments, sports matches, and fitness classes that promote physical activity and competition.",
  "Fundraising galas, charity runs, auctions, and benefit concerts organized to raise awareness and funds for various causes and non-profit organizations.",
  "Workshops, training sessions, certification programs, and online webinars focused on providing learning opportunities and professional development.",
  "Local gatherings, neighborhood events, public forums, and support group meetings that foster community engagement and strengthen local connections.",
  "Online events such as webinars, virtual conferences, online workshops, and digital meetups that allow participants to engage and interact from anywhere in the world."

];

const CardEventTypes = () => {
  const [openTab, setOpenTab] = React.useState(0);

  return (
    <>
      <div className="flex flex-wrap">
        <div className="w-full">
          <ul
            className="flex mb-0 list-none flex-wrap pt-3 pb-4 flex-row"
            role="tablist"
          >
            {tabNames.map((tabName, tabIndex) => (
              <li
                key={tabIndex}
                className="-mb-px mr-2 last:mr-0 flex-auto text-center"
              >
                <a
                  className={`tab-button ${
                    openTab === tabIndex ? 'active' : 'inactive'
                  }`}
                  onClick={e => {
                    e.preventDefault();
                    setOpenTab(tabIndex);
                  }}
                  href={`#link${tabIndex}`}
                  role="tablist"
                >
                  {tabName}
                </a>
              </li>
            ))}
          </ul>
          <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded">
            <div className="px-4 py-5 flex-auto">
              <div className="tab-content tab-space">
                {tabContents.map((content, tabIndex) => (
                  <div
                    key={tabIndex}
                    className={openTab === tabIndex ? "block" : "hidden"}
                    id={`link${tabIndex}`}
                  >
                    <p>
                      {content}
                    </p>
                    <br/>
                    <CardEvents />
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
