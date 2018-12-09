import React from 'react';

import RecordList from './components/record/list';
import LoginContext from './components/auth/context';
import Login from './components/auth/login';

class App extends React.Component {
  render() {
    return (
      // LoginContext
      <div>
        <LoginContext>
          <Login />
          <RecordList model="players" />
        </LoginContext>
      </div>
    );
  }
}

export default App;
