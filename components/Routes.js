import { StackNavigator } from 'react-navigation';

import Login from './screens/Login';
import Dashboard from './screens/Dashboard';

const navigationsOptions = {
  header: null
}

export default StackNavigator(
  {
    Login: {
      screen: Login,
      navigationOptions: navigationsOptions
    },
    Dashboard: {
      screen: Dashboard,
      navigationOptions: navigationsOptions
    },
  },
  {
    initialRouteName: 'Login'
  }
);