import React from 'react'

const TotalProductsCount = ({ allProducts }) => {
    return (
        <div className="col-lg-5 col-md-5 text-right">
            {/* {finalProducts.length > 0 ? <p>Show 01- 09 Of {finalProducts.length} Product</p> : "No result"} */}
            {allProducts.length > 0 ? <p>Show 01 - {allProducts.length < 10 ? `0${allProducts.length}` : allProducts.length} Product</p> : "No result"}
        </div>
    )
}

export default TotalProductsCount
