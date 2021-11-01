import { useState, useEffect } from "react";
import OwlCarousel from "react-owl-carousel";
import ProductCard from "./products/card";
import parse from "html-react-parser";
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
        if (data.length > 0 && cats.length > 0) {
            handleCatClick(cats[0].id, 0);
        }
    }, [data]);
    
    return (
        <>
            {/* Women Banner Section Begin */}
            {
                cats.length>0 &&
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
                                                    {parse(item.name.toUpperCase())}
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
                                <OwlCarousel
                                    className="owl-theme"
                                    dots
                                    dotsEach
                                    margin={10}
                                    loop
                                    // autoplay
                                    smartSpeed={1000}
                                    autoplayTimeout={3000}
                                    dragClass={"product-slider owl-carousel owl-loaded owl-drag"}
                                    navText={['<i class="ti-angle-left"></i>', '<i class="ti-angle-right"></i>']}
                                    nav
                                    responsive={{ 0: { items: 1 }, 600: { items: 3 } }}
                                    lazyContent={false}
                                    key={sliderProducts.length}
                                >
                                    {sliderProducts.map((product, index) => {
                                        return (
                                            <ProductCard key={product.id} product={product} />
                                        );
                                    })}
                                </OwlCarousel>
                            }
                        </div>
                    </div>
                </div>
            </section>
            }
            {/* Women Banner Section End */}
        </>
    )
}
export default CategoriesSlider;