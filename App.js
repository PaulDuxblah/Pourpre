import React from 'react';
import { StatusBar, View, StyleSheet, AsyncStorage } from 'react-native';
import { TabNavigator } from 'react-navigation';

// COMPONENTS
// Not logged
import Login from './components/login/Login';
import Register from './components/register/Register';

// Logged
import Dashboard from './components/dashboard/Dashboard';
import Agenda from './components/agenda/Agenda';
import Geolocalisation from './components/map/Geolocalisation';
// import Notification from './components/notification/Notification';
// import UserSearch from './components/usersearch/UserSearch';

const Tabs = TabNavigator(
  {
    Dashboard: { screen: Dashboard },
    Agenda: { screen: Agenda },
    Geolocalisation: { screen: Geolocalisation },
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
  constructor (props) {
    super(props);
    this.state = {
      user: null
    };
    this.loadUser();
  }

  async loadUser () {
    try {
      AsyncStorage.getItem('user')
      .then((value) => {
        this.setState({ 'user': JSON.parse(value) });
      });
    } catch (error) {
      
    }
  }

  goToLogin = () => {
    this.setState({
      ...this.state,
      register: false
    });
    this.forceUpdate();
  }

  goToRegister = () => {
    this.setState({
      ...this.state,
      register: true
    });
    this.forceUpdate();
  }

  render() {
    if (this.state.user == null) {
      return (
        <View style= {{flex: 1}} >
          <StatusBar hidden={true} />
          {
            this.state.register ?
            <Register goToLogin={this.goToLogin}/>
            :
            <Login goToRegister={this.goToRegister}/>
          }
        </View>
      )
    }

    return (
      <View style= {{flex: 1}} >
        <StatusBar hidden={true} />
        <Tabs/>
      </View>
    )
  }
}

//Hide this F**k warning info ^^
console.disableYellowBox = true; 