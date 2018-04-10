import React from 'react';
import { Text, View, StyleSheet, Image, ImageBackground, AsyncStorage } from 'react-native';
import LoginForm from './LoginForm';
import BackgroundOne from '../BackgroundOne';
import PourpreComponent from '../PourpreComponent';
import logo from '../images/pourpre_logo.png';

export default class Login extends PourpreComponent {
  constructor(props) {
    super(props);
    // this.setState({user: null});
    if (this.isUserLoaded()) {
      this.props.navigation.navigate('Dashboard');
    }
  }

  fetchLogin = (pseudo, password) => {
    fetch('https://2e5bbaf4.ngrok.io/ecv/Pourpre-api/api/user/login/pseudo=' + pseudo + '/password=' + password)
    .then((response) => response.json())
    .then((responseJson) => {
      try {
        AsyncStorage.setItem('user', JSON.stringify(responseJson))
        .then(() => {
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