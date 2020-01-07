import { Platform, AsyncStorage } from 'react-native';
import { ENV } from '../env';

export function post(url, params) {
  return makeRequest('POST', url, params).then(data => {
    return data;
  });
}

export function get(url, params) {
  return makeRequest('GET', url, params).then(data => {
    return data;
  });
}

async function makeRequest(method, url, params) {
  
  const token = await AsyncStorage.getItem('token');
  let options = {
    method: method,
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',

      'X-Mobile-App': true,
      Platform: Platform.OS
    }
  };

  if (['GET', 'OPTIONS'].includes(method)) {
    url += (url.indexOf('?') === -1 ? '?' : '&') + queryParams(params);
  } else {
    Object.assign(options, { body: JSON.stringify(params) });
  }
alert(ENV.API_URL + url);
  const response = fetch(ENV.API_URL + url, options);

  return response;
}

function queryParams(params) {
  let array_params = {};

  Object.keys(params).map(function(obj) {
    if (Array.isArray(params[obj])) {
      array_params = Object.assign(array_params, arrayParams(params, obj));
      delete params[obj];
    }
  });

  let new_params = Object.assign({}, params, array_params);

  return Object.keys(new_params)
    .map(function(k) {
      if (new_params[k] !== undefined && new_params[k] !== null) {
        return encodeURIComponent(k) + '=' + encodeURIComponent(new_params[k]);
      }
    })
    .join('&');
}

function arrayParams(params, obj) {
  return Object.assign(
    {},
    ...Object.keys(params[obj]).map(key => ({
      [obj + '[' + key + ']']: params[obj][key]
    }))
  );
}
