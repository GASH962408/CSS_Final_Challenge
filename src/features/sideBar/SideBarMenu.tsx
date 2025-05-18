import "./SideBarMenu.css"

export default function SideBarMenu() {
    return (
        <nav className="sidebar__menu">
            <ul className="sidebar__list">
                <li className="sidebar__item">
                    <span className="sidebar__icon" />
                    Home
                </li>
                <li className="sidebar__item">
                    <span className="sidebar__icon" />
                    My Files
                </li>
                <li className="sidebar__item">
                    <span className="sidebar__icon" />
                    Recent Files
                </li>
                <li className="sidebar__item">
                    <span className="sidebar__icon" />
                    Shared Files
                </li>
                <li className="sidebar__item">
                    <span className="sidebar__icon" />
                    File Request
                </li>
                <li className="sidebar__item">
                    <span className="sidebar__icon" />
                    Trash
                </li>
            </ul>
        </nav>
    )
}
