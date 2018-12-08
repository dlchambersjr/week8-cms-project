import React from 'react';

import RecordList from './components/record/list';

class App extends React.Component {
  render() {
    return (
      // LoginContext
      <div>
        <h1>Add LoginContext</h1>
        <h1>Login</h1>
        <hr></hr>
        <RecordList model="players" />
      </div>
    );
  }
}

export default App;
