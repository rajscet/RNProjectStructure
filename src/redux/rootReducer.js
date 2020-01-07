import {createNavigationReducer} from 'react-navigation-redux-helpers';
import {combineReducers} from 'redux';
import RootStack from '../navigation/routes';
/* import login from '../screen/login/reducer';
import home from '../screen/home/reducer';
 */
const navReducer = createNavigationReducer(RootStack);

const rootReducer = combineReducers({
  nav: navReducer,

});

export default rootReducer;
