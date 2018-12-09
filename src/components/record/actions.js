import superagent from 'superagent';

import * as api from '../lib/api';

export const get = payload => dispatch => {
  return superagent
    .get(payload.url)
    .then(data => {
      console.log(payload.url, payload.model, data.body);
      dispatch(runGet({ model: payload.model, data: data.body.results }));
    })
    .catch(console.error);
};

const runGet = payload => {
  return {
    type: 'GET',
    payload: payload,
  };
};

export const post = payload => dispatch => {
  console.log(payload.url, payload.model, payload.token);
  return superagent
    .post(payload.url)
    .set('Authorization', `Bearer ${payload.token}`)
    .send(payload.record)
    .then(data => {
      console.log(payload.url, payload.model, data.body);
      dispatch(runPost({ model: payload.model, data: data.body.results }));
    })
    .catch(console.error);
};

const runPost = payload => {
  return {
    type: 'POST',
    payload: payload,
  };
};

