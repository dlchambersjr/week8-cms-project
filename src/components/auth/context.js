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
      login: this.login,
      logout: this.logout,
    }
  }

  login = token => {
    cookie.save('auth', token);
    this.setState({ token: null, loggedIn: true });
  };

  logout = () => {
    cookie.remove('auth');
    this.setState({ token: null, loggedIn: false });
  };

  render() {
    return (
      <LoginContext.Provider value={this.state}>
        {this.props.children}
      </LoginContext.Provider>
    );
  }
}

export default LoginProvider;