import React from "react"

const SortProductsFilter = ({ handleSorting }) => {
    return (
        <div className="col-lg-7 col-md-7">
            <div className="select-option p-show">
                <select className="sorting" onChange={handleSorting}>
                    <option value>Default Sorting</option>
                    <option value="priceLowtoHigh">Price Low to High</option>
                    <option value="priceHightoLow">Price High to Low</option>
                    <option value="newestFirst">Newest first</option>
                </select>
            </div>
        </div >

    )
}

export default SortProductsFilter
