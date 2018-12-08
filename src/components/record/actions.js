import * as api from '../lib/api';

export const get = payload => async dispatch => {
  let results = await api.get(payload.url);
  dispatch(runGet({
    model: payload.model,
    data: results.body,
  }));
};

const runGet = payload => {
  return {
    type: 'GET',
    payload: payload,
  };
};

export const post = payload => async dispatch => {
  let results = await api.post(payload);
  console.log(results);
  dispatch(runPost({ model: payload.model, data: results }));
};

const runPost = payload => {
  return {
    type: 'GET',
    payload: payload,
  };
};

