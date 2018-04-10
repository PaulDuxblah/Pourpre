import React, {Component} from 'react';
import {Text, StyleSheet, ScrollView, View, Image} from 'react-native';
import {Calendar} from 'react-native-calendars';

export default class CalendarView extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.onDayPress = this.onDayPress.bind(this);
  }

    static navigationOptions = {
        title: 'Agenda',
       
        tabBarIcon: () => {
            return <Image source={require ('../images/agenda_btn.png')} style= {{width:20, height:20}} />
        }
    }

  render() {
    return (
      <ScrollView style={styles.container}>
        <Calendar
          style={styles.calendar}
          onDayPress={this.onDayPress}
          // minDate={'2012-05-10'}
          // maxDate={'2012-05-29'}
          // firstDay={1}
          markedDates={{
            [this.state.selected]: {selected: true, disableTouchEvent: true, selectedDotColor: 'orange'},
            '2018-04-23': {selected: true, marked: true},
            '2018-04-24': {selected: true, marked: true, dotColor: 'green'},
            '2018-04-25': {marked: true, dotColor: 'red'},
            '2018-04-26': {marked: true},
            '2018-04-27': {disabled: true, activeOpacity: 0}
          }}
          // theme={{
          //   calendarBackground: '#333248',
          //   textSectionTitleColor: 'white',
          //   dayTextColor: 'red',
          //   todayTextColor: 'white',
          //   selectedDayTextColor: 'white',
          //   monthTextColor: 'white',
          //   selectedDayBackgroundColor: '#333248',
          //   arrowColor: 'white',
          //   // textDisabledColor: 'red',
          //   'stylesheet.calendar.header': {
          //     week: {
          //       marginTop: 5,
          //       flexDirection: 'row',
          //       justifyContent: 'space-between'
          //     }
          //   }
          // }}
        />
      </ScrollView>
    );
  }

  onDayPress(day) {
    this.setState({
      selected: day.dateString
    });
  }
}

const styles = StyleSheet.create({
  calendar: {
    borderTopWidth: 1,
    paddingTop: 5,
    borderBottomWidth: 1,
    borderColor: '#eee',
    height: 350
  },
  text: {
    textAlign: 'center',
    borderColor: '#bbb',
    padding: 10,
    backgroundColor: '#eee'
  },
  container: {
    flex: 1,
    backgroundColor: 'gray'
  }
});
