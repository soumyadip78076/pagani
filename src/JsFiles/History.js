import React, { useState, useEffect } from 'react';
import '../CssFiles/History.css';

// Import your two components
import FirstComponent from './FirstComponent';
import SecondComponent from './SecondComponent';

const History = () => {
  const [currentComponent, setCurrentComponent] = useState(0);
  const [showIndicator, setShowIndicator] = useState(true); // State to control indicator visibility

  // Handle scrolling
  useEffect(() => {
    const handleScroll = (e) => {
      if (e.deltaY > 0) {
        // Scrolling down
        if (currentComponent === 0) {
          setCurrentComponent(1);
          setShowIndicator(false); // Hide indicator when scrolling down
        }
      } else if (e.deltaY < 0) {
        // Scrolling up
        if (currentComponent === 1) {
          setCurrentComponent(0);
          setShowIndicator(true); // Show indicator when scrolling up
        }
      }
    };

    window.addEventListener('wheel', handleScroll);
    return () => window.removeEventListener('wheel', handleScroll);
  }, [currentComponent]);

  return (
    <div className="history-container">
      {currentComponent === 0 && <FirstComponent />}
      {currentComponent === 1 && <SecondComponent />}

      {showIndicator && (
        <div className="scroll-indicators">
          <div className="mouse">
            <p>SCROLL DOWN</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default History;
