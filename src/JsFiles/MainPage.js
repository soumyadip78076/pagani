import React, { useState, useEffect } from 'react';
import '../CssFiles/MainPageCss.css';
import carImage from '../images/car.png';
import Loader from './Loader'; // Import the Loader component
function MainPage() {
  const [loading, setLoading] = useState(true); // Add state to manage loading

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => setLoading(false), 3000); // 3 seconds delay
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {loading && <Loader />} {/* Show loader while loading is true */}
      <div className='Body'>
        <div className='Header'>
          <p>PAGANI</p>
        </div>
        
        <div className='Image_Container'>
          <img src={carImage} alt="Car" />
          <div className='Text_over_Image'>
            <h1>Coming Soon</h1>
            <p>ACT THREE, SCENE TWO: PAGANI UTOPIA ROADSTER.</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default MainPage;
