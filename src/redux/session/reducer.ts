import { createReducer } from '@reduxjs/toolkit';

import actions from './actions';

import { SessionState } from './types';

const initialState: SessionState = {
  sessions: [],
  loading: false,
  error: null,
};

const reducer = createReducer(initialState, {
  [actions.getAllSessions.type]: (state) => {
    return {
      ...state,
      loading: true,
      error: null,
    };
  },
  [actions.getAllSessionsSuccess.type]: (state, action) => {
    return {
      ...state,
      sessions: action.payload,
      loading: false,
      error: null,
    };
  },
  [actions.getAllSessionsFailed.type]: (state, action) => {
    return {
      ...state,
      loading: false,
      error: action.payload,
    };
  },
  [actions.saveSession.type]: (state) => {
    return {
      ...state,
      error: null,
    };
  },
  [actions.saveSessionSuccess.type]: (state, action) => {
    return {
      ...state,
      sessions: [...state.sessions, action.payload],
      error: null,
    };
  },
  [actions.saveSessionFailed.type]: (state, action) => {
    return {
      ...state,
      error: action.payload,
    };
  },
});

export default reducer;
