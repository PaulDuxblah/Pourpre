import React from 'react';
import { Text, View, StyleSheet, Image, ImageBackground, AsyncStorage } from 'react-native';
import LoginForm from './LoginForm';
import BackgroundOne from '../BackgroundOne';
import PourpreComponent from '../PourpreComponent';
import logo from '../images/pourpre_logo.png';

export default class Login extends PourpreComponent {
  constructor(props) {
    super(props);
  }

  componentDidUpdate(prevProps, prevState) {
    // TODO refresh user on app launch
    if (this.state.user) {
      // this.fetchUser(this.state.user.id, this.state.user.token);
      this.props.navigation.navigate('Dashboard');
    }
  }

  fetchLogin = (pseudo, password) => {
    fetch(this.apiUrl + 'user/login/pseudo=' + pseudo + '/password=' + password)
    .then((response) => response.json())
    .then((responseJson) => {
      try {
        AsyncStorage.setItem('user', JSON.stringify(responseJson))
        .then(() => {
          this.loadUser();
          this.props.navigation.navigate('Dashboard');
        });
      } catch (error) {
        
      }
    });
  }

  render() {
    return (
      <BackgroundOne>
        <View style={styles.loginContainer}>
          <Image
            resizeMode="contain"
            style={styles.logo}
            source={logo}
          />
          <LoginForm onLoginClick={this.fetchLogin} />
        </View>
      </BackgroundOne>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  loginContainer:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    justifyContent:'center'
  },
  logo:{
    height: 100,
    width: 200
  }
})