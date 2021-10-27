import { useEffect } from "react";
import { BrowserRouter as Router, Switch, Route, useRouteMatch } from "react-router-dom";
import { connect } from 'react-redux';
import { productsFetch, categoriesFetch } from './actions';
import Footer from "./components/footer";
import Header from "./components/header";
import Shop from "./components/pages/Shop";
import SingleProducts from "./components/pages/SingleProduct";
import Home from "./components/pages/Home";
import Shop1 from "./components/pages/Shop1";

function App(props) {
  const {products, categories} = props;

  useEffect(() => {
    props.productsFetch();
    props.categoriesFetch();
  }, []);
  return (
    <>
      <Router>
        <Header categories={categories} />
        <Switch>
          <Route exact path="/">
            <Home products={products} categories={categories} />
          </Route>
          <Route exact path="/shop">
            <Shop products={products} />
          </Route>
          {/* <Route path="/:cat">
            <Shop products={products} />
          </Route> */}
          {/* <Route path='/category'>
            <Route
              path="/category/:catId"
              exact
              render={({match}) => <Shop catId={match.params.catId} products={products} />}  // don't use this.props.match, use the match from here <<
            />
          </Route> */}
          <Route exact path="/user/:userId" component={Shop1} />
          <Route exact path="/singleproduct">
            <SingleProducts />
          </Route>
        </Switch>

        <Footer />
      </Router>
    </>
  );
}

const mapStateToProps = (state) => {
  return {
     products: state.products,
     categories: state.categories
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    productsFetch: () => dispatch(productsFetch()),
    categoriesFetch: () => dispatch(categoriesFetch())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
