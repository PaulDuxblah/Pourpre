import React, { Component } from 'react'
import { StyleSheet, ImageBackground} from 'react-native'

class BackgroundDash extends Component {
  render() {
    return (
     <ImageBackground source={require('./images/dashboard_bg.png')} style={styles.backgroundImage}>
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

export default BackgroundDash