import React from 'react';
import cookie from 'react-cookies';
import queryString from 'querystring';

export const LoginContext = React.createContext();

class LoginProvider extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      token: null,
      loggedIn: false,
      username: null,
      login: this.login.bind(this),
      logout: this.logout.bind(this),
    };

    // this.login = this.login.bind(this);
    // this.logout = this.logout.bind(this);
  }

  login(token) {
    console.log('LOGIN TOKEN" ', token);
    cookie.save('auth', token);
    this.setState({ token: null, loggedIn: true });
  }

  logout() {
    console.log('LOGOUT');
    cookie.remove('auth');
    this.setState({ token: null, loggedIn: false });
  }

  render() {
    return (
      <LoginContext.Provider value={this.state}>
        {this.props.children}
      </LoginContext.Provider>
    );
  }
}

export default LoginProvider;