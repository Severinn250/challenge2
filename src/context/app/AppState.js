import React, { useReducer } from "react";
import axios from "axios";
import AppContext from "./appContext";
import AppReducer from "./appReducer";
import { SEARCH_PHOTOS, SET_LOADING, CLEAR_PHOTOS } from "../types";

const GithubState = (props) => {
  const initialState = {
    photos: [],
    loading: false,
  };

  const [state, dispatch] = useReducer(AppReducer, initialState);

  //   Search users
  const searchPhotos = async (id) => {
    setLoading();

    const res = await axios.get(
      `https://jsonplaceholder.typicode.com/albums/${id}/photos`
    );

    dispatch({
      type: SEARCH_PHOTOS,
      payload: res.data,
    });
  };

  // Clear photos
  const clearPhotos = () => dispatch({ type: CLEAR_PHOTOS });
  // Set loading
  const setLoading = () => dispatch({ type: SET_LOADING });

  return (
    <AppContext.Provider
      value={{
        photos: state.photos,
        loading: state.loading,
        searchPhotos,
        clearPhotos,
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
};

export default GithubState;
