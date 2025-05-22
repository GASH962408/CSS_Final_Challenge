import dots from "../../assets/dots.png"
import "./TableContain.css"

export default function TableContain() {
    return (

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
    )
}
