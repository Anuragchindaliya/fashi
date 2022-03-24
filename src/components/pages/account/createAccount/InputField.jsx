const InputField = ({ half, name, type, label, required, handleChange, billingDetails, pattern, errorMessage, error }) => {
    return (
        <div className={`${half ? "col-lg-6" : "col-lg-12"} mt-2`} >

            <label htmlFor={name}>
                {label}
                {required && <span>*</span>}
            </label>

            <input type={type} id={name} name={name} onChange={(e) => handleChange(e, pattern, errorMessage)} value={billingDetails[name]} pattern={pattern} />

            {/* {errorMessage && <div className='error small text-danger'>{errorMessage}</div>} */}
            {billingDetails[name] && error && <div className='small text-danger'> {error} </div>}
        </div>
    )
}

export default InputField