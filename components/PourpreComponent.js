import React, { Component } from 'react';
import { AsyncStorage } from 'react-native';

export default class PourpreComponent extends Component {
  apiUrl = "http://104.236.224.204/pourpre-api/api/";

  constructor (props) {
    // AsyncStorage.clear();
    super(props);
    this.state = {
      user: null
    };
    // console.log('this.fetchUser()');
    // console.log(this.fetchUser());
  }

  componentDidMount() {
    this.loadUser();
  }

  async loadUser () {
    console.log('loadUser');
    
    try {
      console.log('try loadUser');
      AsyncStorage.getItem('user')
      .then((value) => {
        console.log('loadUser success');
        console.log(JSON.parse(value));
        this.setState({ 'user': JSON.parse(value) });
        console.log(JSON.parse(value));
      });
    } catch (error) {
      console.log('error');
      console.log(error);
    }
  }

  logout = () => {
    try {
      console.log('logout');
      AsyncStorage.removeItem('user')
      .then(() => {
        this.props.navigation.navigate('Login');
      });
    } catch (error) {
      console.log(error);
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
      console.log('fetchUser success');
      try {
        AsyncStorage.setItem('user', JSON.stringify(responseJson))
        .then(() => {
          this.loadUser();
        });
      } catch (error) {
        console.log('fetchUser error');
        console.log(error);
      }
    });
  }

  isUserLoaded () {
    return typeof AsyncStorage.getItem('user') === 'object' && Object.keys(AsyncStorage.getItem('user')).length > 0;
  }
}