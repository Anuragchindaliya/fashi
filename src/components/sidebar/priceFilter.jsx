import MultiRangeSlider from "components/common/rangeSlider";
import { useState } from "react";
import "../common/rangeSlider.css";
const PriceFilter = ({ products, filterProductByPrice }) => {
    // const debouncedSave = useCallback(debounce((min, max) => {
    //     filterProductByPrice(min, max)

    // }, 1000), []);
    const [priceRange, setPriceRange] = useState({ min: 0, max: 0 })

    const updatePrice = ({ min, max }) => {
        // filterProductByPrice(min, max);

        // debouncedSave(min, max);

        setPriceRange({ min, max })
        console.log("Every time")
        //  filterProducts(min,max);
    }

    //get maximum price of currently loaded products
    // function getMaximumPrice() {
    //     var maxPrice = 0;
    //     products.forEach((pr) => {

    //         if (pr.prices.sale_price > maxPrice) {
    //             maxPrice = +pr.prices.sale_price;
    //         }

    //     })
    //     return maxPrice;
    // }

    const filterProductByClick = () => {
        filterProductByPrice(priceRange.min, priceRange.max);
    }
    return (
        <>
            <div className="filter-widget">
                <h4 className="fw-title">Price</h4>
                <div className="" style={{ marginBottom: "98px" }}>
                    <MultiRangeSlider
                        min={0}
                        max={35000}
                        onChange={updatePrice}
                        products={products}
                    />
                </div>

                {/* <div className="filter-range-wrap">
                    <div className="range-slider mb-5">
                        <div className="price-input">
                            <input type='text' onInput={handleLowPrice} value={lowPrice} />
                            <input type="number" onChange={event => setHighPrice(event.target.value)} value={highPrice} />
                        </div>
                    </div>
                </div> */}

                <b className="filter-btn btn" onClick={filterProductByClick}>Filter</b>
            </div>
        </>
    )
}

export default PriceFilter
