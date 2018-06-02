import React from 'react';
import { Text, View, StyleSheet, Image, Button, ImageBackground, ActivityIndicator, AsyncStorage } from 'react-native';
import LoginForm from './LoginForm';
import BackgroundOne from '../BackgroundOne';
import PourpreComponent from '../PourpreComponent';
import logo from '../images/pourpre_logo.png';

import style from '../../style';

export default class Login extends PourpreComponent {
  constructor(props) {
    super(props);
    this.state = {
      ...this.state,
      goToRegister: this.props.goToRegister
    };
  }

  componentDidUpdate(prevProps, prevState) {
    // TODO refresh user on app launch
    if (this.state.user) {
      // this.fetchUser(this.state.user.id, this.state.user.token);
    }
  }

  fetchLogin = (pseudo, password) => {
    console.log('fetchLogin');
    fetch(this.apiUrl + 'user/login/pseudo=' + pseudo + '/password=' + password)
    .then((response) => response.json())
    .then((responseJson) => {
      if (typeof responseJson === 'string') {
        return;
      }

      try {
        console.log('success fetchLogin');
        AsyncStorage.setItem('user', JSON.stringify(responseJson))
        .then(() => {
          console.log('success AsyncStorage fetchLogin');
          this.props.reloadApp();
        });
      } catch (error) {
        console.log('error');
        console.log(error);
      }
    });
  }

  render() {
    if (!this.state.goToRegister) {
      return (<ActivityIndicator size="large" color="white" />);
    }

    return (
      <BackgroundOne>
        <View style={styles.loginContainer}>
          <Image
            resizeMode="contain"
            style={styles.logo}
            source={logo}
          />
          <LoginForm onLoginClick={this.fetchLogin} />

          <Button 
            onPress={this.state.goToRegister}
            title="Je n'ai pas de compte"
          />
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