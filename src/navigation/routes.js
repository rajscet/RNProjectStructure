import {createStackNavigator} from 'react-navigation-stack';
import LogIn from '../screens/login/LogIn';
import Home from '../screens/home/Home';


const RootStack = createStackNavigator(
  {
    LogIn: {
      screen: LogIn,
    },
    Home: {
      screen: Home,
    },
  },
  {
    headerMode: 'none',
  },
  {
    initialRouteName: 'LogIn',
  },
);



export default RootStack;
