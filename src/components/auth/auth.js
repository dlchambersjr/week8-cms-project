import React from 'react';
import superagent from 'superagent';
require('dotenv').config();
import { LoginContext } from './context';
import jsonWebToken from 'jsonwebtoken';
import If from '../if/if';

// const API = 'https://javascript-401-api.herokuapp.com';
const API = 'http://localhost:3030';

class Auth extends React.Component {
  render() {
    return (
      <LoginContext.Consumer>
        {context => {
          const user = context.token
            ? jsonWebToken.verify(context.token, process.env.SECRET || 'changeit')
            : {};
          const { capability } = this.props;
          const okToRender =
            context.loggedIn &&
            (capability
              ? user.capabilities.includes(capability)
              : true);
          return (
            <If condition={okToRender}>{this.props.children}</If>
          );
        }}
      </LoginContext.Consumer>
    );
  }
}

export default Auth;
