import React from 'react';
import { useParams, useLocation } from "react-router-dom";

const Dummy = ({ products, categories }) => {
    const { cat } = useParams();
    const finalProduct = products.data.filter((pr) => {
        var ans = false;
        pr.categories.forEach(cate =>{
        if (cate.slug === cat.toLowerCase()) {
            ans = true;
        }
    })
    return ans;
})
    console.log(cat, products.data[0], finalProduct);

    return (
        <div>

        </div>
    )
}

export default Dummy
