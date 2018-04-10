import React, { Component } from 'react'
import { AsyncStorage } from 'react-native'

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {}
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

  isUserLoaded () {
    return typeof AsyncStorage.getItem('user') === 'object' && Object.keys(AsyncStorage.getItem('user')).length !== 0;
  }
}