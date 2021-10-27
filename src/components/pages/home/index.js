import CounterSection from "../CounterSection";
import HeroSlider from "../HeroSlider";
import InstaProfile from "../InstaProfile";
import OwlCarousel from "react-owl-carousel";
import HeroCards from "../HeroCards";


const Home = ({ products }) => {
  return (
    <>
      <HeroSlider />

      <HeroCards />

      {/* Women Banner Section Begin */}
      <section className="women-banner spad">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-3">
              <div
                className="product-large set-bg"
                style={{
                  backgroundImage: "url(./assets/img/products/women-large.jpg)",
                }}
                data-setbg="./assets/img/products/women-large.jpg"
              >
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
              {
                products.length>0 &&
                <OwlCarousel
                className="owl-theme"
                dots
                dotsEach
                margin={10}
                loop
                autoplay
                smartSpeed={1000}
                autoplayTimeout={3000}
                dragClass={"product-slider owl-carousel owl-loaded owl-drag"}
                nav
              >
                {products.map((product, index) => {
                  return (
                    <div className="product-item">
                      <div className="pi-pic">
                        <img src={product.images[0].src} alt="" />
                        {
                          product.on_sale &&
                          <div className="sale">Sale</div>
                        }
                        <div className="icon">
                          <i className="icon_heart_alt" />
                        </div>
                        <ul>
                          <li className="w-icon active">
                            <a href="/#">
                              <i className="icon_bag_alt" />
                            </a>
                          </li>
                          <li className="quick-view">
                            <a href="/#">+ Quick View</a>
                          </li>
                          <li className="w-icon">
                            <a href="/#">
                              <i className="fa fa-random" />
                            </a>
                          </li>
                        </ul>
                      </div>
                      <div className="pi-text">
                        <div className="catagory-name">{product.categories[0].name}</div>
                        <a href="/#">
                          <h5>{product.name}</h5>
                        </a>
                        <div className="product-price">
                          {product.prices.currency_prefix+product.prices.sale_price/100}
                          <span>{product.prices.currency_prefix+product.prices.regular_price/100}</span>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </OwlCarousel>
              }
            </div>
          </div>
        </div>
      </section>
      {/* Women Banner Section End */}
      <CounterSection />

      <InstaProfile />
    </>
  );
};
export default Home;
