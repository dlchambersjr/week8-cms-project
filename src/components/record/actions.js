import superagent from 'superagent';
import cookie from 'react-cookies';

export const get = payload => dispatch => {
  return superagent
    .get(payload.url)
    .then(data => {
      console.log(payload.url, payload.model, data.body);
      console.log(payload.url, payload.model, data.body);
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
      console.log('AFTER POST URL: ', payload.url);
      console.log('AFTER POST MODEL: ', payload.model);
      console.log('AFTER POST DATA: ', data.body);
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
  console.log(payload.url, payload.model, payload.token);
  return superagent
    .delete(payload.url)
    .set('Authorization', `Bearer ${cookie.load('auth')}`)
    .send(payload.record)
    .then(data => {
      console.log('AFTER DEL URL: ', payload.url);
      console.log('AFTER DEL MODEL: ', payload.model);
      console.log('AFTER DEL DATA: ', data.body);
      dispatch(runDeleteOne({ model: payload.model, data: data.body }));
    })
    .catch(console.error);
};

const runDeleteOne = payload => {
  return {
    type: 'DELETE',
    payload: payload,
  };
};

