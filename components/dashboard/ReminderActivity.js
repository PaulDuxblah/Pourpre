import React, { Component } from 'react'
import { Text, View, Image } from 'react-native'

//STYLESHEET
import style from '../../style'


export default class ReminderActivity extends Component {
  render() {
    return (
      <View style={[style.row, style.reminderOneBg]}>
        <View style={style.dateReminder}>
          <Text style={style.datetimeReminder}>
          03
          </Text>
          <Text style={style.dateReminderMonth}>
          {'JAN'.toUpperCase()}
          </Text>
        </View>
        <View>
            <Text style={style.timeReminder}> 11:30 AM </Text>
            <Text style={style.timeReminder}> Don de sang </Text>
            <View style={style.location}>
                <Image resizeMode='contain' source={require('../images/location_pin_sm.png')}/>
                <Text style={style.addressReminder}>EFS Ile de France à Paris 10ème</Text>
            </View>
        </View>
       
      </View>
    )
  }
}
