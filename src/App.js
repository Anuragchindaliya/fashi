import { useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import { productsFetch } from "./actions/products.action";
import { categoriesFetch } from "./actions/categories.action";
import { singleProductFetch } from "./actions/singleProduct.action";
import { cartActions } from "actions/cart.action";

import Footer from "./components/footer";
import Header from "./components/header";
import Shop from "./components/pages/Shop";
import SingleProducts from "./components/pages/SingleProduct";
import Home from "./components/pages/Home";
import Dummy from "components/common/dummy";

import Cart from "components/pages/cart";
import { ToastContainer } from "react-toastify";
import Favourite from "components/pages/favourite";
import SingleProductSkeleton from "components/common/skeleton/singleProductSkeleton";
import ShopSkeleton from "components/common/skeleton/shopSkeleton";
import { favActions } from "actions/favourite.action";
import ScrollToTop from "components/common/scrollToTop";
import MobileHeader from "components/header/mobileHeader";
import searchProductActions from "actions/searchProducts.action";

function App(props) {
  const {
    products,
    categories,
    singleProductFetch,
    singleProduct,
    cart,
    cartActions,
    favourite,
    favActions,
  } = props;
  useEffect(() => {
    props.productsFetch();
    props.categoriesFetch();
  }, []);
  return (
    <>
      <Router>
        <ScrollToTop />
        <Header
          categories={categories}
          cart={cart}
          favourite={favourite}
          cartActions={cartActions}
          products={products}
          favActions={favActions}
        />
        <MobileHeader products={products} cart={cart} favourite={favourite} />
        <Switch>
          <Route exact path="/">
            <Home products={products} categories={categories} />
          </Route>
          <Route exact path="/shop">
            <Shop
              products={products}
              categories={categories}
              cartActions={cartActions}
            />
          </Route>
          <Route exact path="/category/:slug">
            <Shop products={products} categories={categories} />
          </Route>
          <Route exact path="/cart">
            <Cart cart={cart} cartActions={cartActions} />
          </Route>
          <Route exact path="/fav">
            <Favourite
              favActions={favActions}
              fav={favourite}
              allproducts={products}
            />
          </Route>
          <Route exact path="/skeleton">
            <SingleProductSkeleton />
          </Route>
          <Route exact path="/prod">
            <ShopSkeleton products={products} />
          </Route>
          <Route exact path="/product/:slug">
            <SingleProducts
              key={singleProduct.id}
              singleProduct={singleProduct}
              cart={cart}
              singleProductFetch={singleProductFetch}
              cartActions={cartActions}
            />
          </Route>
          <Route exact path="/:cat">
            <Dummy products={products} categories={categories} />
            {/* <Shop products={products} categories={categories} /> */}
          </Route>
          {/* <Route path="/:cat/:product">
            <Dummy />
          </Route> */}
        </Switch>

        <Footer />
      </Router>
      <ToastContainer />
    </>
  );
}

const mapStateToProps = (state) => {
  return {
    products: state.products,
    categories: state.categories,
    singleProduct: state.singleProduct,
    cart: state.cart,
    favourite: state.favourite,
    searchResult: state.searchResult
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    productsFetch: () => dispatch(productsFetch()),
    categoriesFetch: () => dispatch(categoriesFetch()),
    singleProductFetch: (slug) => dispatch(singleProductFetch(slug)),
    cartActions: bindActionCreators(cartActions, dispatch),
    favActions: bindActionCreators(favActions, dispatch),
    searchActions: bindActionCreators(searchProductActions,dispatch),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(App);