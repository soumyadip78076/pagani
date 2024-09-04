import React, { useState, useEffect, useRef } from 'react';
import close from '../images/close.png';
import menu from '../images/menu.png';
import { NavLink } from 'react-router-dom'; 
import '../CssFiles/Sidebar.css';

function Sidebar() {
  const [sidebarVisible, setSidebarVisible] = useState(false);
  const sidebarRef = useRef(null);

  const toggleSidebar = () => {
    setSidebarVisible(prevState => !prevState);
  };

  const handleClickOutside = (event) => {
    if (sidebarRef.current && !sidebarRef.current.contains(event.target) && !event.target.closest('.ToggleButton')) {
      setSidebarVisible(false);
    }
  };

  const handleMenuClick = () => {
    setSidebarVisible(false);
  };

  useEffect(() => {
    // Add event listener to handle click outside
    document.addEventListener('mousedown', handleClickOutside);

    // Clean up event listener on component unmount
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className='Body'>
      <button className='ToggleButton' onClick={toggleSidebar}>
        <img 
          src={sidebarVisible ? close : menu} 
          alt={sidebarVisible ? 'Close Sidebar' : 'Open Sidebar'}
          className='ToggleIcon'
        />
      </button>

      <div 
        className={`Sidebar ${sidebarVisible ? 'visible' : ''}`} 
        ref={sidebarRef}
      >
        <ul>
          <li><NavLink to="/home" onClick={handleMenuClick}>HOME</NavLink></li>
          <li><NavLink to="/history" onClick={handleMenuClick}>HISTORY</NavLink></li>
          <li><NavLink to="/hypercars" onClick={handleMenuClick}>HYPERCARS</NavLink></li>
          <li><NavLink to="/dealers" onClick={handleMenuClick}>DEALERS</NavLink></li>
          <li><NavLink to="/visit" onClick={handleMenuClick}>VISIT US</NavLink></li>
          <li><NavLink to="/contact" onClick={handleMenuClick}>CONTACT</NavLink></li>
          <li><NavLink to="/carrear" onClick={handleMenuClick}>JOB OPPORTUNITIES</NavLink></li>
          <li><NavLink to="/store" onClick={handleMenuClick}>PAGANI STORE</NavLink></li>
        </ul>
        <img 
          src="https://cdn.worldvectorlogo.com/logos/pagani-flat-emblem-.svg" 
          alt="Pagani Logo" 
        />
        <div className='login'>
          <NavLink to="/login"><p>Login/Register</p></NavLink>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
