import _ from "lodash";
import { Link } from "react-router-dom";
import CartItem from "./cartItem";

const Cart = ({ cart, cartActions }) => {
    const { resetCart } = cartActions;

    const keysArr = Object.keys(cart);
    var totalPrice = 0;

    !_.isEmpty(cart) && keysArr.forEach((key) => {
        let prodPrice = cart[key].price || cart[key].prices.sale_price;
        totalPrice += parseInt(prodPrice * cart[key].qty);
    })

    const allCartQty = {};
    keysArr.forEach((key) => {
        allCartQty[key] = parseInt(cart[key].qty);
    })
    return (
        <>
            {/* Shopping Cart Section Begin */}
            <section className="shopping-cart spad">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="cart-table">
                                <table>
                                    <thead>
                                        <tr>
                                            <th>Image</th>
                                            <th className="p-name">Product Name</th>
                                            <th>Price</th>
                                            <th>Quantity</th>
                                            <th>Total</th>
                                            <th><i className="ti-close" onClick={resetCart} /></th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            keysArr.length > 0 ?
                                                keysArr.map((key) => {
                                                    return <CartItem item={cart[key]} key={key} cartActions={cartActions} />
                                                })
                                                : (<tr><td colSpan="5">No items added to cart</td></tr>)
                                        }
                                    </tbody>
                                </table>
                            </div>
                            <div className="row">
                                <div className="col-lg-4">
                                    <div className="cart-buttons">
                                        <a href="/#" className="primary-btn continue-shop">Continue shopping</a>
                                        <a href="/#" className="primary-btn up-cart">Update cart</a>
                                    </div>
                                    <div className="discount-coupon">
                                        <h6>Discount Codes</h6>
                                        <form action="#" className="coupon-form">
                                            <input type="text" placeholder="Enter your codes" />
                                            <button type="submit" className="site-btn coupon-btn">Apply</button>
                                        </form>
                                    </div>
                                </div>
                                <div className="col-lg-4 offset-lg-4">
                                    <div className="proceed-checkout">
                                        <ul>
                                            <li className="subtotal">Subtotal <span>₹{totalPrice}</span></li>
                                            <li className="cart-total">Total <span>₹{totalPrice}</span></li>
                                        </ul>
                                        <Link to="/checkout" className="proceed-btn">PROCEED TO CHECK OUT</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* Shopping Cart Section End */}
        </>
    )
}

export default Cart;
