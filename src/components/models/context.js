import React from 'react';
import cookie from 'react-cookies';
import * as api from '../lib/api';

export const ModelContext = React.createContext();

const API = 'https://dc-api-server.herokuapp.com';

class ModelProvider extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      models: ['categories', 'players', 'products', 'teams'],
      getModels: this.model.bind(this),

    };

  }

  async getModels() {
    let url = `${API}/api/v1/models`;
    let models = await api.get(url);
    console.log('MODELS URL:', url);
    console.log(models);
    this.setState({ models });
  }

  render() {
    return (
      <ModelContext.Provider value={this.state}>
        {this.props.children}
      </ModelContext.Provider>
    );
  }
}

export default ModelProvider;