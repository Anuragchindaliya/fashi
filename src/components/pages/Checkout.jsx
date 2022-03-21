import accountActions from 'actions/account.action';
import Breadcrumb from 'components/common/breadcrumb'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import { userLogin } from 'services/api';
import { getTotalPrice } from 'utils';

const Checkout = ({ cart }) => {
    const account = useSelector((state) => state.account);
    const dispatch = useDispatch();

    console.log(account, dispatch, "account hai");
    const initialValue = {
        firstName: "",
        lastName: "",
        companyName: "",
        country: "",
        streetAddress: "",
        postalCode: "",
        town: "",
        state: "",
        email: "",
        phone: "",
        couponCode: "",
        password: ""
    }
    const [createAccountFields, setCreateAccountFields] = useState(false);
    const [billingDetails, setBillingDetails] = useState(initialValue);
    const products = Object.keys(cart);

    const cartTotalPrice = getTotalPrice(cart);
    const validation = {

    }
    const handleChange = (e) => {
        setBillingDetails({ ...billingDetails, [e.target.name]: e.target.value });
    }
    const createAccount = (e) => {
        e.preventDefault();
        dispatch(accountActions.createAccount());
        let bodyData = {
            "username": billingDetails.firstName + billingDetails.lastName,
            "email": billingDetails.email,
            "name": billingDetails.firstName,
            "password": billingDetails.password,
            "billing": {
                "first_name": billingDetails.firstName,
                "last_name": billingDetails.lastName,
                "company": billingDetails.companyName,
                "address_1": billingDetails.streetAddress,
                "city": billingDetails.town,
                "state": billingDetails.state,
                "postcode": billingDetails.postalCode,
                "country": billingDetails.country,
                "email": billingDetails.email,
                "phone": billingDetails.phone
            }
        }


        // userLogin(bodyData).then((res) => )

        fetch("http://localhost/meapi/account.php", {
            method: "POST", body: JSON.stringify(bodyData)
        }).then((res) => res.json())
            .then((result) => {
                if (result.code?.match(/registration-error/)) {
                    toast.error("An account is already registered ");
                    dispatch(accountActions.accountError({ error: result }))
                } else {
                    toast.success("Account created successfully");
                    dispatch(accountActions.accountSuccess({ data: result }))
                }
            })
            .catch((e) => console.error(e));
    }

    return (
        <>
            <Breadcrumb />

            <section className="checkout-section spad">
                <div className="container">
                    {account.loading ? <div style={{ display: "flex", justifyContent: "center", alignItems: "center", position: "fixed", zIndex: 9, backgroundColor: "rgba(255,255,255,.9)", height: "100vh", width: "100%", top: 0, left: 0 }}>
                        <div className='spinner-border'></div>
                    </div> : <div className="checkout-form">
                        <div className="row">
                            <div className="col-lg-6">
                                <div className="checkout-content">
                                    <Link to="/login" className="content-btn">Click Here To Login</Link>
                                </div>
                                <h4>Biiling Details</h4>
                                <form className="row" onSubmit={createAccount}>
                                    <div className="col-lg-6">
                                        <label htmlFor="firstName">First Name<span>*</span></label>
                                        <input type="text" id="firstName" name='firstName' onChange={handleChange} value={billingDetails.firstName} />
                                    </div>
                                    <div className="col-lg-6">
                                        <label htmlFor="lastName">Last Name</label>
                                        <input type="text" id="lastName" name="lastName" onChange={handleChange} value={billingDetails.lastName} />
                                    </div>
                                    <div className="col-lg-12">
                                        <label htmlFor="companyName">Company Name</label>
                                        <input type="text" id="companyName" name='companyName' onChange={handleChange} value={billingDetails.companyName} />
                                    </div>
                                    <div className="col-lg-12">
                                        <label htmlFor="country">Country<span>*</span></label>
                                        <input type="text" id="country" name="country" onChange={handleChange} value={billingDetails.country} />
                                    </div>
                                    <div className="col-lg-12">
                                        <label htmlFor="streetAddress">Street Address<span>*</span></label>
                                        <input type="text" id="streetAddress" className="streetAddress" onChange={handleChange} value={billingDetails.streetAddress} name="streetAddress" />
                                    </div>
                                    <div className="col-lg-6">
                                        <label htmlFor="postalCode">Postcode / ZIP (optional)</label>
                                        <input type="text" id="postalCode" name='postalCode' onChange={handleChange} value={billingDetails.postalCode} />
                                    </div>
                                    <div className="col-lg-6">
                                        <label htmlFor="postalCode">State</label>
                                        <input type="text" id="state" name='state' onChange={handleChange} value={billingDetails.state} />
                                    </div>
                                    <div className="col-lg-12">
                                        <label htmlFor="town">Town / City<span>*</span></label>
                                        <input type="text" id="town" name='town' onChange={handleChange} value={billingDetails.town} />
                                    </div>
                                    <div className="col-lg-6">
                                        <label htmlFor="email">Email Address<span>*</span></label>
                                        <input type="text" id="email" name='email' onChange={handleChange} value={billingDetails.email} />
                                    </div>
                                    <div className="col-lg-6">
                                        <label htmlFor="phone">Phone<span>*</span></label>
                                        <input type="text" id="phone" name='phone' onChange={handleChange} value={billingDetails.phone} />
                                    </div>
                                    {account.data === null && <div className="col-lg-12">
                                        <div className="create-item">
                                            <label htmlFor="acc-create" >
                                                Create an account?
                                                <input type="checkbox" id="acc-create" checked={createAccountFields} onChange={() => { setCreateAccountFields(!createAccountFields); }} />
                                                <span className="checkmark" />
                                            </label>
                                        </div>
                                    </div>}
                                    {account.data === null && createAccountFields && (<>
                                        <div className="col-lg-6">

                                            <input type="password" name='password' onChange={handleChange} value={billingDetails.password} placeholder="Password" />
                                        </div>
                                        <div className="col-lg-6">
                                            <button type='submit' className='site-btn place-btn'>Create An Account</button>
                                        </div>
                                    </>)}

                                </form>
                            </div>
                            <div className="col-lg-6">
                                <div className="checkout-content">
                                    <input type="text" placeholder="Enter Your Coupon Code" onChange={handleChange} value={billingDetails.couponCode} />
                                </div>
                                <div className="place-order">
                                    <h4>Your Order</h4>
                                    <div className="order-total">
                                        <ul className="order-table">
                                            <li>Product <span>Total</span></li>
                                            {products.map((key, i) => {
                                                const item = cart[key];
                                                return <li key={i} className="fw-normal">{item.name} x {item.qty} <span>{item.prices.price}</span></li>
                                            })
                                            }

                                            <li className="fw-normal">Subtotal <span>₹{cartTotalPrice}</span></li>
                                            <li className='total-price'>Total <span>₹{cartTotalPrice}</span></li>
                                        </ul>
                                        <div className="payment-check">
                                            <div className="pc-item">
                                                <label htmlFor="pc-check">
                                                    Cheque Payment
                                                    <input type="checkbox" id="pc-check" />
                                                    <span className="checkmark" />
                                                </label>
                                            </div>
                                            <div className="pc-item">
                                                <label htmlFor="pc-paypal">
                                                    Paypal
                                                    <input type="checkbox" id="pc-paypal" />
                                                    <span className="checkmark" />
                                                </label>
                                            </div>
                                            <div className="pc-item">
                                                <label htmlFor="pc-razor">
                                                    Razor Pay
                                                    <input type="checkbox" id="pc-razor" />
                                                    <span className="checkmark" />
                                                </label>
                                            </div>
                                        </div>
                                        <div className="order-btn">
                                            <button type="submit" className="site-btn place-btn">Place Order</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>}

                </div>
            </section >
        </>
    )
}

export default Checkout