import * as types from '../constants/ActionTypes';

export const updateCode = (code) => ({
  'type': types.UPDATE_CODE,
  code
});

export const optimizeCode = (code, options) => {

  const body = {
    code,
    options
  };

  const request = new Request('/optimize', {
    method: 'POST',
    credentials: 'same-origin',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(body),
  });

  return {
    type: types.OPTIMIZE,
    payload: fetch(request).then((response) => response.json()),
  }

}

export const toggleOption = (optionType) => ({
  'type': optionType
});
