import React, { Component } from 'react'
import { Text, View, Image, TouchableOpacity } from 'react-native'


//STYLESHEET
import style from '../../style'


export default class UserProfile extends Component {
  render() {
    return (
      <View>
        <View style={[style.row, style.userProfBlock]}>
            <Image source={require('../images/user_profile_icon.png')} style={{width:120, height:120}}/>
            <View style={style.profileSubDes}>
                <Text style={style.profileSubNam}>{'mikeal'.toUpperCase()}</Text>
                <TouchableOpacity>
                <Image resizeMode="contain" source={require('../images/demande_accom.png')} style={{width:210, height:40}}/>
                </TouchableOpacity>
            </View>
        </View>

        <View style={[style.row, style.badgeBlock, style.userBadgeDisplay]}>
            <View style={style.badgeSubBlock}>
                <Image resizeMode="contain" source={require('../images/badge_blood_lg.png')} style= {{width:90, height:100}}/>
                <Text style={style.badgeTitle}>Don de sang</Text> 
            </View>
            <View style={style.badgeSubBlock}>
                <Image resizeMode="contain" source={require('../images/badge_rencontre_lg.png')} style= {{width:90, height:100}}/>
                <Text style={style.badgeTitle}>Accompagnement</Text> 
            </View>
            <View style={style.badgeSubBlock}>
                <Image resizeMode="contain" source={require('../images/badge_jeu_lg.png')} style= {{width:90, height:100}}/>
                <Text style={style.badgeTitle}>Parrainage</Text> 
            </View>
        </View>
      </View>

    )
  }
}