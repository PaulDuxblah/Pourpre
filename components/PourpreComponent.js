import React, { Component } from 'react';
import { AsyncStorage } from 'react-native';

export default class PourpreComponent extends Component {
  apiUrl = "https://49aeb8e4.ngrok.io/ecv/Pourpre-api/api/";

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

  logout = () => {
    try {
      AsyncStorage.removeItem('user')
      .then(() => {
        this.props.navigation.navigate('Login');
      });
    } catch (error) {

    }
  }

  fetchUser = (userId, userToken) => {
    fetch(
      this.apiUrl + 'user/' + userId, 
      {
        headers: {
          token: userToken
        }
      }
    )
    .then((response) => response.json())
    .then((responseJson) => {
      try {
        AsyncStorage.setItem('user', JSON.stringify(responseJson))
        .then(() => {
          this.loadUser();
        });
      } catch (error) {
        
      }
    });
  }

  isUserLoaded () {
    return typeof AsyncStorage.getItem('user') === 'object' && Object.keys(AsyncStorage.getItem('user')).length > 0;
  }
}