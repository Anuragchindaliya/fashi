import { cartActions, updateQty } from 'actions/cart.action';
import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import parse from 'html-react-parser'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { favActions } from 'actions/favourite.action';

const ProductCard = ({ product: el, cartActions, cart, favActions, favourite }) => {
    const [isCartStatus, setCartStatus] = useState(true);
    const [isFavStatus, setFavStatus] = useState(true);

    useEffect(() => {
        setCartStatus(cart[el.id] ? true : false)
    }, [cart, el.id]);

    const { addToCart, updateQty } = cartActions;
    const { addToFav, removeFromFav, resetFav } = favActions;

    const handleCartStatus = () => {
        if (isCartStatus) {
            updateQty({ qty: 0, productId: el.id });
            toast.success(<div><b>{el.name}</b> Removed from Cart</div>, { position: "top-right" })
        } else {
            addToCart({ product: { ...el, qty: 1 }, productId: el.id })
            toast.success(`${el.name} Added to Cart`, { position: "top-right" })
        }
        setCartStatus(!isCartStatus);
    }

    useEffect(() => {
        // setFavStatus(Object.keys(favourite).includes(el.id));
        var heartStatus = Object.keys(favourite).includes(el.id)
        setFavStatus(heartStatus);
    }, [])
    return (
        <>
            <div className="product-item">
                <div className="pi-pic">
                    <Link to={{ pathname: `${new URL(el.permalink).pathname}`, state: el }} onClick={(e) => e.stopPropagation()} ><img src={el.images.length > 0 ? el.images[0].src : ''} alt="" /></Link>
                    {el.on_sale && <div className="sale pp-sale">Sale</div>}
                    {
                        el.on_sale &&
                        <div className="sale">Sale</div>
                    }
                    <div className="icon heart-icon" onClick={() => addToFav({ productId: el.id, product: el })}>
                        <i className={isFavStatus ? "icon_heart" : "icon_heart_alt"} />
                    </div>
                    <ul>
                        <li className="w-icon active" title={isCartStatus ? "Remove from cart" : "Add to cart"} onClick={handleCartStatus} ><b><i className={isCartStatus ? "icon_close" : "icon_bag_alt"} /></b></li>
                        {/* <li className="w-icon active" onClick={handleCartStatus} ><b><i className="icon_close" /></b></li> */}
                        <Link to={{ pathname: `${new URL(el.permalink).pathname}`, state: el }} onClick={(e) => e.stopPropagation()} ><li className="quick-view"><b> View More</b></li></Link>

                        <li className="w-icon"><b ><i className="fa fa-random" /></b></li>
                    </ul>
                </div>
                <Link to={{ pathname: `${new URL(el.permalink).pathname}`, state: el }} onClick={(e) => e.stopPropagation()} >
                    <div className="pi-text">
                        <div className="catagory-name">{el.categories[0].name}</div>
                        <h5>{el.name}</h5>
                        <div className="product-price">
                            {/* {parse(el.price_html)}  */}
                            {el.prices.currency_prefix}{el.prices.sale_price / 100}
                            <span>{el.prices.currency_prefix}{el.prices.regular_price / 100}</span>
                        </div>
                    </div>
                </Link>
            </div>
        </>
    )
}

const mapStateToProps = (state) => {
    return {
        cart: state.cart,
        favourite: state.favourite
    };
};
const mapDispatchToProps = (dispatch) => {
    return {
        cartActions: bindActionCreators(cartActions, dispatch),
        favActions: bindActionCreators(favActions, dispatch)
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductCard)

