let intialState = {};

export default (state = intialState, action) => {
  let { type, payload = {} } = action;

  let { id, model, data } = payload;

  switch (type) {
    case 'GET':
      console.log('GET REDUCER STATE: ', { ...state });
      console.log('GET REDUCER MODEL: ', model);
      console.log('GET REDUCER DATA: ', data);
      console.log('GET REDUCER NEW STATE: ', { ...state, [model]: data });

      return { ...state, [model]: data };

    case 'POST':
      return { ...state, [model]: data };

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