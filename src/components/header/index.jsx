import { Link, NavLink, useLocation } from "react-router-dom";
import _ from 'lodash';
import parse from "html-react-parser";
import { toast } from "react-toastify";
import Menu from "./mobileMenu";
const Header = ({ categories: cat, cart, cartActions, products, favourite, favActions }) => {
    const { updateQty } = cartActions;
    const { removeFromFav } = favActions;

    const { data: categories } = cat;
    const keysArr = Object.keys(cart);
    var cartTotalPrice = 0;
    var favTotalPrice = 0;
    !_.isEmpty(cart) && keysArr.forEach((key) => {
        let price = cart[key].prices?.sale_price || cart[key].price;
        cartTotalPrice += parseInt((price) * cart[key].qty);
    })

    const favProducts = products.data.filter((pr) => favourite.includes(pr.id));
    favProducts.forEach((pr) => {
        let price = pr.prices?.sale_price || pr.price;

        favTotalPrice += (+price);
    })
    const { pathname } = useLocation()

    return (
        <div>
            {/* Header Section Begin */}
            <header className="header-section bigHeader">
                {/* <div className="header-top">
                    <div className="container">
                        <div className="ht-left">
                            <div className="mail-service">
                                <i className=" fa fa-envelope" />
                                web2rise@gmail.com
                            </div>
                            <div className="phone-service">
                                <i className=" fa fa-phone" />
                                +91 8010334416
                            </div>
                        </div>
                        <div className="ht-right">
                            <a href="/#" className="login-panel"><i className="fa fa-user" />Login</a>
                            <div className="top-social">
                                <a href="/#"><i className="ti-facebook" /></a>
                                <a href="/#"><i className="ti-twitter-alt" /></a>
                                <a href="/#"><i className="ti-linkedin" /></a>
                                <a href="/#"><i className="ti-pinterest" /></a>
                            </div>
                        </div>
                    </div>
                </div> */}
                <div className="container-fluid container">
                    <div className="inner-header">
                        <div className="row">
                            <div className="col-lg-2 col-md-2">
                                <div className="logo">
                                    <NavLink to="/">
                                        <img src="/assets/img/logo.png" alt="" />
                                    </NavLink>
                                </div>
                            </div>
                            <div className="col-lg-7 col-md-7">
                                <div className="advanced-search">
                                    <button type="button" className="category-btn">All Categories</button>
                                    <form action="#" className="input-group">
                                        <input type="text" placeholder="What do you need? BigScreen" />
                                        <button type="button"><i className="ti-search" /></button>
                                    </form>
                                </div>
                            </div>
                            <div className="col-lg-3 text-right col-md-3">
                                <ul className="nav-right">
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
                                                    <Link to="/fav" className="primary-btn view-card">VIEW FAVOURITE</Link>
                                                    <a href="/#" className="primary-btn checkout-btn">CHECK OUT</a>
                                                </div>
                                            </div> : <div>No Favourite Items Added</div>}

                                            { }
                                        </div>
                                    </li>
                                    <li className="cart-icon"><Link to="/cart">
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
                                                   {pathname === "/cart" && <Link to="/cart" className="primary-btn view-card">VIEW CART</Link>}
                                                    <a href="/#" className="primary-btn checkout-btn">CHECK OUT</a>
                                                </div>
                                            </div> : <div>No Items Added</div>}
                                        </div>
                                    </li>
                                    <li className="cart-price">₹{cartTotalPrice}</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="nav-item">
                    <div className="container">
                        <div className="nav-depart">
                            <div className="depart-btn">
                                <i className="ti-menu" />
                                <span>All departments</span>
                                <ul className="depart-hover">
                                    {
                                        categories.length > 0 &&
                                        categories.filter(cat => cat.parent === 0).map(item => <li key={item.id}><NavLink to={`/category/${item.slug}`}>{parse(item.name)}</NavLink></li>)
                                    }
                                </ul>
                            </div>
                        </div>
                        <nav className="nav-menu mobile-menu">
                            <ul>
                                <li><NavLink to="/">Home</NavLink></li>
                                <li><NavLink to="/shop">Shop</NavLink></li>
                                <li><a href="/#">Collection</a>
                                    <ul className="dropdown">
                                        <li><a href="/#">Men's</a></li>
                                        <li><a href="/#">Women's</a></li>
                                        <li><a href="/#">Kid's</a></li>
                                    </ul>
                                </li>
                                <li><a href="./blog.html">Blog</a></li>
                                <li><a href="./contact.html">Contact</a></li>
                                <li><a href="/#">Pages</a>
                                    <ul className="dropdown">
                                        <li><a href="./blog-details.html">Blog Details</a></li>
                                        <li><Link to="/shop">Shopping Cart</Link></li>
                                        <li><Link to="/checkout">Checkout</Link></li>
                                        <li><a href="./faq.html">Faq</a></li>
                                        <li><a href="./register.html">Register</a></li>
                                        <li><a href="./login.html">Login</a></li>
                                    </ul>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </header>
            {/* Header End */}
        </div>
    );
}
export default Header;