import React, { Component } from 'react';
import { _Router } from './components';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        {/* eslint-disable */}
        <_Router />
        {/* eslint-enable */}
      </React.Fragment>
    );
  }
}

export default App;
