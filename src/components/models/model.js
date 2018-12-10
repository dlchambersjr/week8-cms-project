import React from 'react';
import superagent from 'superagent';
import { ModelContext } from './context';
import If from '../if/if';

const API = 'https://dc-api-server.herokuapp.com';

class Model extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  async  handleSubmit(event, loginHandler) {
    event.preventDefault();
    const { username, password } = this.state;
    console.log('USERNAME: ', username);
    console.log('PASSWORD: ', password);
    await superagent
      .post(`${API}/signin`)
      .auth(username, password)
      .then(response => {
        const token = response.text;
        loginHandler(token);
      })
      .catch(console.error);

  }

  handleChange(event) {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  render() {
    return (
      <ModelContext.Consumer>
        {context => {
          return (
            <div>
              <form onSubmit={this.handleSubmit}>
                <label> Choose the model you wish to use:
                  <select name="model" onChange={this.handleChange}>
                    <option value="test">TEST</option>
                    {/* {context.models.map((model, index) => {
                      <option key={index} value={model}>{model}</option>;
                    })} */}
                  </select>
                </label>
                <input type="submit" value="Submit" />
              </form>
            </div>
          );
        }}
      </ModelContext.Consumer>
    );
  }
} //end class Model

export default Model;

