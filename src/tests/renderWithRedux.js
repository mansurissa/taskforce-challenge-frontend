import '@testing-library/jest-dom';
import React from 'react';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { render } from '@testing-library/react';
import { MemoryRouter as Router } from 'react-router-dom';
import { applyMiddleware, createStore } from 'redux';
import rootReducer from '../../redux/reducers/rootReducer';

const RenderWithRedux = (children, reduxState = {}) => {
  const store = createStore(rootReducer, reduxState, applyMiddleware(thunk));
  return render(
    <Provider store={store}>
      <Router>{children}</Router>
    </Provider>,
  );
};
export default RenderWithRedux;
