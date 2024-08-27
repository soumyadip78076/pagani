import React, { useState, useEffect, useRef } from 'react';
import '../CssFiles/MainPageCss.css';
import carImage from '../images/car.png';
import close from '../images/close.png';
import menu from '../images/menu.png';
import Loader from './Loader'; // Import the Loader component

function MainPage() {
  const [sidebarVisible, setSidebarVisible] = useState(false);
  const [loading, setLoading] = useState(true); // Add state to manage loading
  const sidebarRef = useRef(null);

  const toggleSidebar = () => {
    setSidebarVisible(prevState => !prevState);
  };

  const handleClickOutside = (event) => {
    if (sidebarRef.current && !sidebarRef.current.contains(event.target) && !event.target.closest('.ToggleButton')) {
      setSidebarVisible(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => setLoading(false), 3000); // 3 seconds delay
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {loading && <Loader />} {/* Show loader while loading is true */}
      <div className='Body'>
        {/* Toggle Button */}
        <button className='ToggleButton' onClick={toggleSidebar}>
          <img 
            src={sidebarVisible ? close : menu} 
            alt={sidebarVisible ? 'Close Sidebar' : 'Open Sidebar'}
            className='ToggleIcon'
          />
        </button>
        
        {/* Sidebar */}
        <div 
          className={`Sidebar ${sidebarVisible ? 'visible' : ''}`} 
          ref={sidebarRef}
        >
          <ul>
            <li><a href="#home">HOME</a></li>
            <li><a href="#history">HISTORY</a></li>
            <li><a href="#hypercars">HYPERCARS</a></li>
            <li><a href="#dealers">DEALERS</a></li>
            <li><a href="#visit">VISIT US</a></li>
            <li><a href="#contact">CONTACT</a></li>
            <li><a href="#carrear">JOB OPPORTUNITES</a></li>
            <li><a href="#store">PAGANI store</a></li>
          </ul>
        </div>

        <div className='Header'>
          <p>XENNA</p>
        </div>

        <div className='Image_Contaoiner'>
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
