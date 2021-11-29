import React from 'react'

const BrandsFilter = () => {
    return (
        <>
            <div className="filter-widget">
                <h4 className="fw-title">Brand</h4>
                <div className="fw-brand-check">
                    <div className="bc-item">
                        <label htmlFor="bc-calvin">
                            Calvin Klein
                            <input type="checkbox" id="bc-calvin" />
                            <span className="checkmark" />
                        </label>
                    </div>
                    <div className="bc-item">
                        <label htmlFor="bc-diesel">
                            Diesel
                            <input type="checkbox" id="bc-diesel" />
                            <span className="checkmark" />
                        </label>
                    </div>
                    <div className="bc-item">
                        <label htmlFor="bc-polo">
                            Polo
                            <input type="checkbox" id="bc-polo" />
                            <span className="checkmark" />
                        </label>
                    </div>
                    <div className="bc-item">
                        <label htmlFor="bc-tommy">
                            Tommy Hilfiger
                            <input type="checkbox" id="bc-tommy" />
                            <span className="checkmark" />
                        </label>
                    </div>
                </div>
            </div>
        </>
    )
}

export default BrandsFilter;
