import React, { Component } from 'react'
import { 
  Text, 
  View,
  StyleSheet,
} from 'react-native'

//COMPONENTS
import BackgroundGeneral from '../components/background/BackgroundGeneral';
import ApiUser from '../auth/ApiUser';


export default class Notification extends ApiUser {
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
      </BackgroundGeneral>
    )
  }
}

const styles = StyleSheet.create({
    notifBlock:{
    backgroundColor: '#355C7C',
    margin: 10,
    paddingHorizontal: 10,
    paddingVertical: 13,
    borderColor: '#169DC1',
    borderLeftWidth: 6,
  },
  notifDate:{
    fontSize: 53,
    color: '#169DC1',
    fontWeight: 'bold'
  },
  notifSub:{
    paddingHorizontal: 10,
  },
  notifMonth:{
    color: '#C9C6CC',
    fontSize: 20
  },
  notifTitle:{
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold'
  },
})