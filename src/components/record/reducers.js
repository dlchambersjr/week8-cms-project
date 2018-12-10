let intialState = {};

export default (state = intialState, action) => {
  let { type, payload = {} } = action;

  let { id, model, data } = payload;

  switch (type) {
    case 'GET':
      return { ...state, [model]: data };

    case 'POST':
      return { ...state, [model]: state[model] ? [...state[model], data] : [data] };

    case 'PUT': {
      let putList = state[model].map((record, index) => index === id ? data : record);
      return { ...state, [model]: putList };
    }
    // TODO: I'm still not quite sure how this is done
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