import superagent from 'superagent';

export const get = url => {
  return superagent
    .get(url)
    .then(result => result.body)
    .catch(error => console.error(error));
};
