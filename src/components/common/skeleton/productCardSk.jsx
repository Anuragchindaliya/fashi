import React from 'react'
import GrayElement from './grayElement'

const ProductCardSk = () => {
    return (
        <>
            <div className="product-item">
                <div className="pi-pic">
                    <GrayElement grayPropsStyles={{ "height": "300px", "borderRadius": "3px", "width": "100%", "margin": "0" }} />
                    <GrayElement grayPropsStyles={{ "height": "25px", "borderRadius": "3px", "width": "60px", "margin": "0", "background": "white" }} grayClass={"sale"} />
                    <div className="icon heart-icon">
                        <i className={"icon_heart_alt"} />
                    </div>
                    <ul>
                        <GrayElement grayPropsStyles={{ "height": "50px", "borderRadius": "3px", "width": "70%", "margin": "0 auto", "background": "lightgray" }} />
                    </ul>
                </div>

                <div className="pi-text">
                    <div className="catagory-name">
                        <GrayElement grayPropsStyles={{ "height": "10px", "borderRadius": "3px", "width": "100px", "margin": "auto" }} />
                    </div>
                    <h5>
                        <GrayElement grayPropsStyles={{ "height": "20px", "borderRadius": "3px", "width": "200px", "margin": "auto" }} />
                    </h5>
                    <div className="product-price">
                        <GrayElement grayPropsStyles={{ "height": "20px", "borderRadius": "3px", "width": "100px", "margin": "10px auto" }} />
                    </div>
                </div>

            </div>
        </>
    )
}

export default ProductCardSk
