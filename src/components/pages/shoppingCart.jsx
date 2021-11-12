import  _  from "lodash";

const ShoppingCart = ({ cart, cartActions }) => {
    const { addToCart, updateQty, resetCart } = cartActions;

    const keysArr = Object.keys(cart);
    var totalPrice = 0;
    
    !_.isEmpty(cart) && keysArr.forEach((key) => {
        totalPrice += parseInt(cart[key].price*cart[key].qty);
    })

    console.log(cart, cartActions);
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
                                            <th><i className="ti-close" /></th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            keysArr.length > 0 ?
                                                keysArr.map((key) => {
                                                    let item = cart[key];
                                                    return (
                                                        <tr key={key}>
                                                            <td className="cart-pic first-row p-5"><img src={item.images[0].src} alt="" /></td>
                                                            <td className="cart-title first-row">
                                                                <h5>{cart[key].name}</h5>
                                                            </td>
                                                            <td className="p-price first-row">₹{item.price}</td>
                                                            <td className="qua-col first-row">
                                                                <div className="quantity">
                                                                    <span class="dec qtybtn">-</span>
                                                                    <div className="pro-qty">
                                                                        <input type="text" defaultValue={item.qty} />
                                                                    </div>
                                                                    <span class="inc qtybtn">+</span>
                                                                </div>
                                                            </td>
                                                            <td className="total-price first-row">₹{item.price * item.qty}</td>
                                                            <td className="close-td first-row"><i onClick={() => updateQty({ qty: 0, productId: item.id })} className="ti-close" /></td>
                                                        </tr>)
                                                })
                                                : (<tr><td colSpan="5">Not items added to cart</td></tr>)
                                        }
                                    </tbody>
                                </table>
                            </div>
                            <div className="row">
                                <div className="col-lg-4">
                                    <div className="cart-buttons">
                                        <a href="#" className="primary-btn continue-shop">Continue shopping</a>
                                        <a href="#" className="primary-btn up-cart">Update cart</a>
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
                                        <a href="#" className="proceed-btn">PROCEED TO CHECK OUT</a>
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

export default ShoppingCart;
