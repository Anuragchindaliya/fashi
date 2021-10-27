import React,{useState, useEffect} from 'react';
import OwlCarousel from "react-owl-carousel";
import { Link } from "react-router-dom";

const MyCarousel = ({sliderProducts}) => {

    const [va, setVa] = useState(0);
    return (
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
            navText={['<i class="ti-angle-left"></i>', '<i class="ti-angle-right"></i>']}
            nav
            responsive={{ 0: { items: 1 }, 600: { items: 3 } }}
            lazyContent={false}
            key={sliderProducts.length}
        >
            {sliderProducts.map((product, index) => {
                return (
                    <div key={index} className="product-item">
                        <div className="pi-pic">
                            <img src={product.images.length>0?product.images[0].src:''} alt="" />
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
                            <Link to={{pathname: "/singleproduct",state:product}} >
                                <h5>{product.name}</h5>
                            </Link>
                            <div className="product-price">
                                {product.prices.currency_prefix + product.prices.sale_price / 100}
                                <span>{product.prices.currency_prefix + product.prices.regular_price / 100}</span>
                            </div>
                        </div>
                    </div>
                );
            })}
        </OwlCarousel>
    )
}

export default MyCarousel
