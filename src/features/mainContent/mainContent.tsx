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

      <section className='Recent-files-header'>
        <h1 className='recent_title'>Recent Files</h1>
        <span className='recent_subtitle'>View All</span>
      </section>

      <section className="table-container">
        <table className="table">
          <thead className="table__header">
            <tr className="table__row table__row--header">
              <th className="table__cell table__cell--name">Name</th>
              <th className="table__cell table__cell--members">Members</th>
              <th className="table__cell table__cell--modified">Last Modified</th>
              <th className="table__cell table__cell--actions"></th>
            </tr>
          </thead>
          <tbody className="table__body">
            <tr className="table__row">
              <td className="table__cell table__cell--name">
                <div className="table__name-group">
                  <div className="table__icon"></div>
                  <span className="table__title">Travel Landing Page</span>
                </div>
              </td>
              <div className='cell-mem'>
                <td className="table__cell table__cell_members">5 members</td>
              </div>
              <td className="table__cell table__cell--modified">Mar 8, 2020</td>
              <td className="table__cell table__cell--actions">
                <img src={dots} alt="options" className="table__dots" />
              </td>
            </tr>

            <tr className="table__row">
              <td className="table__cell table__cell--name">
                <div className="table__name-group">
                  <div className="table__icon"></div>
                  <span className="table__title">True Photos</span>
                </div>
              </td>
              <div className='cell-mem'>
                <td className="table__cell table__cell_members">12 members</td>
              </div>
              <td className="table__cell table__cell--modified">Mar 8, 2020</td>
              <td className="table__cell table__cell--actions">
                <img src={dots} alt="options" className="table__dots" />
              </td>
            </tr>

            <tr className="table__row">
              <td className="table__cell table__cell--name">
                <div className="table__name-group">
                  <div className="table__icon"></div>
                  <span className="table__title">Dashboard Structure</span>
                </div>
              </td>
              <div className='cell-mem'>
                <td className="table__cell table__cell_members">10 members</td>
              </div>
              <td className="table__cell table__cell--modified">Mar 9, 2020</td>
              <td className="table__cell table__cell--actions">
                <img src={dots} alt="options" className="table__dots" />
              </td>
            </tr>

            <tr className="table__row">
              <td className="table__cell table__cell--name">
                <div className="table__name-group">
                  <div className="table__icon"></div>
                  <span className="table__title">Character Ilustration</span>
                </div>
              </td>
              <div className='cell-mem'>
                <td className="table__cell table__cell_members">3 members</td>
              </div>
              <td className="table__cell table__cell--modified">Mar 10, 2020</td>
              <td className="table__cell table__cell--actions">
                <img src={dots} alt="options" className="table__dots" />
              </td>
            </tr>
          </tbody>
        </table>
      </section>

      <section className='share-header'>
        <h1 className='share_title'>Share with me</h1>
        <span className='share_subtitle'>View All</span>
      </section>


      <section className='cards-shared-container'>
        <div className='card-shared'>
          <div className='shared-header'>
            <div className='orange-rect'></div>
            <div className='circles-wrapper'>
              <div className='circle circle--green'></div>
              <div className='circle circle--red'></div>
            </div>
          </div>
          <div className='shared-bottom'>
            <h1>Landing Page</h1>
            <span>Created:20.02.2020</span>
          </div>
        </div>

        <div className='card-shared'>
          <div className='shared-header'>
            <div className='orange-rect'></div>
            <div className='circles-wrapper'>
              <div className='circle circle--green'></div>
              <div className='circle circle--red'></div>
            </div>
          </div>
          <div className='shared-bottom'>
            <h1>Landing Page</h1>
            <span>Created:20.02.2020</span>
          </div>
        </div>

        <div className='card-shared'>
          <div className='shared-header'>
            <div className='orange-rect'></div>
            <div className='circles-wrapper'>
              <div className='circle circle--green'></div>
              <div className='circle circle--red'></div>
            </div>
          </div>
          <div className='shared-bottom'>
            <h1>Landing Page</h1>
            <span>Created:20.02.2020</span>
          </div>
        </div>
      </section>

    </main >
  );
}
