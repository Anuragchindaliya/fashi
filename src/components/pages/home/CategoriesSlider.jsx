import { useState, useEffect } from "react";
import MyCarousel from "./MyCarousel";
const CategoriesSlider = ({ products:{data, loading, error}, right, cats = [] }) => {
    const [index, setIndex] = useState(0);
    const [sliderProducts, setSliderProducts] = useState([]);
    const handleCatClick = (id, i) => {
        const finalProducts = data.filter(pr => {
            var ans = false;
            pr.categories.forEach(ele => {
                if (ele.id === id) {
                    ans = true
                }
            });
            return ans;
        })
        setSliderProducts(finalProducts);
        setIndex(i);
    }
    useEffect(() => {
        // if (products.length > 0 && cats.length > 0) {
            handleCatClick(cats[0].id, 0);
        // }
    }, [data])

    return (
        <>
            {/* Women Banner Section Begin */}
            <section className="women-banner spad">
                <div className="container-fluid">
                    <div className="row">
                        <div className={"col-lg-3 " + (right && "order-1 offset-lg-1")}>
                            <div
                                className="product-large set-bg"
                                style={{
                                    backgroundImage: "url(./assets/img/products/women-large.jpg)",
                                }}
                                data-setbg="./assets/img/products/women-large.jpg"
                            >
                                <h2>Women’s</h2>
                                <a href="/#">Discover More</a>
                            </div>
                        </div>
                        <div className={"col-lg-8 " + (right === undefined && "offset-lg-1")}>
                            <div className="filter-control">
                                <ul>
                                    {cats.length > 0 &&
                                        cats.map((item, i) => {
                                            return (
                                                <li
                                                    onClick={() => handleCatClick(item.id, i)}
                                                    key={item.id}
                                                    className={i === index ? 'active' : ''}>
                                                    {item.name.toUpperCase()}
                                                </li>);
                                        })
                                    }
                                </ul>
                            </div>
                            {
                                loading && <p>Loading...</p>
                            }
                            {
                                !loading && sliderProducts.length > 0 &&
                                <MyCarousel sliderProducts={sliderProducts} />
                            }
                        </div>
                    </div>
                </div>
            </section>
            {/* Women Banner Section End */}
        </>
    )
}
export default CategoriesSlider;