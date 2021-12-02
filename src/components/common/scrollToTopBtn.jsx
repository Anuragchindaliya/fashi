import React from 'react'

const ScrollToTopBtn = () => {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    }
    return (
        <div className="scroll-btn" onClick={scrollToTop}>
            <i className="fa fa-arrow-up"></i>
        </div>
    )
}

export default ScrollToTopBtn
