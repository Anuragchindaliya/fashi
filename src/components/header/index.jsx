import { Link, NavLink } from "react-router-dom";
import parse from "html-react-parser";
import Searchbar from "./Searchbar";
import CallToActions from "./cta";
const Header = ({ categories: cat, cart, cartActions, products, favourite, favActions, searchActions }) => {
    const { data: categories } = cat;
    console.log("from header ",categories);
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
                                <Searchbar searchActions={searchActions} categories={categories} />
                            </div>
                            <div className="col-lg-3 text-right col-md-3">
                                <CallToActions products={products} favourite={favourite} favActions={favActions} cart={cart} cartActions={cartActions} />
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