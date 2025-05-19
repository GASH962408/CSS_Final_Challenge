import './mainContent.css';
import circle_main from "../../assets/circle_main.png"
import dots from "../../assets/dots.png"
import orange from "../../assets/orange.png"
import "./CardsUsed.css"


export default function CardsUsed() {
    return (
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
                    <h2 className="card__title">Project:fitbit</h2>
                    <p className="card__date">Created: 28.02.2020</p>
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
                    <h2 className="card__title">Client Documents</h2>
                    <p className="card__date">Created: 4.03.2020</p>
                </div>
            </div>
        </section>
    )
}