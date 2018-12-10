import React from 'react';
import { connect } from 'react-redux';

import Auth from '../auth/auth';
import Record from './record';
import If from '../if/if.js';

import * as actions from './actions';
import * as api from '../lib/api';

const API = 'https://dc-api-server.herokuapp.com';

class Records extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: null,
      models: ['categories', 'players', 'products', 'teams'],
      schema: null,
    };

    this.addNew = this.addNew.bind(this);
    this.deleteOne = this.deleteOne.bind(this);
    this.editRecord = this.editRecord.bind(this);
  }

  async componentDidMount() {
    let url = `${API}/api/v1/${this.props.model}`;
    console.log('LIST URL:', url);
    console.log('LIST MODEL', this.props.model);
    this.props.handleGetRecords({
      url: url,
      model: this.props.model,
    });
  }

  async getModels(url) {
    let modelUrl = `${API}/api/v1/models`;
    let models = await api.get(modelUrl);
    console.log('MODELS URL:', modelUrl);
    console.log(models);
    this.setState({ models });
  }

  async getSchemas(model) {
    let SchemaUrl = `${API}/api/v1/${this.props.model}`;
    console.log('SCHEMA URL:', SchemaUrl);
    console.log('SCHEMA MODEL', this.props.model);
    this.props.handleGetRecords({
      url: SchemaUrl,
      model: this.props.model,
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    console.log('MODEL: ');

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
    let models = this.state.models || [];

    return (
      <div>
        <If condition={models}>
          <form onSubmit={this.handleSubmit}>
            <label> Choose the model you wish to use:
              <select name="model" onChange={this.handleChange}>
                {models.map((model, index) => (
                  <option key={index} value={model}>{model.toUpperCase()}</option>
                ))}
              </select>
            </label>
            <input type="submit" value="Submit" />
          </form>
          <hr />
        </If>

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

