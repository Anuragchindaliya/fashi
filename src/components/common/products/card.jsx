import React from 'react';
import { Link } from 'react-router-dom';

const ProductCard = ({ product: el }) => {
    return (
        <div className="product-item">
        <div className="pi-pic">
            <img src={el.images.length > 0 ? el.images[0].src : ''} alt="" />
            {el.on_sale && <div className="sale pp-sale">Sale</div>}
            {
                el.on_sale &&
                <div className="sale">Sale</div>
            }
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
            <Link to={{ pathname: `${new URL(el.permalink).pathname}`, state: el }} >
                <h5>{el.name}</h5>
            </Link>

            <div className="product-price">
                 {/* {parse(el.price_html)}  */}
                {el.prices.currency_prefix}{el.prices.sale_price / 100} 
                <span>{el.prices.currency_prefix}{el.prices.regular_price / 100}</span>
            </div>
        </div>
        </div>
    )
}

export default ProductCard

