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

  getAvatar = (avatar) => {
    switch (avatar) {
      case 'batman':
        return require('../images/avatar_batman.png');
      default:
        return require('../images/avatar_default.png');
    }
  }

  fetchUsers = () => {
    return fetch(
      this.apiUrl + 'user', 
      {
        headers: {
          token: this.state.user.token
        }
      }
    )
    .then((response) => response.json())
    .then((responseJson) => {
      return responseJson;
    });
  }

  fetchUsersByPseudo = (pseudo) => {
    return fetch(
      this.apiUrl + 'user/pseudo/' + pseudo, 
      {
        headers: {
          token: this.state.user.token
        }
      }
    )
    .then((response) => response.json())
    .then((responseJson) => {
      console.log('fetchUsersByPseudo success');
      return responseJson;
    });
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

  addMeeting = (date, position, description = '', escortId = 0) => {
    fetch(
      this.apiUrl + 'meeting',
      {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          token: this.state.user.token
        },
        body: JSON.stringify({
          date: date,
          longitude: position.longitude,
          latitude: position.latitude,
          description: description,
          escort: escortId
        })
      }
    )
    .then((response) => response.json())
    .then((responseJson) => {
      return responseJson;
    })
    .catch((error) => {
      console.log('error on meeting creation');
      console.log(error);
    });
  }

  isUserLoaded () {
    return typeof AsyncStorage.getItem('user') === 'object' && Object.keys(AsyncStorage.getItem('user')).length > 0;
  }
}