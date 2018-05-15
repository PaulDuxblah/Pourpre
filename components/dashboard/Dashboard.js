import React, { Component } from 'react';
import {Text, View, Image, TouchableHighlight, ActivityIndicator} from 'react-native';
import { StackNavigator } from 'react-navigation';

//GENERAL COMPONENTS
import PourpreComponent from '../PourpreComponent';
import BackgroundDash from '../BackgroundDashboard';

//COMPONENTS
import ReminderActivity from './ReminderActivity';
import BadgeDisplay from './BadgeDisplay';
import Sharing from './Sharing';
import TopBlock from './TopBlock';
import Agenda from '../agenda/Agenda';

//STYLESHEET


import style from './style';
import common from './../../common';

class Dashboard extends PourpreComponent {
  constructor(props) {
    super(props);
  }

  //ICON
  static navigationOptions = {
    title: 'Dashboard',
    tabBarIcon: () => {
      return <Image source={require ('../images/home_btn.png')} style= {{width:20, height:20}} />
    }
  }

  render() {
    const { user } = this.state;

    if (!user) {
      return (<ActivityIndicator size="large" color="white" />);
    }

    const meetingsToShow = [];
    if (user.meetings && user.meetings.length > 0) {
      user.meetings.forEach(function(meeting, i) {
        if (meeting.date.diff(today)) {
          meetingsToShow.push(meeting);
        }
      })
    }

    return (
      <BackgroundDash>
      <TopBlock user={this.state.user}/>

      <View style={style.activityBlock}>
        <Text style={[style.textGeneral, style.titleActivity]}>VOTRE PROCHAINE ACTIVITÉ</Text>

        <View style={style.border}></View>
        <View style={[common.row, style.reminderBlock]}>
          {meetingsToShow.length > 0 ?
            <View>
              {meetingsToShow.map((meeting) => {
                return <ReminderActivity meeting={meeting}/>
              })}
            </View>
            :
            <Text style={[style.textGeneral, style.titleActivity, style.textAlignCenter, style.textFullWidth]}>Aucun rendez-vous de prévu !</Text>
          }
        </View>

        <BadgeDisplay donations={user.donations} escorts={user.escorts} sponsorships={user.sponsorships} />
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
