import React from 'react'
import { View, StyleSheet, ImageBackground, Text } from 'react-native'

import styles from '../../Styles'

export default class Dashboard extends React.Component {
  render() {
    return (
      <ImageBackground
        style={styles.isFlex}
        source={require("../../assets/img/dashboard_bg.png")}
      >
        <View 
          style={styles.isFlex}
        >
          <Text
            style={[styles.text, {paddingTop: 100}]}
            onPress={() => this.props.navigation.navigate('Login')}
          >
            On est sur Dashboard
          </Text>
        </View>
      </ImageBackground>
    )
  }
}
