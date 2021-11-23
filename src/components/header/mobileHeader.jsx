import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import _, { debounce } from 'lodash';
import MobileMenu from "./mobileMenu";
import { searchProduct } from "services/api";
const MobileHeader = ({ cart, favourite }) => {

    const keysArr = Object.keys(cart);
    var cartTotalPrice = 0;
    !_.isEmpty(cart) && keysArr.forEach((key) => {
        let price = cart[key].prices?.sale_price || cart[key].price;
        cartTotalPrice += parseInt((price) * cart[key].qty);
    })
    const [searchTerm, setSearchTerm] = useState("");
    useEffect(() => {
        console.log(searchTerm);
    }, [searchTerm])

    const [searchResult,setSearchResult]=useState([]);
    const searchQuery = async () => {
        if (searchTerm.length < 3) {
            console.log("Please write correct query")
        } else {
            
            const result = await searchProduct(searchTerm);
            console.log(result);
            debugger;
            setSearchResult(result);
            console.log("ok")
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
                                    <input type="text" placeholder="What do you need? Mobile header" onChange={e => setSearchTerm(e.target.value)} />
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