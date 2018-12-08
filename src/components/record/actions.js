import api from '../lib/api';

export const get = payload => dispatch => {
  return api
    .get(payload.url)
    .then(results => {
      console.log(results);
      dispatch(runGet({
        model: payload.model,
        data: results.body.results,
      }));
    })
    .catch(error => console.error(error));
};

const runGet = payload => {
  return {
    type: 'GET',
    payload: payload,
  };
};

