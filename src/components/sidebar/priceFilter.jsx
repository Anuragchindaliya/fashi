import MultiRangeSlider from "components/common/rangeSlider";
import { debounce } from "lodash";
import { useCallback } from "react";
import "../common/rangeSlider.css";
const PriceFilter = ({ products, priceFilter }) => {
    const debouncedSave = useCallback(debounce((min, max) =>
        // priceFilter(min, max)
        console.log("hellos")
        , 1000), []);
    const updatePrice = ({ min, max }) => {
        priceFilter(min, max);
        debouncedSave(min, max);
        //  filterProducts(min,max);
    }

    //get maximum price of currently loaded products
    function getMaximumPrice() {
        var maxPrice = 0;
        products.map((pr) => {

            if (pr.prices.sale_price > maxPrice) {
                maxPrice = +pr.prices.sale_price;
            }

        })
        return maxPrice;
    }
    // console.log("products ", getMaximumPrice());
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
                
                <a href="/#" className="filter-btn">Filter</a>
            </div>
        </>
    )
}

export default PriceFilter
