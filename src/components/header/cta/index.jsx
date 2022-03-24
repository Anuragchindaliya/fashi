import React from 'react'
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import { getTotalPrice } from 'utils';
import { useLocation } from 'react-router';
import Profile from '../Profile';
import { useSelector } from 'react-redux';

const CallToActions = ({ products, favourite, favActions, cart, cartActions }) => {
    const { pathname } = useLocation();
    const account = useSelector((state) => state.account);
    const { removeFromFav } = favActions;
    const { updateQty } = cartActions;
    const keysArr = Object.keys(cart);
    const favProducts = products.data.filter((pr) => favourite.includes(pr.id));
    //GET TOTAL FAVOURITE PPDUCT PRICE
    var favTotalPrice = 0;
    favProducts.forEach((pr) => {
        let price = pr.prices?.sale_price || pr.price;
        favTotalPrice += (+price);
    })

    const cartTotalPrice = getTotalPrice(cart);
    return (
        <ul className="nav-right">
            {/* <li> {<Profile {...account.data} />}</li> */}
            <li className="cart-icon">
                <Link to="/fav">
                    <i className="icon_heart_alt" />
                    <span>{favourite.length}</span>
                </Link>
                <div className="cart-hover">
                    {favProducts.length > 0 ? <div>
                        <div className="select-items">
                            <table>
                                <tbody>
                                    {
                                        favProducts.map((item, index) => {
                                            return (<tr key={index}>
                                                <td className="si-pic" width="75px">
                                                    <img src={item.images[0].src} alt="" /></td>
                                                <td className="si-text">
                                                    <div className="product-selected">
                                                        <p>₹{item.prices?.sale_price || item.price}</p>
                                                        <h6>{item.name}</h6>
                                                    </div>
                                                </td>
                                                <td className="si-close">
                                                    <i className="ti-close" title="Remove from list" onClick={() => {
                                                        removeFromFav(item.id)
                                                        toast.success(<div>{item.name} removed from favourite</div>);
                                                    }
                                                    } />
                                                </td>
                                            </tr>)
                                        })
                                    }
                                </tbody>
                            </table>
                        </div>
                        <div className="select-total">
                            <span>total:</span>
                            <h5>₹{favTotalPrice}</h5>
                        </div>
                        <div className="select-button">
                            {pathname !== "/fav" && <Link to="/fav" className="primary-btn view-card">VIEW FAVOURITE</Link>}
                            {/* <a href="/#" className="primary-btn checkout-btn">CHECK OUT</a> */}
                        </div>
                    </div> : <div>No Favourite Items Added</div>}

                    { }
                </div>
            </li>
            <li className="cart-icon">
                <Link to="/cart">
                    <i className="icon_bag_alt" />
                    <span>{keysArr.length}</span>
                </Link>
                <div className="cart-hover">
                    {keysArr.length > 0 ? <div>
                        <div className="select-items">
                            <table>
                                <tbody>
                                    {
                                        keysArr.map((key) => {
                                            const item = cart[key];
                                            return (<tr key={key}>
                                                <td className="si-pic" width="75px"><img src={item.images[0].src} alt="" /></td>
                                                <td className="si-text">
                                                    <div className="product-selected">
                                                        <p>₹{item.prices?.sale_price || item.price} Qty: {item.qty}</p>
                                                        <h6>{item.name}</h6>
                                                    </div>
                                                </td>
                                                <td className="si-close">
                                                    <i className="ti-close" onClick={() => {
                                                        updateQty({ qty: 0, productId: item.id })
                                                        toast.success(<div>{item.name} removed from cart</div>);
                                                    }
                                                    } />
                                                </td>
                                            </tr>)
                                        })
                                    }
                                </tbody>
                            </table>
                        </div>
                        <div className="select-total">
                            <span>total:</span>
                            <h5>₹{cartTotalPrice}</h5>
                        </div>
                        <div className="select-button">
                            {pathname !== "/cart" && <Link to="/cart" className="primary-btn view-card">VIEW CART</Link>}
                            <Link to="/checkout" className="primary-btn checkout-btn">CHECK OUT</Link>
                        </div>
                    </div> : <div>No Items Added</div>}
                </div>
            </li>
            <li className="cart-price">₹{cartTotalPrice}</li>

        </ul>
    )
}

export default CallToActions
