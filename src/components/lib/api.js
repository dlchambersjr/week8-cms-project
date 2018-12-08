import superagent from 'superagent';

export const get = url => {
  return superagent
    .get(url)
    .then(result => result.body)
    .catch(error => console.error(error));
};


export const post = payload => {

  return superagent
    .post(payload.url)
    .auth('admin', 'ADMIN') //FIXME: Change back when implementing login component
    .send(payload.record)
    .then(result => result.body)
    .catch(error => console.error(error));
};