import OwlCarousel from "react-owl-carousel";
const HeroSlider = ()=>{
return(
    <>
        {/* Hero Section Begin */}
      <section className="hero-section">
        <OwlCarousel
          className="owl-theme"
          dots={false}
          items={1}
          loop
          dragClass={"owl-drag hero-items"}
          smartSpeed={1000}
          nav
          navText={['<i class="ti-angle-left"></i>','<i class="ti-angle-right"></i>']}
        >
          <div
            className="single-hero-items set-bg"
            style={{ backgroundImage: "url(./assets/img/hero-1.jpg)" }}
            data-setbg="./assets/img/hero-1.jpg"
          >
            <div className="container">
              <div className="row">
                <div className="col-lg-5">
                  <span>Bag,kids</span>
                  <h1>Black friday</h1>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore
                  </p>
                  <a href="/#" className="primary-btn">
                    Shop Now
                  </a>
                </div>
              </div>
              <div className="off-card">
                <h2>
                  Sale <span>50%</span>
                </h2>
              </div>
            </div>
          </div>
          <div
            className="single-hero-items set-bg"
            style={{ backgroundImage: "url(./assets/img/hero-2.jpg)" }}
            data-setbg="./assets/img/hero-2.jpg"
          >
            <div className="container">
              <div className="row">
                <div className="col-lg-5">
                  <span>Bag,kids</span>
                  <h1>Black friday</h1>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore
                  </p>
                  <a href="/#" className="primary-btn">
                    Shop Now
                  </a>
                </div>
              </div>
              <div className="off-card">
                <h2>
                  Sale <span>50%</span>
                </h2>
              </div>
            </div>
          </div>
        </OwlCarousel>
      </section>
      {/* Hero Section End */}
    </>
);
}
export default HeroSlider;