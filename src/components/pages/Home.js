const Home = () => {
  return (
    <>
      {/* Hero Section Begin */}
      {/* <section className="hero-section">
        <div className="hero-items owl-carousel">
          <div className="single-hero-items set-bg" data-setbg="./assets/img/hero-1.jpg">
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
          <div className="single-hero-items set-bg" data-setbg="./assets/img/hero-2.jpg">
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
        </div>
      </section> */}
      {/* Hero Section End */}

      {/* Banner Section Begin */}
      <div className="banner-section spad">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-4">
              <div className="single-banner">
                <img src="./assets/img/banner-1.jpg" alt="" />
                <div className="inner-text">
                  <h4>Men’s</h4>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="single-banner">
                <img src="./assets/img/banner-2.jpg" alt="" />
                <div className="inner-text">
                  <h4>Women’s</h4>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="single-banner">
                <img src="./assets/img/banner-3.jpg" alt="" />
                <div className="inner-text">
                  <h4>Kid’s</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Banner Section End */}

      {/* Women Banner Section Begin */}
      <section className="women-banner spad">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-3">
              <div className="product-large set-bg" style={{backgroundImage:'url(./assets/img/products/women-large.jpg)'}} data-setbg="./assets/img/products/women-large.jpg">
                <h2>Women’s</h2>
                <a href="/#">Discover More</a>
              </div>
            </div>
            <div className="col-lg-8 offset-lg-1">
              <div className="filter-control">
                <ul>
                  <li className="active">Clothings</li>
                  <li>HandBag</li>
                  <li>Shoes</li>
                  <li>Accessories</li>
                </ul>
              </div>
              <div className="product-slider owl-carousel">
                <div className="product-item">
                  <div className="pi-pic">
                    <img src="./assets/img/products/women-1.jpg" alt="" />
                    <div className="sale">Sale</div>
                    <div className="icon">
                      <i className="icon_heart_alt" />
                    </div>
                    <ul>
                      <li className="w-icon active"><a href="/#"><i className="icon_bag_alt" /></a></li>
                      <li className="quick-view"><a href="/#">+ Quick View</a></li>
                      <li className="w-icon"><a href="/#"><i className="fa fa-random" /></a></li>
                    </ul>
                  </div>
                  <div className="pi-text">
                    <div className="catagory-name">Coat</div>
                    <a href="/#">
                      <h5>Pure Pineapple</h5>
                    </a>
                    <div className="product-price">
                      $14.00
                      <span>$35.00</span>
                    </div>
                  </div>
                </div>
                <div className="product-item">
                  <div className="pi-pic">
                    <img src="./assets/img/products/women-2.jpg" alt="" />
                    <div className="icon">
                      <i className="icon_heart_alt" />
                    </div>
                    <ul>
                      <li className="w-icon active"><a href="/#"><i className="icon_bag_alt" /></a></li>
                      <li className="quick-view"><a href="/#">+ Quick View</a></li>
                      <li className="w-icon"><a href="/#"><i className="fa fa-random" /></a></li>
                    </ul>
                  </div>
                  <div className="pi-text">
                    <div className="catagory-name">Shoes</div>
                    <a href="/#">
                      <h5>Guangzhou sweater</h5>
                    </a>
                    <div className="product-price">
                      $13.00
                    </div>
                  </div>
                </div>
                <div className="product-item">
                  <div className="pi-pic">
                    <img src="./assets/img/products/women-3.jpg" alt="" />
                    <div className="icon">
                      <i className="icon_heart_alt" />
                    </div>
                    <ul>
                      <li className="w-icon active"><a href="/#"><i className="icon_bag_alt" /></a></li>
                      <li className="quick-view"><a href="/#">+ Quick View</a></li>
                      <li className="w-icon"><a href="/#"><i className="fa fa-random" /></a></li>
                    </ul>
                  </div>
                  <div className="pi-text">
                    <div className="catagory-name">Towel</div>
                    <a href="/#">
                      <h5>Pure Pineapple</h5>
                    </a>
                    <div className="product-price">
                      $34.00
                    </div>
                  </div>
                </div>
                <div className="product-item">
                  <div className="pi-pic">
                    <img src="./assets/img/products/women-4.jpg" alt="" />
                    <div className="icon">
                      <i className="icon_heart_alt" />
                    </div>
                    <ul>
                      <li className="w-icon active"><a href="/#"><i className="icon_bag_alt" /></a></li>
                      <li className="quick-view"><a href="/#">+ Quick View</a></li>
                      <li className="w-icon"><a href="/#"><i className="fa fa-random" /></a></li>
                    </ul>
                  </div>
                  <div className="pi-text">
                    <div className="catagory-name">Towel</div>
                    <a href="/#">
                      <h5>Converse Shoes</h5>
                    </a>
                    <div className="product-price">
                      $34.00
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Women Banner Section End */}

    </>
  );
};
export default Home;
