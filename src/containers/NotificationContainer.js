import React, { Component } from 'react'
import { 
  Text, 
  View,
  StyleSheet,
  Image
} from 'react-native'

//COMPONENTS
import BackgroundGeneral from '../components/background/BackgroundGeneral';
import ApiUser from '../auth/ApiUser';
//STYLESHEET
import colors from '../styles/colors';

export default class Notification extends ApiUser {
  static navigationOptions = ({ navigation }) => ({
    title: 'NOTIFICATION',
    tabBarLabel: 'DASHBOARD',
		headerStyle: { backgroundColor: colors.purpledark },
    headerTitleStyle: { color: colors.white },
    tabBarIcon: () => (
      <Image 
      resizeMode='contain' 
      source={require('../images/home_btn.png')} 
      style={{width: 20, height: 20}}/>
    ),
	});
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <BackgroundGeneral>
        <View style={styles.notifBlock}>
          <Text style={styles.notifDate}>18</Text>
          <View style={styles.notifSub}>
            <Text style={styles.notifMonth}>Janvier 2018</Text>
            <Text style={styles.notifTitle}>Accompagnement</Text>
          </View>
        </View>
        <View style={styles.notifBlock}>
          <Text style={styles.notifDate}>09</Text>
          <View style={styles.notifSub}>
            <Text style={styles.notifMonth}>Mars 2018</Text>
            <Text style={styles.notifTitle}>Accompagnement</Text>
          </View>
        </View>
        <View style={[styles.notifBlock, styles.notifcolor]}>
          <Text style={styles.notifDate}>14</Text>
          <View style={styles.notifSub}>
            <Text style={styles.notifMonth}>Juillet 2018</Text>
            <Text style={styles.notifTitle}>Don de sang</Text>
          </View>
        </View>
        <View style={styles.notifBlock}>
          <Text style={styles.notifDate}>17</Text>
          <View style={styles.notifSub}>
            <Text style={styles.notifMonth}>Octobre 2018</Text>
            <Text style={styles.notifTitle}>Accompagnement</Text>
          </View>
        </View>
      </BackgroundGeneral>
    )
  }
}

const styles = StyleSheet.create({
    notifBlock:{
    backgroundColor: '#355C7C',
    margin: 10,
    paddingHorizontal: 10,
    paddingVertical: 2,
    borderColor: '#169DC1',
    borderLeftWidth: 6,
    display: 'flex',
    flexDirection: 'row'
  },
  notifcolor:{
    borderColor: colors.lightpink,
  },
  notifDate:{
    fontSize: 45,
    color: '#169DC1',
    fontWeight: 'bold'
  },
  notifSub:{
    paddingTop: 5,
    paddingHorizontal: 10,
  },
  notifMonth:{
    color: '#C9C6CC',
    fontSize: 20
  },
  notifTitle:{
    color: '#fff',
    fontSize: 15,
    fontWeight: 'bold'
  },
})