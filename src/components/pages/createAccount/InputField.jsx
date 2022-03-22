import React, { useState } from 'react'

const InputField = ({ half, name, label, required, handleChange, billingDetails, pattern, errorMessage }) => {
    const [focused, setFocused] = useState(false);
    const handleFocus = () => {
        setFocused(true);
    }

    return (
        <div className={`${half ? "col-lg-6" : "col-lg-12"} mt-2`} >

            <label htmlFor={name}>
                {label}
                {required && <span>*</span>}
            </label>

            <input type="text" id={name} name={name} onChange={(e) => handleChange(e, pattern, errorMessage)} value={billingDetails[name]} onBlur={handleFocus} focused={focused.toString()} pattern={pattern} />

            {errorMessage && <div className='error small text-danger'>{errorMessage}</div>}
        </div>
    )
}

export default InputField