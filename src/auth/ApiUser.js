import React, { Component } from 'react';
import { 
    AsyncStorage 
} from 'react-native';

export default class ApiUser extends Component {
  apiUrl = "http://104.236.224.204/pourpre-api/api/";

  constructor (props) {
    super(props);
    this.state = {
      user: props.user
    };
  }

  componentDidMount() {
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
        this.props.screenProps.reloadApp();
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