import React from 'react';
import rec from '../../assets/rec.png';
import user_circle from '../../assets/user_circle.png';
import './infoPanel.css';

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
        <div className='infopanel__storage__information'>
        </div>
      </section>

    </aside>
  );
}

