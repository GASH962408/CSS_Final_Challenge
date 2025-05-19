import './App.css';
import InfoPanel from './features/infoPanel/infoPanel';
import MainContent from './features/mainContent/mainContent';
import SideBar from './features/sideBar/sideBar';
import { FiMenu } from 'react-icons/fi';
import { useState, useEffect } from 'react';

function App() {
  const [width, setWidth] = useState(window.innerWidth);
  const [showSidebar, setShowSidebar] = useState(false);
  const [showInfoPanel, setShowInfoPanel] = useState(false);

  const isMobile = width <= 480;
  const isTablet = width <= 768;

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
      if (window.innerWidth > 768) {
        setShowInfoPanel(false);
      }
      if (window.innerWidth > 480) {
        setShowSidebar(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <>
      {isMobile && (
        <button
          className="hamburger hamburger--left"
          onClick={() => setShowSidebar((prev) => !prev)}
        >
          <FiMenu size={24} />
        </button>
      )}

      {isTablet && (
        <button
          className="hamburger hamburger--right"
          onClick={() => setShowInfoPanel((prev) => !prev)}
        >
          <FiMenu size={24} />
        </button>
      )}

      <div className="app-container">
        {(showSidebar || !isMobile) && (
          <div className={`overlay sidebar-overlay ${isMobile ? 'overlay--active' : ''}`}>
            <SideBar />
          </div>
        )}
        <MainContent />
        {(showInfoPanel || !isTablet) && (
          <div className={`overlay infopanel-overlay ${isTablet ? 'overlay--active' : ''}`}>
            <InfoPanel />
          </div>
        )}
      </div>
    </>
  );
}

export default App;
