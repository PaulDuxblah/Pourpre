import React, { Component } from 'react'
import {Text, View, Image, TouchableHighlight} from 'react-native'
import { StackNavigator } from 'react-navigation'

//GENERAL COMPONENTS
import BackgroundDash from '../BackgroundDashboard'


//COMPONENTS
import ReminderActivity from './ReminderActivity'
import BadgeDisplay from './BadgeDisplay'
import Sharing from './Sharing'
import TopBlock from './TopBlock'
import Agenda from '../agenda/Agenda'

//STYLESHEET
import style from '../../style'


class Dashboard extends Component {

  //ICON
    static navigationOptions = {
        title: 'Dashboard',
        tabBarIcon: () => {
            return <Image source={require ('../images/home_btn.png')} style= {{width:20, height:20}} />
        }
    }
    
  render() {
    return (
      <BackgroundDash>
      <TopBlock/>

      <View style={style.activityBlock}>
        <Text style={[style.textGeneral, style.titleActivity]}>VOTRE PROCHAINE ACTIVITÉ</Text>
        <View style={style.border}></View>
        <View style={[style.row, style.reminderBlock]}>
          <ReminderActivity/>
          <ReminderActivity/>
        </View>
        <BadgeDisplay/>
        <Sharing/>
      </View>
      </BackgroundDash>
    )
  }
}

const navigationOptions = {
    headerStyle: style.header,
    headerTitleStyle: style.headerTitle
}

export default StackNavigator({
    Dashboard: {
      screen: Dashboard,
      navigationOptions
    },
    Agenda: {
      screen: Agenda,
      navigationOptions
    }
})
