import React, { Component } from 'react';
import { _Router } from './components';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

library.add(faEnvelope)

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
