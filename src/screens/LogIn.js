import React from 'react';
import { 
  Text, 
  View, 
  StyleSheet, 
  Image, 
  Button, 
  ImageBackground, 
  ActivityIndicator, 
  AsyncStorage 
} from 'react-native';
import LoginForm from '../components/LoginForm';
import BackgroundOne from '../components/background/BackgroundOne';
import logo from '../images/pourpre_logo.png';

import ApiUser from '../auth/ApiUser';

export default class LogIn extends ApiUser {
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
            source={require('../images/pourpre_logo.png')}
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