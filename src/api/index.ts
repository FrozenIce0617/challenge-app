import axios, { Method, AxiosRequestConfig } from 'axios';
import Config from 'react-native-config';

import { Place, Session } from '../types/global';

// set API base URL
axios.defaults.baseURL = Config.BASE_URL;

export const getHeaders = () => ({
  Accept: 'application/json',
  'Content-Type': 'application/json',
});

export type GetAllRecipes = {
  status: string;
  data: Place[];
};

export const getAllPlaces = async () => {
  const params: AxiosRequestConfig = {
    method: 'get' as Method,
    url: '/place',
    headers: getHeaders(),
  };

  return await axios.request(params);
};

export type SavePlace = {
  status: string;
  data: Place;
};

export const savePlace = async (place: Place) => {
  const params: AxiosRequestConfig = {
    method: 'post' as Method,
    url: '/place',
    headers: getHeaders(),
    data: place,
  };

  return await axios.request(params);
};

export type GetAllSession = {
  status: string;
  data: Session[];
};

export const getAllSessions = async () => {
  const params: AxiosRequestConfig = {
    method: 'get' as Method,
    url: '/session',
    headers: getHeaders(),
  };

  return await axios.request(params);
};

export type SaveSession = {
  status: string;
  data: Session;
};

export const saveSession = async (session: Session) => {
  const params: AxiosRequestConfig = {
    method: 'post' as Method,
    url: '/session',
    headers: getHeaders(),
    data: session,
  };

  return await axios.request(params);
};
