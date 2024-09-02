import React from 'react';
import '../CssFiles/Loadercss.css'; // Import the Loader CSS file

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
