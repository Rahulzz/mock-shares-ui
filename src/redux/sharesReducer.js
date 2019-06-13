import {
  FETCH_SHARES_PENDING,
  FETCH_SHARES_SUCCESS,
  FETCH_SHARES_ERROR
} from "./action";

const initialState = {
  pending: false,
  items: [],
  error: null
};

export default function sharesReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_SHARES_PENDING:
      return {
        ...state,
        pending: true
      };
    case FETCH_SHARES_SUCCESS:
      return {
        ...state,
        pending: false,
        items: action.shares
      };
    case FETCH_SHARES_ERROR:
      return {
        ...state,
        pending: false,
        error: action.error
      };
    default:
      return state;
  }
}
