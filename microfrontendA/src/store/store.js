const initialState = {
  count: 0,
};

const microfrontendAReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'INCREMENT_MICROFRONTEND_A_COUNT':
      return { count: state.count + 1 };
    case 'DECREMENT_MICROFRONTEND_A_COUNT':
      return { count: state.count - 1 };
    default:
      return state;
  }
};

export { microfrontendAReducer };
