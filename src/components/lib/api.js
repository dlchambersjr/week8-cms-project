import superagent from 'superagent';

export const get = url => {
  return superagent
    .get(url)
    .then(result => result.bofy)
    .catch(error => console.error(error));
};

