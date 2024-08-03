import React, { useState } from 'react';
import '../../assets/styles/style.css'; // Create this CSS file for styling
import searchIcon from '../../assets/img/search.png';

const SearchBar = () => {
  const [eventType, setEventType] = useState('');
  const [location, setLocation] = useState('');
  const [date, setDate] = useState('');

  const handleSearch = () => {
    // Handle the search logic here
    console.log('Searching for:', { eventType, location, date });
  };

  return (
    <div className="search-bar">
      <div className="search-field ">
        <label className="search-label">Event Type</label>
        <select
          value={eventType}
          onChange={(e) => setEventType(e.target.value)}
          className="search-select cursor-pointer "
        >
          <option value="">Choose event type</option>
          <option value="conference">Conference</option>
          <option value="workshop">Workshop</option>
          <option value="networking">Networking</option>
          <option value="festival">Festival</option>
        </select>
      </div>

      <div className="search-field">
        <label className="search-label">Location</label>
        <select
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          className="search-select cursor-pointer"
        >
          <option value="">Choose location</option>
          <option value="new-york">New York</option>
          <option value="san-francisco">San Francisco</option>
          <option value="los-angeles">Los Angeles</option>
          <option value="chicago">Chicago</option>
        </select>
      </div>

      <div className="search-field">
        <label className="search-label">Date</label>
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          className="search-select cursor-pointer"
        />
      </div>

      <button onClick={handleSearch} className="search-button">
        <img src={searchIcon} alt="search" />
      </button>
    </div>
  );
};

export default SearchBar;
