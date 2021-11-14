import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose } from "redux";
import createSagaMiddleware from "redux-saga";
import ReactDOM from "react-dom";
import App from "./App";
import reducer from "./reducers/index.js";
import cartReducer from "./reducers/cart.reducer";
import saga from "./sagas";

const sagaMiddleware = createSagaMiddleware();
// const store = compose(
//   applyMiddleware(sagaMiddleware),
//   window.devToolsExtension && window.devToolsExtension()
// )(createStore)(reducer);
const store = createStore(
  reducer,
  compose(applyMiddleware(sagaMiddleware), window.devToolsExtension && window.devToolsExtension()),
)

// const cartStore = createStore(cartReducer, JSON.parse(localStorage.getItem("cart")));

store.subscribe(() => {
  console.log("store state ",store.getState().cart);
  if (store.getState().cart) {
    localStorage.setItem("cart", JSON.stringify(store.getState().cart));
  }
});

sagaMiddleware.run(saga);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
