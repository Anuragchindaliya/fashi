import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ProductCard from "components/common/products/card";
import Sidebar from "../sidebar";
import _ from "lodash";
import ShopSkeleton from "components/common/skeleton/shopSkeleton";

function Shop({ products: { data: products, loading }, categories }) {
  const [allproducts, setAllProducts] = useState([]);
  const { slug } = useParams();
  const catSlug = slug ? slug.toLowerCase() : "";
  useEffect(() => {
    if (!_.isEmpty(products)) {
      setAllProducts(products);
    }
  }, [products]);

  const finalProducts =
    allproducts.length > 0
      ? catSlug
        ? allproducts.filter((pr) => {
          var ans = false;
          pr.categories.forEach((ele) => {
            if (ele.slug === catSlug) {
              ans = true;
            }
          });
          return ans;
        })
        : products
      : [];
  return (
    <>
      <section className="product-shop spad">
        <div className="container">
          <div className="row">
            {categories && <Sidebar categories={categories} />}
            {loading ? <ShopSkeleton /> :
              (
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
                    <a href="/#">Loading More</a>
                  </div>
                </div>
              )
            }

          </div>
        </div>
      </section>
    </>
  );
}
export default Shop;
