import { Link } from "react-router-dom";
import Copyright from "./copyright";
import NewsLetter from "./newsLetter";
import SocialLinks from "./socialLinks";

function Footer() {
    return (
        <>
            {/* Footer Section Begin */}
            <footer className="footer-section">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3">
                            <div className="footer-left">
                                <div className="footer-logo">
                                    <a href="/#"><img src="img/footer-logo.png" alt="" /></a>
                                </div>
                                <ul>
                                    <li>Address: 60-49 Road 11378 New York</li>
                                    <li>Phone: +65 11.188.888</li>
                                    <li>Email: hello.colorlib@gmail.com</li>
                                </ul>
                                <SocialLinks />
                            </div>
                        </div>
                        <div className="col-lg-2 offset-lg-1">
                            <div className="footer-widget">
                                <h5>Information</h5>
                                <ul>
                                    <li><a href="/#">About Us</a></li>
                                    <li><a href="/#">Checkout</a></li>
                                    <li><a href="/#">Contact</a></li>
                                    <li><a href="/#">Serivius</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-2">
                            <div className="footer-widget">
                                <h5>My Account</h5>
                                <ul>
                                    <li><a href="/#">My Account</a></li>
                                    <li><a href="/#">Contact</a></li>
                                    <li><Link to="/cart">Shopping Cart</Link></li>
                                    <li><Link to="/shop">Shop</Link></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <NewsLetter />
                        </div>
                    </div>
                </div>
                <div className="copyright-reserved">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <Copyright />
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
            {/* Footer Section End */}
        </>
    );
};
export default Footer;