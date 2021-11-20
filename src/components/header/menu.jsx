import { useState,useEffect } from "react"
import { Link, useLocation } from "react-router-dom";

const Menu = () => {
    const [isMenuOpen, setMenuOpen] = useState(false);
    const { pathname } = useLocation();
    console.log(pathname);
    useEffect(() => {
        setMenuOpen(false)
    }, [pathname])
    const handleMenuStatus = () => {
        if (isMenuOpen) {
            setMenuOpen(false)
        } else {
            setMenuOpen(true)
        }

    }
    return (
        <>
            <div className="slicknav_menu">
                <b href="/#" onClick={handleMenuStatus} aria-haspopup="true" role="button" tabIndex="0" className="btn slicknav_btn slicknav_collapsed">
                    <span className="slicknav_menutxt">MENU</span>
                    <span className="fa fa-menu"></span>
                    {/* <span className="slicknav_icon">
                        <span className="slicknav_icon-bar"></span>
                        <span className="slicknav_icon-bar"></span>
                        <span className="slicknav_icon-bar"></span>
                    </span> */}
                </b>
                <nav className={`slicknav_nav ${isMenuOpen ? "" : "slicknav_hidden"}`} aria-hidden="true" role="menu">
                    <ul>
                        <li className="active"><Link to="/" role="menuitem">Home</Link></li>
                        <li><Link to="/shop" role="menuitem">Shop</Link></li>
                        <li className="slicknav_collapsed slicknav_parent"><a href="/#" role="menuitem" aria-haspopup="true" tabIndex="-1" className="slicknav_item slicknav_row"><a href="/#">Collection</a>
                            <span className="slicknav_arrow">►</span></a><ul className="dropdown slicknav_hidden" role="menu" aria-hidden="true">
                                <li><a href="/#" role="menuitem" tabIndex="-1">Men's</a></li>
                                <li><a href="/#" role="menuitem" tabIndex="-1">Women's</a></li>
                                <li><a href="/#" role="menuitem" tabIndex="-1">Kid's</a></li>
                            </ul>
                        </li>
                        <li><a href="./blog.html" role="menuitem">Blog</a></li>
                        <li><a href="./contact.html" role="menuitem">Contact</a></li>
                        <li className="slicknav_collapsed slicknav_parent"><a href="/#" role="menuitem" aria-haspopup="true" tabIndex="-1" className="slicknav_item slicknav_row" ><a href="/#">Pages</a>
                            <span className="slicknav_arrow">►</span></a><ul className="dropdown slicknav_hidden" role="menu" aria-hidden="true">
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

export default Menu
