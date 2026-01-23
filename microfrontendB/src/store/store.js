const initialState = {
  count: 0,
};

const microfrontendBReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'INCREMENT_MICROFRONTEND_B_COUNT':
      return { count: state.count + 1 };
    case 'DECREMENT_MICROFRONTEND_B_COUNT':
      return { count: state.count - 1 };
    default:
      return state;
  }
};

export { microfrontendBReducer };
