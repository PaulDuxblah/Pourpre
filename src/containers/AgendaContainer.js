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
		headerRight: <NavBarButton
      handleButtonPress={() => navigation.navigate('Map')}
			location="left"
      icon={<Image 
			resizeMode='contain' 
			source={require('../images/carte_pin.png')} 
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
  }
});