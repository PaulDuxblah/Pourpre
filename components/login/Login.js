import React, { Component } from 'react'
import { Text, View, StyleSheet, Image, ImageBackground } from 'react-native'
import LoginForm from './LoginForm'
import BackgroundOne from '../BackgroundOne'

export default class Login extends Component {
  render() {
    return (
      <BackgroundOne>
         <View style={styles.loginContainer}>
              <Image resizeMode="contain" style={styles.logo} source={require('../images/pourpre_logo.png')} />
              <LoginForm />
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