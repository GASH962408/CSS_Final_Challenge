import user_circle from '../../assets/user_circle.png';
import './infoPanel.css';
import ring from "../../assets/rings.png"
import { FiMoon, FiBell } from 'react-icons/fi';
import { useEffect, useState } from 'react';


export default function InfoPanel() {
  const [darkMode, setDarkmode] = useState(() => {
    const saved = localStorage.getItem("darkMode");
    return saved === "true"; 
  })


  useEffect(() => {
    localStorage.setItem("darkMode", String(darkMode));
    document.documentElement.setAttribute(
      'data-theme',
      darkMode ? 'dark' : 'light'
    );
  }, [darkMode]);

  return (
    <aside className="infopanel">
      <section className="infopanel__user">
        <div className="infopanel__icons">
          <FiBell className="infopanel__icon" />
          <FiMoon
            className="infopanel__icon"
            onClick={() => setDarkmode((prev) => !prev)}
            title="Toggle dark mode"
          />
        </div>
        <div className="infopanel__info">
          <span className="infopanel__name">Name</span>
          <img src={user_circle} alt="User avatar" className="infopanel__avatar" />
        </div>
      </section>

      <section className='infopanel__storage'>
        <div className='infopanel__storage__header'>
          <span>Storage</span>
        </div>

        <div className="infopanel__storage-body">
          <div className="storage-chart__ring">
            <img src={ring} alt="ring" />
            <div className="storage-chart__content">
              <span className="storage-chart__percentage">
                <span >85</span>
                <span>%</span>
              </span>
              <span className="storage-chart__label">Used</span>
            </div>
          </div>
          <p className="storage-chart__footer">
            420.2 GB of 500 GB used
          </p>
        </div>
      </section>


      <section className='infopanel__storage-cards-container'>
        <div className="infopanel__storage-card">
          <div className="infopanel__storage-card-icon"></div>
          <div className="infopanel__storage-card-info">
            <span className="infopanel__storage-card-title">Documents</span>
            <span className="infopanel__storage-card-subtitle">720 files</span>
          </div>
          <button className="infopanel__storage-card-button">200 GB</button>
        </div>

        <div className="infopanel__storage-card">
          <div className="infopanel__storage-card-icon"></div>
          <div className="infopanel__storage-card-info">
            <span className="infopanel__storage-card-title">Documents</span>
            <span className="infopanel__storage-card-subtitle">720 files</span>
          </div>
          <button className="infopanel__storage-card-button">200 GB</button>
        </div>

        <div className="infopanel__storage-card">
          <div className="infopanel__storage-card-icon"></div>
          <div className="infopanel__storage-card-info">
            <span className="infopanel__storage-card-title">Documents</span>
            <span className="infopanel__storage-card-subtitle">720 files</span>
          </div>
          <button className="infopanel__storage-card-button">200 GB</button>
        </div>

        <div className="infopanel__storage-card">
          <div className="infopanel__storage-card-icon"></div>
          <div className="infopanel__storage-card-info">
            <span className="infopanel__storage-card-title">Documents</span>
            <span className="infopanel__storage-card-subtitle">720 files</span>
          </div>
          <button className="infopanel__storage-card-button">200 GB</button>
        </div>
      </section>

      <section className="infopanel__upgrade">
        <div className="infopanel__upgrade-content">
          <div className="infopanel__upgrade-image" />
          <h1 className="infopanel__upgrade-title">Buy more space now!</h1>
          <p className="infopanel__upgrade-subtitle">Upgrade to cloud premium</p>
          <button className="infopanel__upgrade-button">Upgrade Account!</button>
        </div>
      </section>
    </aside >
  );
}

