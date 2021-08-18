import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import App from './router/App';
import { Provider } from 'react-redux';
import store from './redux/reducers/index';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <Provider store={store}>
    <Suspense fallback='Loading...'>
      <App />
    </Suspense>
  </Provider>,
  document.getElementById('root'),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
