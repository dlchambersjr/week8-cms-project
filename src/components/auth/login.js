import React from 'react';
import superagent from 'superagent';
import { LoginContext } from './context';
import If from '../if/if';


const API = 'https://dc-api-server.herokuapp.com';

class Login extends React.Component {
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
      <LoginContext.Consumer>
        {context => {
          return (
            <div>

              <If condition={context.loggedIn}>
                <h2>Hello {this.state.username}
                  <button onClick={context.logout}>Logout</button></h2>
              </If>

              <If condition={!context.loggedIn}>
                <form onSubmit={event => this.handleSubmit(event, context.login)}>
                  <input type='text'
                    placeholder='username'
                    name='username'
                    onChange={this.handleChange}
                  />
                  <input
                    type="password"
                    placeholder="password"
                    name="password"
                    onChange={this.handleChange}
                  />
                  <button type='submit'>Login</button>
                </form>
              </If>
            </div>
          );
        }}
      </LoginContext.Consumer>
    );
  }
} //end class LOGIN

export default Login;

