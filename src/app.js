import React from 'react';

import LoginContext from './components/auth/context';
import Login from './components/auth/login';
import Auth from './components/auth/auth';

import RecordList from './components/record/list';

class App extends React.Component {
  render() {
    return (
      // LoginContext
      <div>
        <LoginContext>

          <Login />

          <Auth capability='read'>
            <RecordList model="players" />
          </Auth>

        </LoginContext>
      </div>
    );
  }
}

export default App;
