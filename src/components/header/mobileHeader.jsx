import { Link, NavLink } from "react-router-dom";

import MobileMenu from "./mobileMenu";
import { getTotalPrice } from "utils";
import Searchbar from "./Searchbar";

const MobileHeader = ({ cart, favourite, searchActions }) => {
    const keysArr = Object.keys(cart);
    const cartTotalPrice = getTotalPrice(cart);
    return (
        <header className="header-section mobile-header stickToTop">
            {/* Header Section Begin */}
            <div className="container">
                <div className="inner-header">
                    <div className="row">
                        <div className="col-md-2 col-2">
                            <div id="mobile-menu-wrap" >
                                <MobileMenu />
                            </div>
                        </div>
                        <div className="col-3">
                            <div className="logo">
                                <NavLink to="/">
                                    <img src="/assets/img/logo.png" alt="" />
                                </NavLink>
                            </div>
                        </div>
                        <div className="col offset-1">
                            <ul className="nav-right">
                                <li className="cart-icon">
                                    <Link to="/fav">
                                        <i className="icon_heart_alt" />
                                        <span>{favourite.length}</span>
                                    </Link>
                                </li>
                                <li className="cart-icon"><Link to="/cart">
                                    <i className="icon_bag_alt" />
                                    <span>{keysArr.length}</span>
                                </Link>
                                </li>
                                <li className="cart-price">₹{cartTotalPrice}</li>
                            </ul>
                        </div>
                        <div className="col-lg-7 col-md-7 mb-3">
                            <Searchbar searchActions={searchActions} />
                        </div>
                    </div>
                </div>
            </div>
            {/* Header End */}
        </header>

    );
}
export default MobileHeader;