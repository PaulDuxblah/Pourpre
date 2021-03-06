import React, { Component } from 'react';
import { 
  Text,
  View,
  StyleSheet,
  Image,
  Button,
  ActivityIndicator,
  AsyncStorage,
  KeyboardAvoidingView,
  TouchableOpacity
} from 'react-native';

import RegisterForm from '../components/RegisterForm';
import BackgroundOne from '../components/background/BackgroundOne';
import ApiUser from '../auth/ApiUser';
import colors from '../styles/colors';

export default class Register extends ApiUser {
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

    fetch(
      this.apiUrl + 'user',
      {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          pseudo: pseudo,
          gender: gender,
          password: password
        }),
      }
    )
    .then((response) => response.json())
    .then((responseJson) => {
      try {
        AsyncStorage.setItem('user', JSON.stringify(responseJson))
        .then(() => {
          this.props.reloadApp();
        });
      } catch (error) {
        console.log(error);
      }
    })
    .catch((error) => {
      if (error.message.includes('Duplicate')) {
        this.setState({
          errors: ['duplicate']
        })
      }
    })
  }

  render() {
    if (!this.state.goToLogin) {
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
              
            <RegisterForm errors={this.state.errors} onRegisterClick={this.createUser} />

            <TouchableOpacity
            onPress={this.state.goToLogin}
            >
              <View>
                <Text style={styles.buttonaccount}>J'ai déjà un compte</Text>
              </View>
            </TouchableOpacity>
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
    },
    buttonaccount:{
      color: colors.white,
      marginTop: 10
    }
})