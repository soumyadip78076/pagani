import React from 'react';
import '../CssFiles/SecondComponeent.css'; // Use the same CSS file
import carImage from '../images/carimgg.png'
function SecondComponent() {
  return (
    <div className="second-component">
       <p>VEXUX 1000 XUV</p>
       <img src={carImage} alt='Car' />
    </div>
  );
}

export default SecondComponent;
