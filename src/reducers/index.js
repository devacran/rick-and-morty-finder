export const reducer = (state, action) => {
  switch (action.type) {
    case "SET_CHARACTER":
      return {
        ...state,
        character: action.payload,
      };
    case "SET_LOADING":
      return {
        ...state,
        loading: action.payload,
      };
    case "SET_ERROR":
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
};
