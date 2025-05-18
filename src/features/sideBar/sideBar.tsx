import "./sideBar.css"
import SideBarMenu from "./SideBarMenu";


export default function Sidebar() {
  return (
    <aside className="sidebar">
      <section className="sidebar__top">
        <div className="sidebar__logo">
        </div>
      </section>
      <SideBarMenu/>
      <section className="sidebar__footer">
        <button className="sidebar__create-button">
          <span className="sidebar__create-text">Create New</span>
          <span className="sidebar__create-icon">+</span>
        </button>
      </section>
    </aside>
  );
}
