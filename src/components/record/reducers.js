let intialState = {};

export default (state = intialState, action) => {
  let { type, payload = {} } = action;

  let { id, model, data } = payload;

  switch (type) {
    case 'GET':
      return { ...state, [model]: data };

    case 'POST':
      return state;

    case 'PUT':
      return state;

    case 'patch':
      return state;

    case 'DESTROY':
      return state;

    default:
      return state;

  }

};