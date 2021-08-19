const initialStatePosts = {
  signin: false,
  register: false,
};

export const totalCases = (state = initialStatePosts, action = {}) => {
  switch (action.type) {
    case 'TOGGLE_SIGNIN':
      return { ...state, signin: action.payload, register: false };
    case 'TOGGLE_REGISTER':
      return { ...state, register: action.payload, signin: false };
    default:
      return state;
  }
};
