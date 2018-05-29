import React, { Component } from 'react';
import { 
  StyleSheet, 
  ImageBackground, 
} from 'react-native';

export default class BackgroundGeneral extends Component {
  render() {
    return (
     <ImageBackground source={require('../../images/all_screen_bg.png')} style={styles.backgroundImage}>
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
