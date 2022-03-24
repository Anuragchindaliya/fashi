import accountActions from 'actions/account.action';
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import _ from "lodash";
import { toast } from 'react-toastify';
import { userLogin } from 'services/api';
import InputField from './InputField';
import { Link } from 'react-router-dom';


const CreateAccount = () => {
    const account = useSelector((state) => state.account);
    const [error, setError] = useState({});
    const dispatch = useDispatch();
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
        password: "",
        confirmPassword: ""
    }
    const [billingDetails, setBillingDetails] = useState(initialValue);

    const handleChange = (e, pattern, errorMessage) => {
        if (!e.target.value.match(pattern)) {
            setError({ ...error, [e.target.name]: errorMessage });
        } else {
            const newError = { ...error };
            delete newError[e.target.name];
            setError(newError);
        }
        setBillingDetails({ ...billingDetails, [e.target.name]: e.target.value });
    }
    const validateForm = () => {
        const requiredFields = inputFields.filter((input) => input.required);
        let finalStatus = false;
        requiredFields.forEach((field) => {
            if (_.isEmpty(billingDetails[field.name] || !billingDetails[field.name].match(inputFields[field.pattern]))) {
                finalStatus = true;
            }
        })
        return finalStatus;
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

    const inputFields = [
        {
            id: 1,
            name: "email",
            type: "email",
            placeholder: "Email Address",
            label: "Email Address",
            errorMessage: "It should be valid email address",
            pattern: "^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+[.][a-zA-Z0-9.-]{2,}$",
            required: true,
            half: true
        },
        {
            id: 2,
            name: "phone",
            type: "number",
            placeholder: "Phone",
            label: "Phone",
            errorMessage: "Phone no. should be of 10 digits",
            pattern: `[0-9]{10}`,
            half: true
        },
        {
            id: 3,
            name: "password",
            type: "password",
            placeholder: "Password",
            label: "Password",
            errorMessage: "password should be of 8-20 character and include at least 1 letter, 1 number and 1 special character",
            pattern: `^(?=.*?[A-Za-z])(?=.*?[A-Za-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$`,
            required: true,
            half: true
        },
        {
            id: 4,
            name: "confirmPassword",
            type: "password",
            placeholder: "Confirm Password",
            label: "Confirm Password",
            errorMessage: "Password doesn't match",
            pattern: `${billingDetails.password}`,
            required: true,
            half: true
        },
        {
            id: 5,
            name: "firstName",
            type: "text",
            placeholder: "First Name",
            label: "First Name",
            required: true,
            half: true
        },
        {
            id: 6,
            name: "lastName",
            type: "text",
            placeholder: "Last Name",
            label: "Last Name",
            half: true
        },
        {
            id: 7,
            name: "companyName",
            type: "text",
            placeholder: "Company Name",
            label: "Company Name",
        },
        {
            id: 8,
            name: "country",
            type: "text",
            placeholder: "Country",
            label: "Country",
            required: true,
        },
        {
            id: 9,
            name: "streetAddress",
            type: "text",
            placeholder: "Street Address",
            label: "Street Address",
            required: true,
        },
        {
            id: 10,
            name: "postalCode",
            type: "number",
            placeholder: "Postalcode / ZIP ",
            errorMessage: "Postalcode should be of 6 digit",
            pattern: "^[0-9]{6}$",
            label: "Postalcode / ZIP",
        },
        {
            id: 11,
            name: "state",
            type: "text",
            placeholder: "State",
            label: "State"
        },
        {
            id: 12,
            name: "town",
            type: "text",
            placeholder: "Town / City",
            label: "Town / City"
        }
    ];

    return (
        <>
            <section className="checkout-section spad">
                <div className="container">
                    {/* <div style={{ display: "flex", justifyContent: "center", alignItems: "center", position: "fixed", zIndex: 9, backgroundColor: "rgba(255,255,255,.9)", height: "100vh", width: "100%", top: 0, left: 0 }}>
                        <div className='spinner-border'></div>
                    </div> */}

                    {account.loading ? <div id="preloder" >
                        <div class="loader"></div>
                    </div> : <div className="checkout-form">
                        <div className="row">
                            <div className="col-lg-6 mx-auto">
                                <h4 className='text-center'>Create Account</h4>
                                <form className="row" onSubmit={createAccount}>
                                    {inputFields.map((input) => (
                                        <InputField key={input.id} {...input} error={error[input.name]} handleChange={handleChange} billingDetails={billingDetails} />
                                    ))}
                                    <div className="col-lg-12 mt-3">
                                        <button type='submit' className={`site-btn place-btn w-100 `} disabled={validateForm()}>Create An Account</button>
                                    </div>
                                </form>
                                <Link to="/account" className='btn w-100 mt-3 border-bottom text-center'>Or Create An Account</Link>
                            </div>
                        </div>
                    </div>}

                </div>
            </section >
        </>
    )
}

export default CreateAccount;