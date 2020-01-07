import React from 'react';
import {createReduxContainer} from 'react-navigation-redux-helpers';
import {connect, Provider} from 'react-redux';
import RootStack from './src/navigation/routes';
import configureStore from './src/redux/store';

import {SafeAreaView} from 'react-native';
import NavigationService from './src/helpers/NavigationService';

const store = configureStore();
const App = createReduxContainer(RootStack);
const mapStateToProps = state => ({state: state.nav});
const AppWithNavigationState = connect(mapStateToProps)(App);

export default class Navigation extends React.Component {
 

  render() {
    return (
      <Provider store={store}>
        <SafeAreaView style={{flex: 0, backgroundColor: 'transparent'}} />
        <SafeAreaView style={{flex: 1, backgroundColor: '#f7f7f7'}}>
          <AppWithNavigationState
            ref={navigator => NavigationService.setTopLevelNavigator(navigator)}
          />
        </SafeAreaView>
      </Provider>
    );
  }
}
