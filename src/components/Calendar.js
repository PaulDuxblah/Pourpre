import React, {Component} from 'react';
import {
  Text, 
  StyleSheet, 
  ScrollView, 
  View, 
  Image, 
  Animated,
  Dimensions
} from 'react-native';
import { Calendar } from 'react-native-calendars';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

export default class CalendarView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      animated: new Animated.Value(height)
    };

    this.onDayPress = this.onDayPress.bind(this);
  }

  startAnimation = () => {
    Animated.timing(this.state.animated, {
      toValue: 0,
      duration: 400
    }).start();
  }
  
  onDayPress(day) {
    this.setState({
      selected: day.dateString
    });
    this.showPopup();
  }

  rewindAnimation = () => {
    Animated.timing(this.state.animated, {
      toValue: height,
      duration: 400
    }).start();
  }

  hidePopup = () => {
    this.rewindAnimation();
  }

  showPopup = () => {
    this.startAnimation();
  }

  render() {
    let popup = (
      <Animated.View
        style={[
          styles.popup,
          {
            top: this.state.animated
          }
        ]}
      >
        <View style={styles.popupView}>
          <Text onPress={this.hidePopup}>HIDE</Text>
        </View>
      </Animated.View>
    );

    return (
      <View style={styles.container}>
        <ScrollView>
          <Calendar
            style={styles.calendar}
            onDayPress={this.onDayPress}
            // minDate={'2012-05-10'}
            // maxDate={'2012-05-29'}
            // firstDay={1}
            markedDates={{
              [this.state.selected]: {selected: true, disableTouchEvent: true, selectedDotColor: 'orange'},
              '2018-06-23': {selected: true, marked: true},
              '2018-06-24': {selected: true, marked: true, dotColor: 'green'},
              '2018-06-25': {marked: true, dotColor: 'red'},
              '2018-06-26': {marked: true},
              '2018-06-27': {disabled: true, activeOpacity: 0}
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

        {popup}
      </View>
    );
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
    position: 'relative'
  },
  popup: {
    position: 'absolute',
    left: 0,
    height: '100%',
    width: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
    justifyContent: 'center',
  },
  popupView: {
    alignSelf: 'center',
    height: 360,
    width: 300,
    backgroundColor: '#FFFFFF',
  }
});
