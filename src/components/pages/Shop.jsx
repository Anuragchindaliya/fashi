import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ProductCard from "components/common/products/card";
import Sidebar from "../sidebar";
import _ from "lodash";
import ShopSkeleton from "components/common/skeleton/shopSkeleton";
import SortProductsFilter from "components/common/sortProductsFilter";
import TotalProductsCount from "components/common/totalProductsCount";
import Breadcrumb from "components/common/breadcrumb";
import ProductsLoader from "components/common/productsLoader";

function Shop({ products: { data: products, loading }, categories, searchActions }) {
  const [allProducts, setAllProducts] = useState([]);
  const { slug } = useParams();
  const { searchProductsReset } = searchActions;


  const handleSorting = (event) => {
    const sortedProducts = [...allProducts];
    switch (event.target.value) {
      case 'priceLowtoHigh':
        setAllProducts(sortedProducts.sort((p1, p2) => parseInt(p1.prices.sale_price) - parseInt(p2.prices.sale_price)));
        break;
      case 'priceHightoLow':
        setAllProducts(sortedProducts.sort((p1, p2) => parseInt(p2.prices.sale_price) - parseInt(p1.prices.sale_price)));
        break;
      default:
        setAllProducts(products);
    }

    // setAllProducts(sortedProducts.sort((p1, p2)=>parseInt(p1.prices.sale_price)-parseInt(p2.prices.sale_price)));
    // console.log('sorting', allProducts);
  }

  const filterProductByPrice = (min, max) => {
    setAllProducts(products.filter((product) => {

      return (product.prices.sale_price >= min && product.prices.sale_price <= max) || false;
    }));
  }

  useEffect(() => {
    setAllProducts(products);
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
      <Breadcrumb />
      {/* Breadcrumb Section Begin */}
      <section className="product-shop spad">
        <div className="container">
          <div className="row">
            {categories && <Sidebar categories={categories} products={allProducts} filterProductByPrice={filterProductByPrice} />}
            {loading ? <ShopSkeleton /> :
              (
                <div className="col-lg-9 order-1 order-lg-2">
                  <div className="product-show-option">
                    <div className="row">
                      <SortProductsFilter handleSorting={handleSorting} />
                      <TotalProductsCount allProducts={allProducts} />
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
                  {loading && <ProductsLoader />}
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
