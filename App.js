import React from 'react';
import { 
  StatusBar, 
  View, 
  StyleSheet,
  AsyncStorage,
  persistScore
} from 'react-native';
import { AppLoading } from 'expo';
import LogIn from './src/screens/LogIn';
import Register from './src/screens/Register';

import LoggedInContainer from './src/navigators/LoggedInTabNavigator';

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
            <LogIn goToRegister={this.goToRegister} user={this.state.user} reloadApp={this.reloadApp} />
          }
        </View>
      )
    }

    return (
      <View style= {{flex: 1}} >
        <StatusBar hidden={true} />
        <LoggedInContainer screenProps={{ user: this.state.user, reloadApp: this.reloadApp }} />
      </View>
    );
  }
}

//Hide warning info
console.disableYellowBox = true; 