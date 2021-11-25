import { Link, NavLink, useLocation } from "react-router-dom";
import parse from "html-react-parser";
import { toast } from "react-toastify";
import { getTotalPrice } from "utils";
import Searchbar from "./Searchbar";
const Header = ({ categories: cat, cart, cartActions, products, favourite, favActions, searchActions }) => {

    const { pathname } = useLocation();

    const { updateQty } = cartActions;
    const { removeFromFav } = favActions;
    const { data: categories } = cat;

    const cartTotalPrice = getTotalPrice(cart);
    const keysArr = Object.keys(cart);
    //GET TOTAL FAVOURITE PPDUCT PRICE
    var favTotalPrice = 0;
    const favProducts = products.data.filter((pr) => favourite.includes(pr.id));
    favProducts.forEach((pr) => {
        let price = pr.prices?.sale_price || pr.price;
        favTotalPrice += (+price);
    })

    return (
        <div>
            {/* Header Section Begin */}
            <header className="header-section bigHeader">
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
                                <Searchbar searchActions={searchActions} />
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
                                                    {pathname !== "/cart" && <Link to="/cart" className="primary-btn view-card">VIEW CART</Link>}
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
                        <nav className="nav-menu">
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