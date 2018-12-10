import React from 'react';
import jsonWebToken from 'jsonwebtoken';

import { LoginContext } from './context';
import If from '../if/if';
require('dotenv').config();
console.log(process.env.SECRET);

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
