import React from 'react';
import { connect } from 'react-redux';

// will need to import Auth for verification
// will need to import Record for the form
import If from '../if/if.js';

import * as actions from './actions';

// const API = 'https://javascript-401-api.herokuapp.com';
const API = 'http://localhost:3000';

class Records extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: null,
    }
    this.addNew = this.addNew.bind(this);
  }

  componentDidMount() {
    let url = `${API}/api/v1/${this.props.model}`;
    console.log(url)
    this.props.handleGetSchemas({
      url: url,
      model: this.props.model,
    });
  }

  addNew() {
    let id = null;
    this.setState({ id });
  }


  render() {
    let records = this.props.records[this.props.model] || ['NO PLAYERS']
    return (
      <div>
        <h1>{this.props.model.toUpperCase()}</h1>
        <button onClick={this.addNew}>A New Player</button>
        <If condition={records}>
          <ul>
            {records.map((record, index) => (
              <li key={index}>{record.name}
                <button>EDIT</button>
                <button>DELETE</button>
              </li>
            ))}
          </ul>
        </If>
        <p>EDIT FORM HERE</p>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  records: state.records,
});

const mapDispatchtoProps = ((dispatch, getState) => ({
  handleGetSchemas: url => dispatch(actions.get(url)),
}));

export default connect(
  mapStateToProps,
  mapDispatchtoProps,
)(Records);

