const initialState = {
  results: []
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "STORE_RESULT":
      return {
        ...state,
        results: state.results.concat({ id: new Date(), value: action.result })
      };
    case "DELETE_RESULT":
      const updatedResult = state.results.filter(
        results => results.id !== action.elemId
      );
      return {
        ...state,
        results: updatedResult
      };
    default:
      return {
        ...state
      };
  }
};

export default reducer;
