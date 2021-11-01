import ProductCard from "./card";
const Products = ({ products: pr, catSlug }) => {
    const { data: products } = pr;
    const finalProducts = products.length > 0 ? catSlug ? products.filter(pr => {
        var ans = false;
        pr.categories.forEach(ele => {
            if (ele.slug === catSlug) {
                ans = true
            }
        });
        return ans;
    }) : products : [];
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
                        {finalProducts.map((el, index) => {
                            return (
                                <div key={index} className="col-lg-4 col-sm-6">
                                    <ProductCard product={el} />
                                </div>
                            );
                        })}
                    </div>
                </div>
                <div className="loading-more">
                    <i className="icon_loading" />
                    <a href="/#">
                        Loading More
                    </a>
                </div>
            </div>
        </>
    )
}
export default Products;