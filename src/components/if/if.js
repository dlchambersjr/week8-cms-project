const If = props => {

  // console.log('CONIDTION: ', props.children);
  // console.log('IF CONIDTION IS: ', !!props.condition);

  return !!props.condition ? props.children : null;
};

export default If;