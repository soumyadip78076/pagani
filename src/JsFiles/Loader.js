// src/Loader.js
import React from 'react';
import '../CssFiles/Loadercss.css'; // Make sure to create this CSS file for styling the loader

function Loader() {
  return (
    <div className="loader-overlay">
      <div className="loader">
        <div className="dot"></div>
        <div className="dot"></div>
        <div className="dot"></div>
        <div className="dot"></div>
      </div>
    </div>
  );
}

export default Loader;
