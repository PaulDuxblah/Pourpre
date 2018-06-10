import {
    TabNavigator,
    StackNavigator, 
    TabBarBottom,
} from 'react-navigation';

import DasboardContainer from '../containers/DashboardContainer';
import NotificationContainer from '../containers/NotificationContainer'
import UserBloodContainer from '../containers/UserBloodHistoryContainer';
import MapContainer from '../containers/MapContainer';
import AgendaContainer from '../containers/AgendaContainer';
import BloodCenterCard from '../containers/CenterCardContainer'
import ProfileContainer from '../containers/ProfileContainer';
import UserSearch from '../containers/SearchUsers';
import QuizzContainer from '../containers/QuizzContainer';

import LogIn from '../screens/LogIn';

import colors from '../styles/colors';

export const AgendaTab = StackNavigator({
  Agenda: {screen: AgendaContainer},
  Map: {screen: MapContainer},
  BloodCenter: {screen: BloodCenterCard},
});

export const DashboardTab = StackNavigator({
  Dashboard: {screen: DasboardContainer},
  Notification: {screen: NotificationContainer},
  BloodHistory: {screen: UserBloodContainer},
});

export const SearchUserTab = StackNavigator({
  Search: {screen: UserSearch},
  ProfilUser: {screen: ProfileContainer},
});

export const GameTab = StackNavigator({
  Quizz: {screen: QuizzContainer}
});

const LoggedInTabNavigator = TabNavigator({
    Dashboard: DashboardTab,
    Meeting: SearchUserTab,
    Quizz: GameTab,
    Agenda: AgendaTab
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
