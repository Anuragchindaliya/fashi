import React from 'react'

const NewsLetter = () => {
    return (
        <div className="newslatter-item">
            <h5>Join Our Newsletter Now</h5>
            <p>Get E-mail updates about our latest shop and special offers.</p>
            <form action="#" className="subscribe-form">
                <input type="text" placeholder="Enter Your Mail" />
                <button type="button">Subscribe</button>
            </form>
        </div>
    )
}

export default NewsLetter
