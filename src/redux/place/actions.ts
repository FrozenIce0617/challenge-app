import { createAction } from '@reduxjs/toolkit';

import { Place } from '../../types/global';

export default {
  getAllPlaces: createAction('GET_ALL_PLACES'),
  getAllPlacesSuccess: createAction<Place[]>('GET_ALL_PLACES_SUCCESS'),
  getAllPlacesFailed: createAction<Error>('GET_ALL_PLACES_FAILED'),

  savePlace: createAction<Place>('SAVE_PLACE'),
  savePlaceSuccess: createAction<Place>('SAVE_PLACE_SUCCESS'),
  savePlaceFailed: createAction<Error>('SAVE_PLACE_FAILED'),
};
