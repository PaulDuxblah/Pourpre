import React from 'react'
import { View, StyleSheet, ImageBackground, Text } from 'react-native'

import styles from '../../Styles'

export default class Login extends React.Component {
  redirectIfLogged() {
    // TODO if user is logged, redirect
    // if (this.props.navigation.state.routeName == 'Login') {
    //   this.props.navigation.navigate('Dashboard');
    // }
  }

  componentWillMount() {
    this.redirectIfLogged();
  }

  render() {
    return (
      <ImageBackground
        style={styles.isFlex}
        source={require("../../assets/img/login_bg.png")}
      >
        <View 
          style={styles.isFlex}
        >
          <Text
            style={[styles.text, {paddingTop: 100}]}
            onPress={() => this.props.navigation.navigate('Dashboard')}
          >
            On est sur Login
          </Text>
        </View>
      </ImageBackground>
    )
  }
}
