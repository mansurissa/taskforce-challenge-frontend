// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom';

import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';

export const mockStore = configureMockStore([thunk]);
