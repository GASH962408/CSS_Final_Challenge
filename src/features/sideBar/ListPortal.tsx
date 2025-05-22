import "./ListPortal.css"

export default function ListPortal() {
    return (
        <div
            className="list__container"
        >
            <ul className="list__items">
                <li className="list__item">
                    <span className="list__icon" />
                    <span>Upload files</span>
                </li>
                <li className="list__item">
                    <span className="list__icon" />
                    <span>Upload folder</span>
                </li>
                <li className="list__item">
                    <span className="list__icon" />
                    <span>New folder</span>
                </li>
                <li className="list__item">
                    <span className="list__icon" />
                    <span>More</span>
                </li>
            </ul>
        </div>
    )
}
