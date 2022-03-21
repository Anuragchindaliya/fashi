import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose } from "redux";
import createSagaMiddleware from "redux-saga";
import ReactDOM from "react-dom";
import App from "./App";
import reducer from "./reducers/index.js";
import saga from "./sagas";

const sagaMiddleware = createSagaMiddleware();
// const store = compose(
//   applyMiddleware(sagaMiddleware),
//   window.devToolsExtension && window.devToolsExtension()
// )(createStore)(reducer);
const store = createStore(
  reducer,
  compose(
    applyMiddleware(sagaMiddleware),
    (window.devToolsExtension && window.devToolsExtension()) ||
      (window.__REDUX_DEVTOOLS_EXTENSION__ &&
        window.__REDUX_DEVTOOLS_EXTENSION__())
  )
);

// const cartStore = createStore(cartReducer, JSON.parse(localStorage.getItem("cart")));

store.subscribe(() => {
  if (store.getState().cart) {
    localStorage.setItem("cart", JSON.stringify(store.getState().cart));
  }
  if (store.getState().favourite) {
    localStorage.setItem("fav", JSON.stringify(store.getState().favourite));
  }
});

sagaMiddleware.run(saga);
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
