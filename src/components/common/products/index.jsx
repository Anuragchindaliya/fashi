import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
const Products = () => {
    const [product, setProduct] = useState([]);

    useEffect(() => {
        axios.get('https://ciostik.com/wp-json/wc/store/products').then((response) => {
            const myProducts = response.data;
            setProduct(myProducts);


        });
    }, []);
    return (
        <>
            <div className="col-lg-9 order-1 order-lg-2">
                <div className="product-show-option">
                    <div className="row">
                        <div className="col-lg-7 col-md-7">
                            <div className="select-option">
                                <select className="sorting">
                                    <option value>Default Sorting</option>
                                </select>
                                <select className="p-show">
                                    <option value>Show:</option>
                                </select>
                            </div>
                        </div>
                        <div className="col-lg-5 col-md-5 text-right">
                            <p>Show 01- 09 Of 36 Product</p>
                        </div>
                    </div>
                </div>
                <div className="product-list">
                    <div className="row">
                        {product.map((el, index) => {
                            return (
                                <div key={index} className="col-lg-4 col-sm-6">
                                    <div className="product-item">
                                        <div className="pi-pic">
                                            <img src={el.images.length>0 && el.images[0].src} alt="" />
                                            {el.on_sale && <div className="sale pp-sale">Sale</div>}
                                            {/* <div className="sale pp-sale">Dynamic Sale</div> */}
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
                                            <div className="catagory-name">{el.categories[0].name}</div>
                                            
                                                <Link to={{pathname: "/singleproduct",state:el}} >
                                                    <h5>{el.name}</h5>
                                                </Link>
                                            
                                            <div className="product-price">
                                                {el.prices.currency_prefix}{el.prices.sale_price / 100}
                                                <span>{el.prices.currency_prefix}{el.prices.regular_price / 100}</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
                <div className="loading-more">
                    <i className="icon_loading" />
                    <a href="/#">
                        Loading More
                    </a>
                </div>
            </div>
        </>
    )
}
export default Products;