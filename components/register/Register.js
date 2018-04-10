import React, { Component } from 'react'
import { Text, View, StyleSheet, Image } from 'react-native'
import RegisterForm from './RegisterForm'
import BackgroundOne from '../BackgroundOne'

export default class Register extends Component {
  render() {
    return (
        <BackgroundOne>
        <View style={styles.loginContainer}>
             <Image resizeMode="contain" style={styles.logo} source={require('../images/pourpre_logo.png')} />
             <RegisterForm />
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