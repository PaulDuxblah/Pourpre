import React from 'react';
import { StatusBar, View, StyleSheet } from 'react-native';
import { TabNavigator } from 'react-navigation';

//COMPONENTS
import Dashboard from './components/dashboard/Dashboard';
import Agenda from './components/agenda/Agenda';
import Notification from './components/notification/Notification';
import UserSearch from './components/usersearch/UserSearch';
import Geolocalisation from './components/map/Geolocalisation';
import Login from './components/login/Login';
// import Register from './components/register/Register';

const Tabs = TabNavigator(
  {
    Login: { 
      screen: Login 
    },
    Geolocalisation: { screen: Geolocalisation},
    Agenda: { screen: Agenda },
    Dashboard: { screen: Dashboard }
  },
  {
    tabBarPosition: 'bottom',
    tabBarOptions: {
      showIcon: true,
      showLabel: false,
      style:{
        backgroundColor: "#350D36",
        borderTopWidth: 1,
        borderColor: "#3f101c"
      }
    },
  }
);

export default class App extends React.Component {
  render() {
    return (
    <View style= {{flex: 1}} >
      <StatusBar hidden={true} />
      <Tabs/>
    </View>
    );
  }
}

//Hide this F**k warning info ^^
console.disableYellowBox = true; 