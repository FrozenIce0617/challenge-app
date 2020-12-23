import { createReducer } from '@reduxjs/toolkit';

import actions from './actions';
import { PlaceState } from './types';

const initialState: PlaceState = {
  places: [],
  loading: false,
  error: null,
};

const reducer = createReducer(initialState, {
  [actions.getAllPlaces.type]: (state) => {
    return {
      ...state,
      loading: true,
      error: null,
    };
  },
  [actions.getAllPlacesSuccess.type]: (state, action) => {
    return {
      ...state,
      places: action.payload,
      loading: false,
      error: null,
    };
  },
  [actions.getAllPlacesFailed.type]: (state, action) => {
    return {
      ...state,
      loading: false,
      error: action.payload,
    };
  },
  [actions.savePlace.type]: (state) => {
    return {
      ...state,
      error: null,
    };
  },
  [actions.savePlaceSuccess.type]: (state, action) => {
    return {
      ...state,
      places: [...state.places, action.payload],
      error: null,
    };
  },
  [actions.savePlaceFailed.type]: (state, action) => {
    return {
      ...state,
      error: action.payload,
    };
  },
});

export default reducer;
