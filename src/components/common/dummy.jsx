import React from 'react';
import { useParams} from "react-router-dom";

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

    return (
        <div>

        </div>
    )
}

export default Dummy
