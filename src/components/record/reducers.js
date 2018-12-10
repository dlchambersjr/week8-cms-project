let intialState = {};

export default (state = intialState, action) => {
  let { type, payload = {} } = action;

  let { id, model, data } = payload;

  switch (type) {
    case 'GET':
      return { ...state, [model]: data };

    case 'POST':
      return { ...state, [model]: state[model] ? [...state[model], data] : [data] };

    case 'PUT':
      return state;

    case 'PATCH':
      return state;

    case 'DELETE': {
      let records = state[model];
      let recordsToKeep = records.filter(target => target._id !== id);
      return { ...state, [model]: recordsToKeep };
    }

    default:
      return state;

  }

};