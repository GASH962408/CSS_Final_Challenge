import "./SideBarMenu.css"
import { FiHome, FiFolder, FiClock, FiUsers, FiUploadCloud, FiTrash } from "react-icons/fi";
import Substract from "../../assets/Subtract.png"
export default function SideBarMenu() {
    return (
        <nav className="sidebar__menu">
            <ul className="sidebar__list">
                <li className="sidebar__item">
                    <img src={Substract} alt="" className="sidebar__marker" />
                    <FiHome className="sidebar__icon" />
                    Home
                </li>
                <li className="sidebar__item">
                    <img src={Substract} alt="" className="sidebar__marker" />
                    <FiFolder className="sidebar__icon" />
                    My Files
                </li>
                <li className="sidebar__item">
                    <img src={Substract} alt="" className="sidebar__marker" />
                    <FiClock className="sidebar__icon" />
                    Recent Files
                </li>
                <li className="sidebar__item">
                    <img src={Substract} alt="" className="sidebar__marker" />
                    <FiUsers className="sidebar__icon" />
                    Shared Files
                </li>
                <li className="sidebar__item">
                    <img src={Substract} alt="" className="sidebar__marker" />
                    <FiUploadCloud className="sidebar__icon" />
                    File Request
                </li>
                <li className="sidebar__item">
                    <img src={Substract} alt="" className="sidebar__marker" />
                    <FiTrash className="sidebar__icon" />
                    Trash
                </li>
            </ul>
        </nav>
    )
}
