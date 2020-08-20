import resultsTypes from "./results.types";

const INITIAL_STATE = {
  status: false,
  results: null,
  category: null,
  error: null,
  selectedItem: null,
};

const resultsReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case resultsTypes.RESULTS_FETCH_START:
      return {
        ...state,
        status: true,
      };
    case resultsTypes.RESULTS_FETCH_SUCCESS:
      return {
        ...state,
        status: false,
      };
    case resultsTypes.RESULTS_FETCH_FAILED:
      return {
        ...state,
        status: true,
        error: action.payload,
      };
    case resultsTypes.SET_CATEGORY:
      return {
        ...state,
        category: action.payload,
      };
    case resultsTypes.SET_RESULTS:
      return {
        ...state,
        results: action.payload,
      };
    case resultsTypes.SELECTED_ITEM:
      return {
        ...state,
        selectedItem: { ...action.payload },
      };
    default:
      return state;
  }
};

export default resultsReducer;
