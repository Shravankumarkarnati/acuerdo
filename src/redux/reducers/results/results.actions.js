import resultsTypes from "./results.types";
import { getResults } from "../../../firebase/getCategoryResults";

const setCategory = (cat) => {
  return {
    type: resultsTypes.SET_CATEGORY,
    payload: cat,
  };
};

const fetchResultsStart = () => {
  return {
    type: resultsTypes.RESULTS_FETCH_START,
  };
};

const fetchResultsSuccess = () => {
  return {
    type: resultsTypes.RESULTS_FETCH_SUCCESS,
  };
};

const fetchResultsFailed = (err) => {
  return {
    type: resultsTypes.RESULTS_FETCH_FAILED,
    payload: err,
  };
};

const setResults = (data) => {
  return {
    type: resultsTypes.SET_RESULTS,
    payload: data,
  };
};

export const fetchResultsAsync = (cat) => {
  return async (dispatch) => {
    dispatch(fetchResultsStart());
    dispatch(setCategory(cat));
    try {
      const resultsRef = await getResults(cat);
      const results = [];
      resultsRef.forEach((cur) => {
        results.push(cur.data());
      });
      dispatch(fetchResultsSuccess());
      dispatch(setResults(results));
    } catch (err) {
      console.log(err, "error");
      dispatch(fetchResultsFailed(err));
    }
  };
};

export const selectedItem = (res) => {
  return {
    type: resultsTypes.SELECTED_ITEM,
    payload: res,
  };
};
