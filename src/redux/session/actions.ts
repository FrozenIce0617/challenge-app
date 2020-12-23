import { createAction } from '@reduxjs/toolkit';

import { Session } from '../../types/global';

export default {
  getAllSessions: createAction('GET_ALL_SESSIONS'),
  getAllSessionsSuccess: createAction<Session[]>('GET_ALL_SESSIONS_SUCCESS'),
  getAllSessionsFailed: createAction<Error>('GET_ALL_SESSIONS_FAILED'),

  saveSession: createAction<Session>('SAVE_SESSION'),
  saveSessionSuccess: createAction<Session>('SAVE_SESSION_SUCCESS'),
  saveSessionFailed: createAction<Error>('SAVE_SESSION_FAILED'),
};
