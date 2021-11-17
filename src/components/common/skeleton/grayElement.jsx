import React from 'react'

const GrayElement = ({ grayPropsStyles = {},grayClass="" }) => {
    const grayStyle = {
        "width": "100%",
        // "background": "whitesmoke",
        "height": "auto",
        "borderRadius": "50%",
        "transitionProperty": "width, height",
        "transitionDuration": "0.5s",
        "margin":"5px 0"
    }
    return (
        <div className={`grayElement ${grayClass}`} style={{ ...grayStyle, ...grayPropsStyles }}></div>
    )
}

export default GrayElement
