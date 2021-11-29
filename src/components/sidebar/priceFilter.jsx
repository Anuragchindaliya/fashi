import MultiRangeSlider from "components/common/rangeSlider";
import { debounce } from "lodash";
import { useCallback, useState } from "react";
import "../common/rangeSlider.css";
const PriceFilter = () => {
    const [lowPrice, setLowPrice] = useState(0);
    const [highPrice, setHighPrice] = useState(1000);
    const debouncedSave = useCallback(debounce((min, max) =>
        console.log(min, max), 1000), []);
    const updatePrice = ({ min, max }) => {
        setLowPrice(min);
        setHighPrice(max);
        debouncedSave(min, max);
    }

    const handleLowPrice = (event) => {
        setLowPrice(parseInt(event.target.value));
    }
    return (
        <>
            <div className="filter-widget">
                <h4 className="fw-title">Price</h4>
                <div className="filter-range-wrap">
                    <div className="range-slider mb-5">
                        <div className="price-input">
                            <input type='text' onInput={handleLowPrice} value={lowPrice} />
                            <input type="number" onChange={event => setHighPrice(event.target.value)} value={highPrice} />
                        </div>
                    </div>
                    <div className="" style={{ marginBottom: "90px" }}>
                        <MultiRangeSlider
                            min={0}
                            max={1000}
                            onChange={updatePrice}
                        />
                    </div>
                </div>
                <a href="/#" className="filter-btn">Filter</a>
            </div>
        </>
    )
}

export default PriceFilter
