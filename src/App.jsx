import React from 'react';
import { hot } from 'react-hot-loader';

class App extends React.Component {
  render() {
    return (
      <div data-test="component-app">
        Hello World
      </div>
    );
  }
}

export default hot(module)(App);