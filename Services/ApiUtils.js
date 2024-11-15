import NetInfo from '@react-native-community/netinfo';
import axios from 'axios';
import {baseUrl} from './ApiUrlConstants';

export const BaseAxiosInstance = axios.create({
  baseURL: baseUrl,
  timeout: 6000,
  headers: {
    'Content-Type': 'application/json;charset=utf-8',
    'Cache-Control': 'no-cache',
  },
});

export async function ApiRequest(options) {
  const onSuccess = function (response) {
    if (response && response.success) {
      return Promise.resolve(response);
    } else {
      return Promise.resolve(response);
    }
  };

  const onError = function (error) {
    return Promise.reject(error);
  };

  let connectedToInternet = await isConnectedToInternet();

  if (connectedToInternet) {
    try {
      let response = '';
      response = await BaseAxiosInstance(options);
      return onSuccess(response);
    } catch (error) {
      return onError(error?.response);
    }
  } else {
    return Promise.reject({message: 'no internet connection'});
  }
}

export const apiMethods = {
  GET: 'GET',
  POST: 'POST',
  DELETE: 'DELETE',
  PUT: 'PUT',
  PATCH: 'PATCH',
};

export async function isConnectedToInternet() {
  const response = await NetInfo.fetch();
  return response.isConnected;
}
