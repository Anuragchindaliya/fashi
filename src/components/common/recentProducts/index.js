const RecentProducts = ()=>{
    return (
        <>
            <div className="col-lg-3">
        <div className="filter-widget">
          <h4 className="fw-title">Categories</h4>
          <ul className="filter-catagories">
            <li><a href="/#">Men</a></li>
            <li><a href="/#">Women</a></li>
            <li><a href="/#">Kids</a></li>
          </ul>
        </div>
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
        <div className="filter-widget">
          <h4 className="fw-title">Price</h4>
          <div className="filter-range-wrap">
            <div className="range-slider">
              <div className="price-input">
                <input type="text" id="minamount" />
                <input type="text" id="maxamount" />
              </div>
            </div>
            <div className="price-range ui-slider ui-corner-all ui-slider-horizontal ui-widget ui-widget-content" data-min={33} data-max={98}>
              <div className="ui-slider-range ui-corner-all ui-widget-header" />
              <span tabIndex={0} className="ui-slider-handle ui-corner-all ui-state-default" />
              <span tabIndex={0} className="ui-slider-handle ui-corner-all ui-state-default" />
            </div>
          </div>
          <a href="/#" className="filter-btn">Filter</a>
        </div>
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
        <div className="filter-widget">
          <h4 className="fw-title">Size</h4>
          <div className="fw-size-choose">
            <div className="sc-item">
              <input type="radio" id="s-size" />
              <label htmlFor="s-size">s</label>
            </div>
            <div className="sc-item">
              <input type="radio" id="m-size" />
              <label htmlFor="m-size">m</label>
            </div>
            <div className="sc-item">
              <input type="radio" id="l-size" />
              <label htmlFor="l-size">l</label>
            </div>
            <div className="sc-item">
              <input type="radio" id="xs-size" />
              <label htmlFor="xs-size">xs</label>
            </div>
          </div>
        </div>
        <div className="filter-widget">
          <h4 className="fw-title">Tags</h4>
          <div className="fw-tags">
            <a href="/#">Towel</a>
            <a href="/#">Shoes</a>
            <a href="/#">Coat</a>
            <a href="/#">Dresses</a>
            <a href="/#">Trousers</a>
            <a href="/#">Men's hats</a>
            <a href="/#">Backpack</a>
          </div>
        </div>
      </div>
        </>
    )
}
export default RecentProducts;