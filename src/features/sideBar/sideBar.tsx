import "./sideBar.css"
import SideBarMenu from "./SideBarMenu";
import ListPortal from "./ListPortal";
import { useState } from "react";


export default function Sidebar() {
  const [ListPort, setListPort] = useState(false)
  return (
    <aside className="sidebar">
      <section className="sidebar__top">
        <div className="sidebar__logo">
        </div>
      </section>
      <SideBarMenu />
      <section className="sidebar__footer">
        {ListPort && <ListPortal /> }
        <button className="sidebar__create-button" onClick={() => setListPort(prev => !prev)}>
          <span className="sidebar__create-text">Create New</span>
          <span className="sidebar__create-icon">+</span>
        </button>
      </section>
    </aside>
  );
}
