const initialState = {
  counter: 0,
  results: []
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "INCREMENT":
      return {
        ...state,
        counter: state.counter + 1
      };
    case "DECREMENT":
      return {
        ...state,
        counter: state.counter - 1
      };
    case "ADDING":
      return {
        ...state,
        counter: state.counter + action.value
      };
    case "SUBSTRACTING":
      return {
        ...state,
        counter: state.counter - action.value
      };
    case "STORE_RESULT":
      return {
        ...state,
        results: state.results.concat({ id: new Date(), value: state.counter })
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
