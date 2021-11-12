import { useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { connect } from "react-redux";
import { productsFetch } from "./actions/products.action";
import { categoriesFetch } from "./actions/categories.action";
import { singleProductFetch } from "./actions/singleProduct.action";
import Footer from "./components/footer";
import Header from "./components/header";
import Shop from "./components/pages/Shop";
import SingleProducts from "./components/pages/SingleProduct";
import Home from "./components/pages/Home";
import Dummy from "components/common/dummy";
import { addToCart, resetCart, updateQty } from "actions/cart.action";

function App(props) {
  const { products, categories, singleProductFetch, singleProduct, addToCart, updateQty, resetCart, cart } = props;
  useEffect(() => {
    props.productsFetch();
    props.categoriesFetch();
  }, []);
  console.log(cart);
  return (
    <>
      <Router>
        <Header categories={categories} cart={cart} updateQty={updateQty} />
        <Switch>
          <Route exact path="/">
            <Home products={products} categories={categories} />
          </Route>
          <Route exact path="/shop">
            <Shop products={products} categories={categories} />
          </Route>
          <Route exact path="/category/:slug">
            <Shop products={products} categories={categories} />
          </Route>
          <Route exact path="/product/:slug">
            <SingleProducts key={singleProduct.id} singleProduct={singleProduct} cart={cart} singleProductFetch={singleProductFetch} addToCart={addToCart} resetCart={resetCart} updateQty={updateQty} />
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
    </>
  );
}

const mapStateToProps = (state) => {
  return {
    products: state.products,
    categories: state.categories,
    singleProduct: state.singleProduct,
    cart: state.cart
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    productsFetch: () => dispatch(productsFetch()),
    categoriesFetch: () => dispatch(categoriesFetch()),
    singleProductFetch: (slug) => dispatch(singleProductFetch(slug)),
    addToCart: (val) => dispatch(addToCart(val)),
    updateQty: (val) => dispatch(updateQty(val)),
    resetCart: (val) => dispatch(resetCart(val)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
