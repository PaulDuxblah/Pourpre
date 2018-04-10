import React, { Component } from 'react'
import { Text, View } from 'react-native'

//COMPONENTS
import BackgroundGeneral from '../BackgroundGeneral'

//STYLESHEET
import style from '../../style'

export default class Notification extends Component {

  render() {
    return (
      <BackgroundGeneral>
      
        <View style={[style.row, style.notifBlock]}>
            <Text style={style.notifDate}>18</Text>
            <View style={style.notifSub}>
                <Text style={style.notifMonth}>Janvier 2018</Text>
                <Text style={style.notifTitle}>Accompagnement</Text>
            </View>
        </View>
        
        <View style={[style.row, style.notifBlock]}>
            <Text style={style.notifDate}>02</Text>
            <View style={style.notifSub}>
                <Text style={style.notifMonth}>Janvier 2018</Text>
                <Text style={style.notifTitle}>Accompagnement</Text>
            </View>
        </View>
      </BackgroundGeneral>
    )
  }
}