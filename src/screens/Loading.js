import React, { Component } from 'react';
import { 
    Text, 
    View,
    Image,
    ActivityIndicator,
    StyleSheet, 
} from 'react-native';

import colors from '../styles/colors'; 


export default class LoadingScreen extends Component {
    static navigationOptions = () => ({
        header: null,
        gesturesEnabled: false,
      });

    componentDidMount() {
        user => {
          setTimeout(() => {
          this.props.navigation.navigate( user ? 'LoggedInNavigator' : 'LoggedOutNavigator')
      }, 2000)
        }

      
    }
  render() {
    return (
      <View style={styles.container}>
        <Image source={require('../images/pourpre_logo.png')} style={styles.image} resizeMode="contain"/>
        <ActivityIndicator size="large" color="#fff"/>
      </View>
    )
  }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: colors.green01
    },
    image: {
        position: 'relative',
        bottom: 30,
        width: 200,
        height: 200
    }
})