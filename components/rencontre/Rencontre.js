import React, { Component } from 'react'
import { Text, View, Image } from 'react-native'

export default class componentName extends Component {
      
    static navigationOptions = {
        title: 'Rencontre',
        tabBarIcon: () => {
            return <Image source={require('../images/rencontre_btn.png')} style= {{width:20, height:20}}/>
        }
    }
  render() {
    return (
      <View>
        <Text> textInComponent </Text>
      </View>
    )
  }
}