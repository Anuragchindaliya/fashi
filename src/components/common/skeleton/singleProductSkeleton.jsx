import React from 'react'
import OwlCarousel from 'react-owl-carousel'
import GrayElement from './grayElement'
import SidebarSkeleton from './sidebarSkeleton'

const SingleProductSkeleton = () => {
    return (
        <>

            <div className="container">
                <div className="row">
                    <div className="col-lg-9">
                        <div className="row">
                            <div className="col-lg-6">
                                <div className="product-pic-zoom">
                                    <GrayElement grayPropsStyles={{ "width": "100%", "height": "410px", "borderRadius": "7px" }} />
                                    <div className="zoom-icon">
                                        <i className="fa fa-search-plus" />
                                    </div>
                                </div>

                                <OwlCarousel
                                    className="owl-theme"
                                    margin={10}
                                    dots={false}
                                    dotsEach
                                    nav
                                    dragClass={"owl-drag ps-slider"}
                                >
                                    {[...Array(4)].map((item, index) => <div key={index} className="item">
                                        <GrayElement grayPropsStyles={{ "height": "100px", "borderRadius": "2px", "width": "100%", "margin": "0 10px" }} />
                                    </div>
                                    )}
                                </OwlCarousel>
                            </div>
                            <div className="col-lg-6">
                                <div className="product-details">
                                    <div className="pd-title">
                                        <span>
                                            <GrayElement grayPropsStyles={{ "height": "15px", "borderRadius": "2px", "width": "25%" }} />
                                        </span>
                                        <h3>
                                            <GrayElement grayPropsStyles={{ "height": "15px", "borderRadius": "2px", "width": "50%", "backgroundColor": "white" }} />
                                        </h3>
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
                                        <span>
                                            {/* ({product.rating_count}) */}
                                        </span>
                                    </div>
                                    <div className="quantity">
                                        {/* {cart[product.id] && cart[product.id].qty > 0 && ( */}

                                        <GrayElement grayPropsStyles={{ "height": "35px", "borderRadius": "2px", "width": "100%", "backgroundColor": "white" }} grayClass={"pro-qty"} />

                                        {/* )} */}
                                        {/* {cart[product.id] && cart[product.id].qty > 0 ? (
                                                    <b
                                                        href="/#"
                                                        className={`${updateBtnStatus ? '' : 'disabled'} primary-btn pd-cart`}
                                                        onClick={() => {
                                                            updateQty({ qty: qty, productId: product.id });
                                                            toast.success(<div>{product.name.substr(0, 40)} - Quantity is updated </div>);
                                                        }
                                                        }
                                                    >
                                                        Update Cart
                                                    </b>
                                                ) : (
                                                    <b
                                                        href="/#"
                                                        className="primary-btn pd-cart"
                                                        // onClick={handleAddToCart}
                                                    >
                                                        Add To Cart
                                                    </b>
                                                )} */}
                                    </div>
                                    <div className="pd-color">
                                        <GrayElement grayPropsStyles={{ "height": "15px", "borderRadius": "2px", "width": "30%", "backgroundColor": "white", "display": "inline-block" }} />
                                        <div className="pd-color-choose">
                                            <GrayElement grayPropsStyles={{ "height": "20px", "borderRadius": "50%", "width": "20px", "backgroundColor": "white", "display": "inline-block", "margin": "5px 10px 0 25px" }} />
                                            <GrayElement grayPropsStyles={{ "height": "20px", "borderRadius": "50%", "width": "20px", "backgroundColor": "white", "display": "inline-block", "margin": "5px 0 0" }} />
                                            <GrayElement grayPropsStyles={{ "height": "20px", "borderRadius": "50%", "width": "20px", "backgroundColor": "white", "display": "inline-block", "margin": "5px 10px 0" }} />
                                        </div>
                                    </div>
                                    <div className="pd-size-choose">
                                        <div className="sc-item">
                                            <GrayElement grayPropsStyles={{ "height": "40px", "borderRadius": "3px", "width": "40px" }} />
                                        </div>
                                        <div className="sc-item">
                                            <GrayElement grayPropsStyles={{ "height": "40px", "borderRadius": "3px", "width": "40px" }} />
                                        </div>
                                        <div className="sc-item">
                                            <GrayElement grayPropsStyles={{ "height": "40px", "borderRadius": "3px", "width": "40px" }} />
                                        </div>
                                        <div className="sc-item">
                                            <GrayElement grayPropsStyles={{ "height": "40px", "borderRadius": "3px", "width": "40px" }} />
                                        </div>
                                    </div>
                                    <div className="pd-desc">
                                        <GrayElement grayPropsStyles={{ "height": "30px", "borderRadius": "3px", "width": "70%" }} />
                                        <div id='prdDesc'>
                                            <GrayElement grayPropsStyles={{ "height": "80px", "borderRadius": "3px", "width": "100%" }} />
                                        </div>
                                    </div>

                                    <ul className="pd-tags">
                                        <li>
                                            <GrayElement grayPropsStyles={{ "height": "20px", "borderRadius": "3px", "width": "70%" }} />
                                        </li>
                                        <li>
                                            <GrayElement grayPropsStyles={{ "height": "20px", "borderRadius": "3px", "width": "70%" }} />
                                        </li>
                                    </ul>
                                    <div className="pd-share">
                                        <GrayElement grayPropsStyles={{ "height": "20px", "borderRadius": "3px", "width": "70%" }} grayClass={"p-code"} />
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
                                            <GrayElement grayPropsStyles={{ "height": "20px", "borderRadius": "3px", "width": "calc(100vw/8.5)" }} grayClass={"active"} />
                                        </a>
                                    </li>
                                    <li>
                                        <a data-toggle="tab" href="#tab-2" role="tab">
                                            <GrayElement grayPropsStyles={{ "height": "20px", "borderRadius": "3px", "width": "calc(100vw/8.5)" }} grayClass={"active"} />
                                        </a>
                                    </li>
                                    <li>
                                        <a data-toggle="tab" href="#tab-3" role="tab">
                                            <GrayElement grayPropsStyles={{ "height": "20px", "borderRadius": "3px", "width": "calc(100vw/8.5)" }} grayClass={"active"} />
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
                                        <GrayElement grayPropsStyles={{ "height": "200px", "borderRadius": "3px", "width": "100%" }} grayClass={"active"} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <SidebarSkeleton />
                </div>
            </div>
            {/* )} */}
        </>
    )
}

export default SingleProductSkeleton
