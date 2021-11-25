import { Link, NavLink, useHistory } from "react-router-dom";
import _ from 'lodash';
import MobileMenu from "./mobileMenu";
import { getTotalPrice } from "utils";
const MobileHeader = ({ cart, favourite, searchActions }) => {
    const { searchProductsFetch } = searchActions;
    const keysArr = Object.keys(cart);
    const cartTotalPrice = getTotalPrice(cart);
    const history = useHistory();
    var handleSearchInput = () => {
        return _.debounce((event) => {
            if (event.target.value.length>2) {
                searchProductsFetch(event.target.value);
                history.push("/search");
            }
        }, 1000);
    }
    const searchQuery = () => {
        debugger;
        const searchTerm = document.getElementById('search').value;
        if(searchTerm.length>2){
            searchProductsFetch(searchTerm);
            history.push("/search");
        } 
    }

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
                            <div className="advanced-search">
                                <button type="button" className="category-btn">All Categories</button>
                                <form action="#" className="input-group">
                                    <input type="text" placeholder="What do you need? Mobile header" onChange={handleSearchInput()} id='search' />
                                    <button type="button" onClick={searchQuery}><i className="ti-search" /></button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Header End */}
        </header>

    );
}
export default MobileHeader;