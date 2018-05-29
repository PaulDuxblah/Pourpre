import React from 'react';
import { StatusBar, View, StyleSheet, AsyncStorage, persistStore } from 'react-native';
import { TabNavigator } from 'react-navigation';
import { AppLoading } from 'expo';

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
      user: null,
      loadingCompleted: false
    };
  }

  async loadUser() {
    try {
      AsyncStorage.getItem('user')
      .then((value) => {
        this.setState({ 'user': JSON.parse(value) });
        this._handleFinishLoading();
      });
    } catch (error) {
      
    }
  }

  reloadApp = () => {
    this.setState({
      loadingCompleted: false
    });
  }

  goToLogin = () => {
    this.setState({
      register: false
    });
    this.forceUpdate();
  }

  goToRegister = () => {
    this.setState({
      register: true
    });
    this.forceUpdate();
  }

  _handleFinishLoading = () => {
    this.setState({ loadingCompleted: true });
  };

  render() {
    if (!this.state.loadingCompleted) {
      this.loadUser();
      return (
        <AppLoading />
      );
    }

    if (this.state.user == null) {
      return (
        <View style= {{flex: 1}} >
          <StatusBar hidden={true} />
          {
            this.state.register ?
            <Register goToLogin={this.goToLogin} user={this.state.user} reloadApp={this.reloadApp} />
            :
            <Login goToRegister={this.goToRegister} user={this.state.user} reloadApp={this.reloadApp} />
          }
        </View>
      )
    }

    return (
      <View style= {{flex: 1}} >
        <StatusBar hidden={true} />
        <Tabs screenProps={{ user: this.state.user, reloadApp: this.reloadApp }}/>
      </View>
    )
  }
}

//Hide the warning info
console.disableYellowBox = true; 