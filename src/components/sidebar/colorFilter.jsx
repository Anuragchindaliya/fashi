import React from 'react'

const ColorFilter = () => {
    return (
        <>
            <div className="filter-widget">
                <h4 className="fw-title">Color</h4>
                <div className="fw-color-choose">
                    <div className="cs-item">
                        <input type="radio" id="cs-black" />
                        <label className="cs-black" htmlFor="cs-black">Black</label>
                    </div>
                    <div className="cs-item">
                        <input type="radio" id="cs-violet" />
                        <label className="cs-violet" htmlFor="cs-violet">Violet</label>
                    </div>
                    <div className="cs-item">
                        <input type="radio" id="cs-blue" />
                        <label className="cs-blue" htmlFor="cs-blue">Blue</label>
                    </div>
                    <div className="cs-item">
                        <input type="radio" id="cs-yellow" />
                        <label className="cs-yellow" htmlFor="cs-yellow">Yellow</label>
                    </div>
                    <div className="cs-item">
                        <input type="radio" id="cs-red" />
                        <label className="cs-red" htmlFor="cs-red">Red</label>
                    </div>
                    <div className="cs-item">
                        <input type="radio" id="cs-green" />
                        <label className="cs-green" htmlFor="cs-green">Green</label>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ColorFilter;
