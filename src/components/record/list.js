import React from 'react';
import { connect } from 'react-redux';

import Auth from '../auth/auth';
import Record from './record';
import If from '../if/if.js';

import * as actions from './actions';

// const API = 'https://javascript-401-api.herokuapp.com';
const API = 'http://localhost:3030';

class Records extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: null,
    };
    this.addNew = this.addNew.bind(this);
    this.deleteOne = this.deleteOne.bind(this);
    this.editRecord = this.editRecord.bind(this);
  }

  componentDidMount() {
    let url = `${API}/api/v1/${this.props.model}`;
    console.log('LIST URL:', url);
    console.log('LIST MODEL', this.props.model);
    this.props.handleGetRecords({
      url: url,
      model: this.props.model,
    });
  }

  addNew() {
    let id = null;
    this.setState({ id });
  }

  editRecord(id) {
    this.setState({ id });
  }

  deleteOne(id) {
    const url = `${API}/api/v1/${this.props.model}/${id}`;
    this.props.handleDeleteOne({
      url: url,
      model: this.props.model,
      id: id,
    });
  }

  render() {
    let records = this.props.records[this.props.model] || [];
    return (
      <div>
        <h1>{this.props.model.toUpperCase()}</h1>
        <Auth capability='update'>
          <button onClick={this.addNew}>ADD New Player</button>
        </Auth>
        <If condition={records}>
          <ul>
            {records.map((record, index) => (
              <li key={index}>{record.name}

                <Auth capability='update'>
                  <button onClick={() => this.editRecord(index)}>EDIT</button>
                </Auth>

                <Auth capability='delete'>
                  <button onClick={() => this.deleteOne(record._id)}>DELETE</button>
                </Auth>

              </li>
            ))}
          </ul>
          <hr></hr>
        </If>
        <Auth capability='update'>
          <Record model={this.props.model} id={this.state.id} />
        </Auth>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  records: state.records,
});

const mapDispatchtoProps = ((dispatch, getState) => ({
  handleGetRecords: payload => dispatch(actions.get(payload)),
  handleDeleteOne: payload => dispatch(actions.deleteOne(payload)),
}));

export default connect(
  mapStateToProps,
  mapDispatchtoProps,
)(Records);

