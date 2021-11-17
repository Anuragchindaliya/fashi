import React from 'react'
import ProductCardSk from './productCardSk';

const ShopSkeleton = () => {
    return (
        <>

            <div className="col-lg-9 order-1 order-lg-2">
                <div className="product-show-option">
                    <div className="row">
                        <div className="col-lg-7 col-md-7">
                            <div className="select-option">
                                <select className="sorting">
                                    <option value>Default Sorting</option>
                                </select>
                                <select className="p-show">
                                    <option value>Show:</option>
                                </select>
                            </div>
                        </div>
                        <div className="col-lg-5 col-md-5 text-right">
                            <p>Show 01- 09 Of 36 Product</p>
                        </div>
                    </div>
                </div>
                <div className="product-list">
                    <div className="row">
                        {
                            [...Array(9).fill(<ProductCardSk />)].map((el, index) => {
                                return (
                                    <div key={index} className="col-lg-4 col-sm-6">
                                        {el}
                                    </div>
                                )
                            }
                            )
                        }
                    </div>
                </div>
                <div className="loading-more">
                    <i className="icon_loading" />
                    <a href="/#">Loading More</a>
                </div>
            </div>
        </>
    )
}

export default ShopSkeleton
