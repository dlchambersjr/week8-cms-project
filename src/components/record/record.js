import React from 'react';
import { connect } from 'react-redux';
import cookie from 'react-cookies';

import Form from 'react-jsonschema-form';


import * as api from '../lib/api';

import * as actions from './actions';

const API = 'https://dc-api-server.herokuapp.com';

const uiSchema = {
  _id: { 'ui:widget': 'hidden' },
  __v: { 'ui:widget': 'hidden' },
};

class Record extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      schema: {},
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  async componentDidMount() {
    let url = `${API}/api/v1/${this.props.model}/schema`;
    let schema = await api.get(url);
    console.log('SCHEMA URL:', url);
    console.log('SCHEMA MODEL:', this.props.model);
    console.log(schema);
    this.setState({ schema });
  }

  handleSubmit(form) {
    console.log('SUBMIT FORM DATA: ', form);
    let formData = form.formData;
    let url = `${API}/api/v1/${this.props.model}`;
    if (parseInt(this.props.id) >= 0) {
      console.log('PUT:', formData);
      url = url + `/${formData._id}`;
      this.props.handlePut({
        url: url,
        id: this.props.id,
        model: this.props.model,
        record: formData,
      });
    } else {
      console.log('Building Submit Request');
      console.log(cookie.load('auth'));
      this.props.handlePost({
        url: url,
        model: this.props.model,
        record: formData,
        token: cookie.load('auth'),
      });
    }
  }



  render() {
    return (
      <div>
        <h3>Edit {this.props.model} record # {this.props.id}</h3>
        <Form
          schema={this.state.schema}
          uiSchema={uiSchema}
          formData={
            this.props.records[this.props.model] &&
            this.props.records[this.props.model][this.props.id]
          }
          onSubmit={this.handleSubmit}
        />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  records: state.records,
});

const mapDispatchToProps = (dispatch, getState) => ({
  handlePost: payload => dispatch(actions.post(payload)),
  handlePut: payload => dispatch(actions.put(payload)),
  // handlePatch: payload => dispatch(actions.patch(payload)),

});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Record);