import React from 'react';
import './mainContent.css';
import circle_main from "../../assets/circle_main.png"
import dots from "../../assets/dots.png"
import orange from "../../assets/orange.png"

export default function MainContent() {
  return (
    <main className="main-container">

      <section className="main-content__input">
        <form className="main-content__search-form">
          <div className="main-content__search-box">
            <span className="main-content__search-icon" />
            <span className="main-content__search-placeholder">Search</span>
          </div>
        </form>
      </section>

      <section className="main-content__recently-header">
        <h1 className="main-content__recently-header-title">Recently Used</h1>
        <div className="main-content__recently-header-icons">
          <span className="main-content__recently-header-icon" />
          <span className="main-content__recently-header-icon" />
        </div>
      </section>

      <section className="main-content__cards">
        <div className="card">
          <div className="card__top">
            <div className="card__icons">
              <img src={orange} alt="" className="card__icon-background" />
            </div>
            <div className="card__avatars">
              <img src={circle_main} alt="" className="card__avatar" />
              <img src={circle_main} alt="" className="card__avatar" />
            </div>
            <img src={dots} alt="options" className="card__menu-icon" />
          </div>

          <div className="card__bottom">
            <h2 className="card__title">App Project</h2>
            <p className="card__date">Created: 20.02.2020</p>
          </div>
        </div>

                <div className="card">
          <div className="card__top">
            <div className="card__icons">
              <img src={orange} alt="" className="card__icon-background" />
            </div>
            <div className="card__avatars">
              <img src={circle_main} alt="" className="card__avatar" />
              <img src={circle_main} alt="" className="card__avatar" />
            </div>
            <img src={dots} alt="options" className="card__menu-icon" />
          </div>

          <div className="card__bottom">
            <h2 className="card__title">App Project</h2>
            <p className="card__date">Created: 20.02.2020</p>
          </div>
        </div>

                <div className="card">
          <div className="card__top">
            <div className="card__icons">
              <img src={orange} alt="" className="card__icon-background" />
            </div>
            <div className="card__avatars">
              <img src={circle_main} alt="" className="card__avatar" />
              <img src={circle_main} alt="" className="card__avatar" />
            </div>
            <img src={dots} alt="options" className="card__menu-icon" />
          </div>

          <div className="card__bottom">
            <h2 className="card__title">App Project</h2>
            <p className="card__date">Created: 20.02.2020</p>
          </div>
        </div>

      </section>

    </main>
  );
}
