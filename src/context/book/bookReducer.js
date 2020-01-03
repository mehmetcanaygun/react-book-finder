import { GET_BOOKS, CLEAN_BOOKS, SET_LOADING } from "../types";

export default (state, action) => {
  switch (action.type) {
    case GET_BOOKS:
      return {
        ...state,
        books: action.payload,
        loading: false
      };
    case CLEAN_BOOKS:
      return {
        ...state,
        books: []
      };
    case SET_LOADING:
      return {
        ...state,
        loading: true
      };
    default:
      return state;
  }
};
