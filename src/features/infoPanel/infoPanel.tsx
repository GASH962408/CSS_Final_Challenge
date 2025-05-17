import React from 'react';
import rec from '../../assets/rec.png';
import user_circle from '../../assets/user_circle.png';
import './infoPanel.css';
import ring from "../../assets/rings.png"

export default function InfoPanel() {
  return (
    <aside className="infopanel">
      <section className="infopanel__user">
        <div className="infopanel__icons">
          <img src={rec} alt="notifications" className="infopanel__icon" />
          <img src={rec} alt="notification" className="infopanel__icon" />
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
              <span className="storage-chart__percentage">85%</span>
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

      

    </aside >
  );
}

