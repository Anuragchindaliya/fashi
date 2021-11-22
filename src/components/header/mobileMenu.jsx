import { useState, useEffect } from "react"
import { Link, useLocation } from "react-router-dom";

const MobileMenu = () => {
    const [isMenuOpen, setMenuOpen] = useState(false);
    const { pathname } = useLocation();
    // console.log(pathname);
    useEffect(() => {
        setMenuOpen(false)
    }, [pathname])
    const handleMenuStatus = () => {
        const menuItem = document.querySelectorAll(".slicknav_item");
        if (isMenuOpen) {
            setMenuOpen(false);
            if (menuItem) {
                menuItem.forEach((item) => {
                    item.removeEventListener("click", null);
                    item.nextElementSibling.classList.add("slicknav_hidden");
                }
                );
            }
        } else {
            setMenuOpen(true);
            if (menuItem) {
                menuItem.forEach((item) => {
                    item.addEventListener("click", (e) => {
                        // e.target

                        const nextEle = e.target.nextElementSibling;
                        // const nextEle = item.nextElementSibling;
                        // console.log("current element ", e.target);
                        // console.log("nextElement ", nextEle);
                        if (nextEle) {
                            if (nextEle.classList.contains("slicknav_hidden")) {
                                menuItem.forEach(item => item.nextElementSibling.classList.remove("slicknav_hidden"));
                                nextEle.classList.remove("slicknav_hidden");
                            } else {
                                nextEle.classList.add("slicknav_hidden");
                            }
                        }


                    }, true)
                }
                );
            }
        }

        // if (menuItem) {
        //     menuItem.addEventListener("click", (e) => {
        //         console.log(e);
        //     })
        // }
    }
    return (
        <>
            <div className="slicknav_menu">
                <b onClick={handleMenuStatus} aria-haspopup="true" role="button" tabIndex="0" className="btn slicknav_btn slicknav_collapsed">
                    {/* <span className="slicknav_menutxt">MENU</span> */}
                    {/* <span className="fa fa-menu"></span> */}
                    <span className="slicknav_icon">
                        <span className="slicknav_icon-bar"></span>
                        <span className="slicknav_icon-bar"></span>
                        <span className="slicknav_icon-bar"></span>
                    </span>
                </b>
                <nav className={`slicknav_nav ${isMenuOpen ? "" : "slicknav_hidden"}`} aria-hidden="true" role="menu">
                    <ul>
                        <li className="active"><Link to="/" role="menuitem">Home</Link></li>
                        <li><Link to="/shop" role="menuitem">Shop</Link></li>
                        <li className="slicknav_collapsed slicknav_parent">
                            <a href="/#" role="menuitem" aria-haspopup="true" tabIndex="-1" className="slicknav_item slicknav_row">
                                Pages
                                <span className="slicknav_arrow">►</span>
                            </a>
                            <ul className="dropdown slicknav_hidden" role="menu" aria-hidden="true">
                                <li><a href="./blog-details.html" role="menuitem" tabIndex="-1">Blog Details</a></li>
                                <li><a href="./shopping-cart.html" role="menuitem" tabIndex="-1">Shopping Cart</a></li>
                                <li><a href="./check-out.html" role="menuitem" tabIndex="-1">Checkout</a></li>
                                <li><a href="./faq.html" role="menuitem" tabIndex="-1">Faq</a></li>
                                <li><a href="./register.html" role="menuitem" tabIndex="-1">Register</a></li>
                                <li><a href="./login.html" role="menuitem" tabIndex="-1">Login</a></li>
                            </ul>
                        </li>
                        <li className="slicknav_collapsed slicknav_parent">
                            <a href="/#" role="menuitem" aria-haspopup="true" tabIndex="-1" className="slicknav_item slicknav_row">
                                Pages
                                <span className="slicknav_arrow">►</span>
                            </a>
                            <ul className="dropdown slicknav_hidden" role="menu" aria-hidden="true">
                                <li><a href="./blog-details.html" role="menuitem" tabIndex="-1">Blog Details</a></li>
                                <li><a href="./shopping-cart.html" role="menuitem" tabIndex="-1">Shopping Cart</a></li>
                                <li><a href="./check-out.html" role="menuitem" tabIndex="-1">Checkout</a></li>
                                <li><a href="./faq.html" role="menuitem" tabIndex="-1">Faq</a></li>
                                <li><a href="./register.html" role="menuitem" tabIndex="-1">Register</a></li>
                                <li><a href="./login.html" role="menuitem" tabIndex="-1">Login</a></li>
                            </ul>
                        </li>
                    </ul>
                </nav>
            </div>
        </>
    )
}

export default MobileMenu;
