import { useState, useEffect } from "react";
import _ from "lodash";
import parse from "html-react-parser";
import { useParams } from "react-router-dom";
import OwlCarousel from "react-owl-carousel";
import RecentProducts from "../common/recentProducts";

const SingleProducts = (props) => {
  const {
    singleProduct: { data, loading, error },
    singleProductFetch,
    addToCart,
    resetCart,
    updateQty,
    cart,
  } = props;
  const { slug } = useParams();
  const [product, setProduct] = useState();
  const [qty, setQty] = useState(1);
  const [enlargeImage, setEnlargedImage] = useState(
    !_.isEmpty(product) ? product.images[0] : { src: "", alt: "" }
  );
  const [startPosition, setStartPosition] = useState(0);

  const handleQtyChange = (event) => {
    setQty(parseInt(event.target.value));
  };

  const increaseQty = () => {
    qty < 100 && setQty(qty + 1);
  };
  const decreaseQty = () => {
    qty > 0 && setQty(qty - 1);
  };

  useEffect(() => {
    singleProductFetch(slug);
  }, []);
  useEffect(()=>{
    var ele = document.querySelector('#prdDesc') || '';
    if(ele.offsetHeight>200){
      ele.style.maxHeight='200px';
      ele.style.overflow='hidden';
      
    }
  })
  useEffect(() => {
    return () => {
      console.log("unmounting singleProduct");
      setProduct();
      console.log(product);
    };
  }, []);

  useEffect(() => {
    setProduct(data[0]);
    if (data.length > 0) {
      setEnlargedImage(data[0].images[0]);
    }
  }, [data]);

  const handleEnlargedImage = (img, index) => {
    setEnlargedImage(img);
    setStartPosition(index - 1);
  };

  const handleAddToCart = () => {
    setQty(1);
    addToCart({
      product: { ...product, qty: 1 },
      productId: product.id,
    })
  }
  return (
    <>
      <section className="product-shop spad page-details">
        {loading && (
          <div id="preloder2">
            <div className="loader" />
          </div>
        )}
        {!loading && !_.isEmpty(product) && (
          <div className="container">
            <div className="row">
              <div className="col-lg-9">
                <div className="row">
                  <div className="col-lg-6">
                    <div className="product-pic-zoom">
                      <img
                        className="product-big-img"
                        src={enlargeImage.src}
                        alt={enlargeImage.alt}
                      />
                      <div className="zoom-icon">
                        <i className="fa fa-search-plus" />
                      </div>
                    </div>
                    {!_.isEmpty(product) && product.images.length > 1 && (
                      <OwlCarousel
                        className="owl-theme"
                        margin={10}
                        dots={false}
                        dotsEach
                        nav
                        dragClass={"owl-drag ps-slider"}
                        startPosition={startPosition}
                        key={product.id}
                      >
                        {product.images.map((img, index) => {
                          return (
                            <div
                              key={index}
                              className="item"
                              onClick={() => handleEnlargedImage(img, index)}
                            >
                              <img src={img.src} alt={img.alt} />
                            </div>
                          );
                        })}
                      </OwlCarousel>
                    )}
                  </div>
                  <div className="col-lg-6">
                    <div className="product-details">
                      <div className="pd-title">
                        <span>{product.categories[0].name}</span>
                        <h3>{product.name}</h3>
                        <a href="/#" className="heart-icon">
                          <i className="icon_heart_alt" />
                        </a>
                      </div>
                      <div className="pd-rating">
                        <i className="fa fa-star" />
                        <i className="fa fa-star" />
                        <i className="fa fa-star" />
                        <i className="fa fa-star" />
                        <i className="fa fa-star-o" />
                        <span>({product.rating_count})</span>
                      </div>
                      <div className="quantity">
                        {cart[product.id] && cart[product.id].qty > 0 && (
                          <div className="pro-qty">
                            <span className="left-minus" onClick={decreaseQty}>
                              <i className="fa fa-minus"></i>
                            </span>
                            <input
                              type="number"
                              min="0"
                              max="100"
                              value={qty}
                              onChange={handleQtyChange}
                            />
                            <span className="right-plus" onClick={increaseQty}>
                              <i className="fa fa-plus"></i>
                            </span>
                          </div>
                        )}
                        {cart[product.id] && cart[product.id].qty > 0 ? (
                          <b
                            href="/#"
                            className="primary-btn pd-cart"
                            onClick={() =>
                              updateQty({ qty: qty, productId: product.id })
                            }
                          >
                            Update Cart
                          </b>
                        ) : (
                          <b
                            href="/#"
                            className="primary-btn pd-cart"
                            onClick={handleAddToCart}
                          >
                            Add To Cart
                          </b>
                        )}
                      </div>
                      <div className="pd-color">
                        <h6>Color</h6>
                        <div className="pd-color-choose">
                          <div className="cc-item">
                            <input type="radio" id="cc-black" />
                            <label htmlFor="cc-black" />
                          </div>
                          <div className="cc-item">
                            <input type="radio" id="cc-yellow" />
                            <label htmlFor="cc-yellow" className="cc-yellow" />
                          </div>
                          <div className="cc-item">
                            <input type="radio" id="cc-violet" />
                            <label htmlFor="cc-violet" className="cc-violet" />
                          </div>
                        </div>
                      </div>
                      <div className="pd-size-choose">
                        <div className="sc-item">
                          <input type="radio" id="sm-size" />
                          <label htmlFor="sm-size">s</label>
                        </div>
                        <div className="sc-item">
                          <input type="radio" id="md-size" />
                          <label htmlFor="md-size">m</label>
                        </div>
                        <div className="sc-item">
                          <input type="radio" id="lg-size" />
                          <label htmlFor="lg-size">l</label>
                        </div>
                        <div className="sc-item">
                          <input type="radio" id="xl-size" />
                          <label htmlFor="xl-size">xs</label>
                        </div>
                      </div>
                      <div className="pd-desc">
                        <h4>
                          <small>Price</small> : {parse(product.price_html)}
                          {/* price */}
                          {/* {data.sale_price} */}
                          {/* <span>{data.regular_price}</span> */}
                          {/* {product.prices.currency_prefix}{product.prices.sale_price / 100}
                          <span>{product.prices.currency_prefix}{product.prices.regular_price / 100}</span> */}
                        </h4>
                        <div id='prdDesc'>{parse(product.short_description)}</div>
                      </div>

                      <ul className="pd-tags">
                        <li>
                          <span>CATEGORIES</span>:
                          {product.categories.map(
                            (obj, i) =>
                              `${obj.name} ${
                                i === product.categories.length - 1 ? "" : ","
                              } `
                          )}
                        </li>
                        <li>
                          <span>TAGS</span>: {/* {data.tags.join(", ")} */}
                          {product.tags.map((tag, i) => {
                            return `${tag.name.toUpperCase()}${
                              i !== product.tags.length - 1 ? ", " : ""
                            }`;
                          })}
                        </li>
                      </ul>
                      <div className="pd-share">
                        <div className="p-code">Sku : 00012</div>
                        <div className="pd-social">
                          <a href="/#">
                            <i className="ti-facebook" />
                          </a>
                          <a href="/#">
                            <i className="ti-twitter-alt" />
                          </a>
                          <a href="/#">
                            <i className="ti-linkedin" />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="product-tab">
                  <div className="tab-item">
                    <ul className="nav" role="tablist">
                      <li>
                        <a
                          className="active"
                          data-toggle="tab"
                          href="#tab-1"
                          role="tab"
                        >
                          DESCRIPTION
                        </a>
                      </li>
                      <li>
                        <a data-toggle="tab" href="#tab-2" role="tab">
                          SPECIFICATIONS
                        </a>
                      </li>
                      <li>
                        <a data-toggle="tab" href="#tab-3" role="tab">
                          Customer Reviews (02)
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="tab-item-content">
                    <div className="tab-content">
                      <div
                        className="tab-pane fade-in active"
                        id="tab-1"
                        role="tabpanel"
                      >
                        <div className="product-content">
                          {parse(product.description)}
                        </div>
                      </div>
                      <div className="tab-pane fade" id="tab-2" role="tabpanel">
                        <div className="specification-table">
                          <table>
                            <tbody>
                              <tr>
                                <td className="p-catagory">Customer Rating</td>
                                <td>
                                  <div className="pd-rating">
                                    <i className="fa fa-star" />
                                    <i className="fa fa-star" />
                                    <i className="fa fa-star" />
                                    <i className="fa fa-star" />
                                    <i className="fa fa-star-o" />
                                    <span>(5)</span>
                                  </div>
                                </td>
                              </tr>
                              <tr>
                                <td className="p-catagory">Price</td>
                                <td>
                                  <div className="p-price">$495.00</div>
                                </td>
                              </tr>
                              <tr>
                                <td className="p-catagory">Add To Cart</td>
                                <td>
                                  <div className="cart-add">+ add to cart</div>
                                </td>
                              </tr>
                              <tr>
                                <td className="p-catagory">Availability</td>
                                <td>
                                  <div className="p-stock">22 in stock</div>
                                </td>
                              </tr>
                              <tr>
                                <td className="p-catagory">Weight</td>
                                <td>
                                  <div className="p-weight">1,3kg</div>
                                </td>
                              </tr>
                              <tr>
                                <td className="p-catagory">Size</td>
                                <td>
                                  <div className="p-size">Xxl</div>
                                </td>
                              </tr>
                              <tr>
                                <td className="p-catagory">Color</td>
                                <td>
                                  <span className="cs-color" />
                                </td>
                              </tr>
                              <tr>
                                <td className="p-catagory">Sku</td>
                                <td>
                                  <div className="p-code">00012</div>
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>
                      <div className="tab-pane fade" id="tab-3" role="tabpanel">
                        <div className="customer-review-option">
                          <h4>2 Comments</h4>
                          <div className="comment-option">
                            <div className="co-item">
                              <div className="avatar-pic">
                                <img
                                  src="/assets/img/product-single/avatar-1.png"
                                  alt=""
                                />
                              </div>
                              <div className="avatar-text">
                                <div className="at-rating">
                                  <i className="fa fa-star" />
                                  <i className="fa fa-star" />
                                  <i className="fa fa-star" />
                                  <i className="fa fa-star" />
                                  <i className="fa fa-star-o" />
                                </div>
                                <h5>
                                  Brandon Kelley <span>27 Aug 2019</span>
                                </h5>
                                <div className="at-reply">Nice !</div>
                              </div>
                            </div>
                            <div className="co-item">
                              <div className="avatar-pic">
                                <img
                                  src="/assets/img/product-single/avatar-2.png"
                                  alt=""
                                />
                              </div>
                              <div className="avatar-text">
                                <div className="at-rating">
                                  <i className="fa fa-star" />
                                  <i className="fa fa-star" />
                                  <i className="fa fa-star" />
                                  <i className="fa fa-star" />
                                  <i className="fa fa-star-o" />
                                </div>
                                <h5>
                                  Roy Banks <span>27 Aug 2019</span>
                                </h5>
                                <div className="at-reply">Nice !</div>
                              </div>
                            </div>
                          </div>
                          <div className="personal-rating">
                            <h6>Your Ratind</h6>
                            <div className="rating">
                              <i className="fa fa-star" />
                              <i className="fa fa-star" />
                              <i className="fa fa-star" />
                              <i className="fa fa-star" />
                              <i className="fa fa-star-o" />
                            </div>
                          </div>
                          <div className="leave-comment">
                            <h4>Leave A Comment</h4>
                            <form action="#" className="comment-form">
                              <div className="row">
                                <div className="col-lg-6">
                                  <input type="text" placeholder="Name" />
                                </div>
                                <div className="col-lg-6">
                                  <input type="text" placeholder="Email" />
                                </div>
                                <div className="col-lg-12">
                                  <textarea
                                    placeholder="Messages"
                                    defaultValue={""}
                                  />
                                  <button type="submit" className="site-btn">
                                    Send message
                                  </button>
                                </div>
                              </div>
                            </form>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <RecentProducts />
            </div>
          </div>
        )}
      </section>
    </>
  );
};
export default SingleProducts;
