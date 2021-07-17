import { SEARCH_PHOTOS, SET_LOADING, CLEAR_PHOTOS } from "../types";

const appReducer = (state, action) => {
  switch (action.type) {
    case SEARCH_PHOTOS:
      return {
        ...state,
        photos: action.payload,
        loading: false,
      };
    case CLEAR_PHOTOS:
      return {
        ...state,
        photos: [],
        loading: false,
      };
    case SET_LOADING:
      return {
        ...state,
        loading: true,
      };
    default:
      return state;
  }
};

export default appReducer;
