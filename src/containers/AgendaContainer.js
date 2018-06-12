import React, {Component} from 'react';
import {
    Text, 
    StyleSheet, 
    View, 
    Image
} from 'react-native';
import { 
	Agenda 
} from 'react-native-calendars';

//STYLESHEET
import colors from '../styles/colors';

//GENERAL COMPONENTS
import BackgroundGeneral from '../components/background/BackgroundGeneral';


//COMPONENTS
import CalendarView from '../components/Calendar';
import NavBarButton from '../components/buttons/NavBarButton';
import ApiUser from '../auth/ApiUser';

export default class AgendaContainer extends ApiUser {
	static navigationOptions = ({ navigation }) => ({
    tabBarLabel: 'AGENDA',
    title: 'AGENDA',
		headerRight: <NavBarButton
      handleButtonPress={() => navigation.navigate('Map')}
			location="left"
      icon={<Image 
			resizeMode='contain' 
			source={require('../images/location_icon_pin.png')} 
			style={{width: 40, height: 40, marginLeft: 10}}/>}
    />,
		tabBarIcon: ({ tintColor }) => (
			<Image 
			resizeMode='contain' 
			source={require('../images/agenda_btn.png')} 
			style={{width: 20, height: 20}}/>
		),
		headerStyle: { backgroundColor: colors.purpledark },
		headerTitleStyle: { color: colors.white },
	});

  render() {
		return (
			<BackgroundGeneral>
				<View style={{flex: 1}}>
					<CalendarView />
          <View style={styles.notifBlock}>
            <Text style={styles.notifDate}>27</Text>
            <View style={styles.notifSub}>
              <Text style={styles.notifMonth}>Juin 2018</Text>
              <Text style={styles.notifTitle}>Accompagnement</Text>
            </View>
          </View>
          <View style={[styles.notifBlock,  styles.notifcolor]}>
            <Text style={styles.notifDate}>18</Text>
            <View style={styles.notifSub}>
              <Text style={styles.notifMonth}>Juillet 2018</Text>
              <Text style={styles.notifTitle}>Don de sang</Text>
            </View>
          </View>
				</View>
       
			</BackgroundGeneral>
		)
  }
}

const styles = StyleSheet.create({
  item: {
    backgroundColor: 'white',
    flex: 1,
    borderRadius: 5,
    padding: 10,
    marginRight: 10,
    marginTop: 17
  },
  emptyDate: {
    height: 15,
    flex:1,
    paddingTop: 30
  },
  notifBlock:{
    backgroundColor: '#355C7C',
    margin: 10,
    paddingHorizontal: 10,
    paddingVertical: 13,
    borderColor: '#169DC1',
    borderLeftWidth: 6,
    flexDirection: 'row'
  },
  notifDate:{
    fontSize: 40,
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
    fontSize: 17,
    fontWeight: 'bold'
  },
  notifcolor:{
    borderColor: colors.lightpink,
  },
});