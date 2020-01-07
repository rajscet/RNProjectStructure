import React, {Component} from 'react';
import Navigation from './Navigation';
import {ENV} from './src/env';

export default class App extends Component {
  componentDidMount() {
    if (ENV.DEBUG && ENV.NAME == 'dev') {
      console.disableYellowBox = true;
      import('./src/helpers/ReactotronConfig').then(() => console.log('Reactotron Configured'));
    }
  }

  render() {
    return <Navigation />;
  }
}
