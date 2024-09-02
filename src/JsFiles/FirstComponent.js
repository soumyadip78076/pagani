import React from 'react';
import carImage from '../images/carimg.png'; // Import the image
import '../CssFiles/FirstComponent.css'; // Use the same CSS file

function FirstComponent() {
  return (
    <div className="first-component">
      <p>THIS IS OUR FIRST INOVATION</p>
      <img src={carImage} alt='Car' /> {/* Use the imported image */}
    </div>
  );
}

export default FirstComponent;

