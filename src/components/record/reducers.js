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
      console.log('BEFORE DEL ID: ', payload.id);
      console.log('BEFORE DEL MODEL: ', payload.model);
      console.log('BEFORE DEL DATA: ', payload.data);
      let records = { ...state[model] };
      console.log('BEFORE DELETE', records);


      let recordsToKeep = records.filter(target => target._id !== id);
      console.log('KEEP AFTER DELETE', recordsToKeep);

      return { ...state, [model]: recordsToKeep };
    }

    default:
      return state;

  }

};