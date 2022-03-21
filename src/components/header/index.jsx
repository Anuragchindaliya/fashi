import { Link, NavLink } from "react-router-dom";
import parse from "html-react-parser";
import Searchbar from "./Searchbar";
import CallToActions from "./cta";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
const Header = ({ categories: cat, cart, cartActions, products, favourite, favActions, searchActions }) => {
    const account = useSelector((state) => state.account);
    console.log(account, "real header hai");
    const { first_name, last_name, avatar_url } = account?.data;
    const { data: categories } = cat;
    const [headerVisibility, setHeaderVisibility] = useState({ hidden: false, pos: 0 });

    const hiderHeader = () => {
        var st = window.pageYOffset || document.documentElement.scrollTop;
        if (st > 100) {
            if (st > headerVisibility.pos) {
                // downscroll code
                setHeaderVisibility({ hidden: true, pos: st });
            } else {
                // upscroll code
                setHeaderVisibility({ hidden: false, pos: 0 });
            }
        }

        headerVisibility.pos = st <= 0 ? 0 : st; // For Mobile or negative scrolling

        // console.log("window scroll position ", window.pageYOffset, "previous position ", headerVisibility.pos, window.pageYOffset > headerVisibility.pos)

    }
    useEffect(() => {
        window.addEventListener("scroll", hiderHeader);
        return () => {
            window.removeEventListener("scroll", hiderHeader)
        }
    }, [])
    return (
        <div className="bigHeaderWrap">
            {/* Header Section Begin */}
            <header className={`header-section bigHeader ${headerVisibility.hidden ? "hidden fixed-top" : "stickToTop"}`}>
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
                                {account.data &&
                                    <div>
                                        <img src={avatar_url} alt="customer" />{first_name}
                                    </div>
                                }
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
                                <li><NavLink to="/" >Home</NavLink></li>
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