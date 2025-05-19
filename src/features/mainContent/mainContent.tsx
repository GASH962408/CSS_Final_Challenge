import './mainContent.css';
import CardsUsed from './CardsUsed';
import TableContain from './TableContain';
import CardsShared from './CardsShared';

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
      <CardsUsed />
      <section className='recent-files-header'>
        <h1 className='recent_title'>Recent Files</h1>
        <span className='recent_subtitle'>View All</span>
      </section>
      <TableContain />
      <section className='share-header'>
        <h1 className='share_title'>Share with me</h1>
        <span className='share_subtitle'>View All</span>
      </section>
      <CardsShared />


    </main >
  );
}
