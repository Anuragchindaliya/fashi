import { Provider } from 'react-redux'
import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import ReactDOM from 'react-dom';
import App from './App';
import reducer from './reducer.js';
import saga from './saga';

const sagaMiddleware = createSagaMiddleware();
const store = compose(
  applyMiddleware(sagaMiddleware),
  window.devToolsExtension && window.devToolsExtension(),
)(createStore)(reducer);

sagaMiddleware.run(saga);

// const store = createStore(
//   reducer,
//   window.__REDUX_DEVTOOLS_EXTENSION__ && 
//   window.__REDUX_DEVTOOLS_EXTENSION__()
// )

ReactDOM.render(
    <Provider store = {store}>
      <App />
   </Provider>, document.getElementById('root')
);
