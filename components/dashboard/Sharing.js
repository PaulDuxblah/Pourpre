import React, { Component } from 'react'
import { Text, View, Image } from 'react-native'

//STYLESHEET
import style from '../../style'

export default class Sharing extends Component {
  render() {
    return (
      <View style={style.sharingBlock}>
        <View style={[style.row, style.sharingSubBlock]}>
            <Image resizeMode="contain" source={require('../images/share_icon.png')} style= {{width:20}}/>
            <Text style={style.sharingSubText}>{'Mobilisez votre entourage'.toUpperCase()}</Text>
        </View>
        <View style={[style.row, style.sharingBtn]}>
            <Image resizeMode="contain" source={require('../images/facebook_btn.png')} style= {{width:150}}/>
            <Image resizeMode="contain" source={require('../images/sms_icon.png')} style= {{width:150}}/>
        </View>
      </View>
    )
  }
}