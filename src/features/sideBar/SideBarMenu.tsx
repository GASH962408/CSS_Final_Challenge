import "./SideBarMenu.css"
import { FiHome, FiFolder, FiClock, FiUsers, FiUploadCloud, FiTrash } from "react-icons/fi";

export default function SideBarMenu() {
    return (
        <nav className="sidebar__menu">
            <ul className="sidebar__list">
                <li className="sidebar__item">
                    <FiHome className="sidebar__icon" />
                    Home
                </li>
                <li className="sidebar__item">
                    <FiFolder className="sidebar__icon" />
                    My Files
                </li>
                <li className="sidebar__item">
                    <FiClock className="sidebar__icon" />
                    Recent Files
                </li>
                <li className="sidebar__item">
                    <FiUsers className="sidebar__icon" />
                    Shared Files
                </li>
                <li className="sidebar__item">
                    <FiUploadCloud className="sidebar__icon" />
                    File Request
                </li>
                <li className="sidebar__item">
                    <FiTrash className="sidebar__icon" />
                    Trash
                </li>
            </ul>
        </nav>
    )
}
