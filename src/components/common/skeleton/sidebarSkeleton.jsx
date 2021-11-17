import GrayElement from "./grayElement";

const SidebarSkeleton = () => {
  return (
    <>
      <div className="col-lg-3">
        <div className="filter-widget">
          <h4 className="fw-title">
            <GrayElement grayPropsStyles={{ "height": "25px", "borderRadius": "3px", "width": "120px" }} />
          </h4>
          <ul className="filter-catagories">
            <li><GrayElement grayPropsStyles={{ "height": "15px", "borderRadius": "3px", "width": "60px" }} /></li>
            <li><GrayElement grayPropsStyles={{ "height": "15px", "borderRadius": "3px", "width": "60px" }} /></li>
            <li><GrayElement grayPropsStyles={{ "height": "15px", "borderRadius": "3px", "width": "60px" }} /></li>
          </ul>
        </div>
        <div className="filter-widget">
          <h4 className="fw-title">
            <GrayElement grayPropsStyles={{ "height": "25px", "borderRadius": "3px", "width": "100px" }} />
          </h4>
          <div className="fw-brand-check">
            <div className="bc-item">
              <label htmlFor="bc-calvin">
                <GrayElement grayPropsStyles={{ "height": "15px", "borderRadius": "3px", "width": "100px", "margin": "5px 0 0" }} />
                <input type="checkbox" id="bc-calvin" />
                <span className="checkmark" />
              </label>
            </div>
            <div className="bc-item">
              <label htmlFor="bc-diesel">
                <GrayElement grayPropsStyles={{ "height": "15px", "borderRadius": "3px", "width": "100px", "margin": "5px 0 0" }} />
                <input type="checkbox" id="bc-diesel" />
                <span className="checkmark" />
              </label>
            </div>
            <div className="bc-item">
              <label htmlFor="bc-polo">
                <GrayElement grayPropsStyles={{ "height": "15px", "borderRadius": "3px", "width": "100px", "margin": "5px 0 0" }} />
                <input type="checkbox" id="bc-polo" />
                <span className="checkmark" />
              </label>
            </div>
            <div className="bc-item">
              <label htmlFor="bc-tommy">
                <GrayElement grayPropsStyles={{ "height": "15px", "borderRadius": "3px", "width": "100px", "margin": "5px 0 0" }} />
                <input type="checkbox" id="bc-tommy" />
                <span className="checkmark" />
              </label>
            </div>
          </div>
        </div>
        <div className="filter-widget">
          <h4 className="fw-title"><GrayElement grayPropsStyles={{ "height": "25px", "borderRadius": "3px", "width": "100px" }} /></h4>
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
            <div className="cs-item" style={{ "display": "flex" }}>
              <GrayElement grayPropsStyles={{ "height": "20px", "borderRadius": "50%", "width": "20px" }} />
              <GrayElement grayPropsStyles={{
                "height": "20px", "borderRadius": "1%", "width": "70px",
                "marginLeft": "12px"
              }} />
            </div>
            <div className="cs-item" style={{ "display": "flex" }}>
              <GrayElement grayPropsStyles={{ "height": "20px", "borderRadius": "50%", "width": "20px" }} />
              <GrayElement grayPropsStyles={{
                "height": "20px", "borderRadius": "1%", "width": "70px",
                "marginLeft": "12px"
              }} />
            </div>
            <div className="cs-item" style={{ "display": "flex" }}>
              <GrayElement grayPropsStyles={{ "height": "20px", "borderRadius": "50%", "width": "20px" }} />
              <GrayElement grayPropsStyles={{
                "height": "20px", "borderRadius": "1%", "width": "70px",
                "marginLeft": "12px"
              }} />
            </div>
            <div className="cs-item" style={{ "display": "flex" }}>
              <GrayElement grayPropsStyles={{ "height": "20px", "borderRadius": "50%", "width": "20px" }} />
              <GrayElement grayPropsStyles={{
                "height": "20px", "borderRadius": "1%", "width": "70px",
                "marginLeft": "12px"
              }} />
            </div>
            <div className="cs-item" style={{ "display": "flex" }}>
              <GrayElement grayPropsStyles={{ "height": "20px", "borderRadius": "50%", "width": "20px" }} />
              <GrayElement grayPropsStyles={{
                "height": "20px", "borderRadius": "1%", "width": "70px",
                "marginLeft": "12px"
              }} />
            </div>
            <div className="cs-item" style={{ "display": "flex" }}>
              <GrayElement grayPropsStyles={{ "height": "20px", "borderRadius": "50%", "width": "20px" }} />
              <GrayElement grayPropsStyles={{
                "height": "20px", "borderRadius": "1%", "width": "70px",
                "marginLeft": "12px"
              }} />
            </div>
          </div>
        </div>
        <div className="filter-widget">
          <h4 className="fw-title">Size</h4>
          <div className="fw-size-choose">
            <GrayElement grayPropsStyles={{
              "height": "40px", "borderRadius": "1%", "width": "100%"
            }} />
          </div>
        </div>
        <div className="filter-widget">
          <h4 className="fw-title">Tags</h4>
          <div className="fw-tags">
            <GrayElement grayPropsStyles={{
              "height": "70px", "borderRadius": "1%", "width": "100%"
            }} />
          </div>
        </div>
      </div>
    </>
  )
}
export default SidebarSkeleton;