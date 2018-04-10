import React, { Component } from 'react'
import { Image, StyleSheet, ImageBackground, View } from 'react-native'

class BackgroundOne extends Component {
  render() {
    return (
     <ImageBackground source={require('./images/login_bg.png')} style={styles.backgroundImage}>
       {this.props.children}
     </ImageBackground>
    )
  }
}

const styles = StyleSheet.create({
    backgroundImage:{
        flex: 1,
        width: '100%'
    }
});

export default BackgroundOne