import { Provider } from 'react-redux'
import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import ReactDOM from 'react-dom';
import App from './App';
import reducer from './reducers/index.js';
import saga from './sagas';

const sagaMiddleware = createSagaMiddleware();
const store = compose(
  applyMiddleware(sagaMiddleware),
  window.devToolsExtension && window.devToolsExtension(),
)(createStore)(reducer);

sagaMiddleware.run(saga);

ReactDOM.render(
    <Provider store = {store}>
      <App />
   </Provider>, document.getElementById('root')
);
