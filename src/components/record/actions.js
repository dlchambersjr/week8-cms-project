import superagent from 'superagent';
import cookie from 'react-cookies';

export const get = payload => dispatch => {
  return superagent
    .get(payload.url)
    .then(data => {
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
      dispatch(runPost({ model: payload.model, data: data.body }));
    })
    .catch(console.error);
};

const runPost = payload => {
  return {
    type: 'POST',
    payload: payload,
  };
};

export const deleteOne = payload => dispatch => {
  console.log(payload.url, payload.model);
  return superagent
    .delete(payload.url)
    .set('Authorization', `Bearer ${cookie.load('auth')}`)
    .send(payload.record)
    .then(data => {
      dispatch(runDeleteOne({ id: payload.id, model: payload.model }));
    })
    .catch(console.error);
};

const runDeleteOne = payload => {
  return {
    type: 'DELETE',
    payload: payload,
  };
};

export const put = payload => dispatch => {
  console.log(payload.url, payload.model);
  return superagent
    .put(payload.url)
    .set('Authorization', `Bearer ${cookie.load('auth')}`)
    .send(payload.record)
    .then(data => {
      dispatch(runPut({ id: payload.id, model: payload.model, data: data.body }));
    })
    .catch(console.error);
};

const runPut = payload => {
  return {
    type: 'PUT',
    payload: payload,
  };
};

