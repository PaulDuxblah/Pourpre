import React, { Component } from 'react'
import { Text, View, Image} from 'react-native'

//STYLESHEET
import style from '../../style'

export default class BadgeDisplay extends Component {
  render() {
    return (
      <View style={[style.row, style.badgeBlock]}>
        <View style={style.badgeSubBlock}>
          <Text style={style.badgeTitle}>{'don de sang'.toUpperCase()}</Text>
            <View style={[style.row, style.badgeSubBlock]}>
              <Image resizeMode="contain" source={require('../images/badge_blood_sm.png')} style= {{width:70, height:80}}/>
              <Text style={style.badgeNumber}>0</Text>
            </View>
        </View>
        
        <View style={style.badgeSubBlock}>
          <Text style={style.badgeTitle}>{'accompagnements'.toUpperCase()}</Text>
            <View style={[style.row, style.badgeSubBlock]}>
              <Image resizeMode="contain" source={require('../images/badge_rencontre_sm.png')} style= {{width:70, height:80}}/>
              <Text style={style.badgeNumber}>0</Text>
            </View>
        </View>

        <View style={style.badgeSubBlock}>
          <Text style={style.badgeTitle}>{'parrainage'.toUpperCase()}</Text>
            <View style={[style.row, style.badgeSubBlock]}>
              <Image resizeMode="contain" source={require('../images/badge_jeu_sm.png')} style= {{width:70, height:80}}/>
              <Text style={style.badgeNumber}>0</Text>
            </View>
        </View>
      </View>
    )
  }
}