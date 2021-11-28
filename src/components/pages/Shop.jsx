import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import ProductCard from "components/common/products/card";
import Sidebar from "../sidebar";
import _ from "lodash";
import ShopSkeleton from "components/common/skeleton/shopSkeleton";

function Shop({ products: { data: products, loading }, categories, searchActions }) {
  const [allProducts, setAllProducts] = useState([]);
  const { slug } = useParams();
  const { searchProductsReset } = searchActions;


  const handleSorting = (event) => {
    const sortedProducts = [...allProducts];

    setAllProducts(sortedProducts.sort((p1, p2) => {
      switch (event.target.value) {
        case 'priceLowtoHigh':
          return parseInt(p1.prices.sale_price) - parseInt(p2.prices.sale_price);
        case 'priceHightoLow':
          return parseInt(p2.prices.sale_price) - parseInt(p1.prices.sale_price);
        // case 'newestFirst':
        //   return new Date(p2);
        default:
          return null;
      }
    }));
    // setAllProducts(sortedProducts.sort((p1, p2)=>parseInt(p1.prices.sale_price)-parseInt(p2.prices.sale_price)));
    // console.log('sorting', allProducts);
  }
  useEffect(() => {
    if (!_.isEmpty(products)) {
      setAllProducts(products);
    }
  }, [products]);

  useEffect(() => {
    if (!_.isEmpty(slug) && !_.isEmpty(products)) {
      const catSlug = slug ? slug.toLowerCase() : "";

      const finalProducts = products.filter(pr => {
        var ans = false;
        pr.categories.forEach(ele => (ele.slug === catSlug) ? ans = true : null);
        return ans;
      });

      setAllProducts(finalProducts);
    }
  }, [slug, products]);

  useEffect(() => {
    return () => searchProductsReset()
  }, []);
  return (
    <>
      {/* Breadcrumb Section Begin */}
      <div className="breacrumb-section">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="breadcrumb-text">
                <Link to="/"><i className="fa fa-home" /> Home</Link>
                <span>Shop</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Breadcrumb Section Begin */}
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
                          <select className="sorting" onChange={handleSorting}>
                            <option value>Default Sorting</option>
                            <option value='priceLowtoHigh'>Price Low to High</option>
                            <option value='priceHightoLow'>Price High to Low</option>
                            <option value='newestFirst'>Newest first</option>
                          </select>
                          <select className="p-show">
                            <option value>Show:</option>
                          </select>
                        </div>
                      </div>
                      <div className="col-lg-5 col-md-5 text-right">
                        {/* {finalProducts.length > 0 ? <p>Show 01- 09 Of {finalProducts.length} Product</p> : "No result"} */}
                        {allProducts.length > 0 ? <p>Show 01 - {allProducts.length < 10 ? `0${allProducts.length}` : allProducts.length} Product</p> : "No result"}
                      </div>

                    </div>
                  </div>
                  <div className="product-list">
                    <div className="row">
                      {allProducts.length > 0 ? allProducts.map((el, index) => {
                        return (
                          <div key={index} className="col-lg-4 col-sm-6">
                            <ProductCard product={el} />
                          </div>
                        );
                      }) : <><img alt='' src={"assets/img/cat.png"} style={{ margin: "auto" }} /></>
                      }
                    </div>
                  </div>
                  {/* <div className="loading-more">
                    <i className="icon_loading" />
                    <a href="/#">Loading More</a>
                  </div> */}
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
