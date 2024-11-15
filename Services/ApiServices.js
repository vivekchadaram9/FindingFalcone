import {default as apiUrlConstants} from './ApiUrlConstants';
import {ApiRequest, apiMethods} from './ApiUtils';

export function getAuthenticationToken(onSuccess, onFailure) {
  ApiRequest({
    url: apiUrlConstants.getAuthenticationToken,
    method: apiMethods.POST,
  }).then(
    response => {
      onSuccess && onSuccess(response.data);
    },
    error => {
      onFailure && onFailure(error);
    },
  );
}

export function getVehicles(onSuccess, onFailure) {
  ApiRequest({
    url: apiUrlConstants.getVehicles,
    method: apiMethods.GET,
  }).then(
    response => {
      onSuccess && onSuccess(response.data);
    },
    error => {
      onFailure && onFailure(error);
    },
  );
}

export function getPlanets(onSuccess, onFailure) {
  ApiRequest({
    url: apiUrlConstants.getPlanets,
    method: apiMethods.GET,
  }).then(
    response => {
      onSuccess && onSuccess(response.data);
    },
    error => {
      onFailure && onFailure(error);
    },
  );
}

export function findFalcone(data, onSuccess, onFailure) {
  ApiRequest({
    url: apiUrlConstants.findFalcone,
    method: apiMethods.POST,
    data,
  }).then(
    response => {
      onSuccess && onSuccess(response.data);
    },
    error => {
      onFailure && onFailure(error);
    },
  );
}
