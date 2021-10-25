import Footer from "./components/footer";
import Header from "./components/header";
import Shop from "./components/pages/Shop";
import SingleProducts from "./components/pages/SingleProduct";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/pages/Home";

function App() {
  return (
    <>
      <Router>
        <Header />
        <Switch>
          <Route exact path="/">
            <Home/>
          </Route>
          <Route path="/shop">
            <Shop />
          </Route>
          <Route path="/singleproduct">
            <SingleProducts />
          </Route>
        </Switch>

        <Footer />
      </Router>
    </>
  );
}

export default App;
