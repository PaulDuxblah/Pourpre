import {
    TabNavigator,
    StackNavigator, 
    TabBarBottom,
} from 'react-navigation';

import DasboardContainer from '../containers/DashboardContainer';
import MapContainer from '../containers/MapContainer';
import ProfileContainer from '../containers/ProfileContainer';
import UserSearch from '../containers/SearchUsers';
import LogIn from '../screens/LogIn';

import colors from '../styles/colors';

const LoggedInTabNavigator = TabNavigator({
    Dashboard: {screen: DasboardContainer},
    Profil: {screen: ProfileContainer},
    Search: {screen: UserSearch},
    Map: {screen: MapContainer}
  }, {
    tabBarOptions: {
        labelStyle: {
          fontWeight: '600',
          marginBottom: 5,
        },
        style:{
          backgroundColor: colors.purpledark
        },
      activeTintColor: colors.white
    },
    tabBarComponent: TabBarBottom,
    tabBarPosition: 'bottom',
  });
  
export default LoggedInTabNavigator;
