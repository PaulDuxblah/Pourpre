import React, { Component } from 'react';
import { Text, View, StyleSheet, Image, Button, ActivityIndicator } from 'react-native';
import RegisterForm from './RegisterForm';
import BackgroundOne from '../BackgroundOne';
import PourpreComponent from '../PourpreComponent';

export default class Register extends PourpreComponent {
  constructor(props) {
    super(props);
    this.state = {
      goToLogin: this.props.goToLogin
    };
  }

  createUser = (pseudo, gender, password, confirmPassword) => {
    let errors = [];

    if (!pseudo) {
      errors.push('pseudo');
    }
    if (!password) {
      errors.push('password');
    }
    if (!confirmPassword) {
      errors.push('confirm');
    }
    if (password !== confirmPassword) {
      errors.push('different');
    }

    if (errors.length > 0) {
      this.setState({
        ...this.state,
        errors: errors
      });
      return;
    }

    console.log('ready to register');

    fetch(
      this.apiUrl + 'user', 
      {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          pseudo: pseudo,
          gender: gender,
          password: password
        })
      }
    )
    .then((response) => response.json())
    .then((responseJson) => {
      console.log(responseJson);
      try {
        AsyncStorage.setItem('user', JSON.stringify(responseJson))
        .then(() => {
          this.loadUser();
        });
      } catch (error) {
        console.log(error);
      }
    });
  }

  render() {
    if (!this.state.goToLogin) {
      return (<ActivityIndicator size="large" color="white" />);
    }

    return (
      <BackgroundOne>
        <View style={styles.loginContainer}>
          <Image resizeMode="contain" style={styles.logo} source={require('../images/pourpre_logo.png')} />
          <RegisterForm errors={this.state.errors} onRegisterClick={this.createUser} />

          <Button 
            onPress={this.state.goToLogin}
            title="J'ai déjà un compte"
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