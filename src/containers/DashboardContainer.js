import React, { Component } from 'react';
import {
    Text, 
    View, 
    Image, 
    TouchableHighlight, 
    ActivityIndicator,
    StyleSheet,
} from 'react-native';

//GENERAL COMPONENTS
import ApiUser from '../auth/ApiUser';
import BackgroundDash from '../components/background/BackgroundDashboard';

//COMPONENTS
import ReminderActivity from '../components/dasboard/ReminderActivity';
import BadgeDisplay from '../components/dasboard/BadgeDisplay';
import Sharing from '../components/dasboard/Sharing';
import TopBlock from '../components/dasboard/TopBlock';

//STYLESHEET
import colors from '../styles/colors';



export default class Dashboard extends ApiUser {
  constructor(props) {
    super(props);
  }

  //ICON
  static navigationOptions = ({navigation}) =>({
    header: null,
    title: 'Dashboard',
    tabBarIcon: () => {
      return <Image source={require ('../images/home_btn.png')} style= {{width:20, height:20}} />
    }
  })

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
      	<View style={styles.containerWrapper}>
		  	<View style={styles.wrapper}>
			  <View style={styles.titleBlock}>
			  	<Text style={styles.reminderTitle}>VOTRE PROCHAINE ACTIVITÉ</Text>
			  </View>
			  	<View style={styles.notificationReminder}>
					
					{meetingsToShow.length > 0 ?
						<View>
						{meetingsToShow.map((meeting) => {
							return 
							<ReminderActivity
							borderTop={colors.bluelight}
							meeting={meeting}
							/>
						})}
						</View>
						:
						<View style={styles.noRdvBlock}>
							<Text style={styles.noRdvTitle}>Aucun rendez-vous de prévu !</Text>
						</View>	
					}
				</View>
			</View>
			<View>
				<BadgeDisplay 
				donations={user.donations} 
				escorts={user.escorts} 
				sponsorships={user.sponsorships} 
				/>	
			</View>	
			<View>
				<Sharing/>	
			</View>	
      	</View>   
      </BackgroundDash>
    )
  }
}

const styles = StyleSheet.create({
	notificationReminder: {
		display: 'flex',
		flexDirection: 'row',
	},
	containerWrapper: {
		marginTop: 20,
		marginLeft: 10,
		marginRight: 10,
		borderColor: colors.pink,
		borderWidth: 2,
	},
	titleBlock: {
		borderBottomColor: colors.lightpurple,
		borderBottomWidth: 2,
		marginBottom: 7
	},
	reminderTitle:{
		color: colors.white,
		fontSize: 15,
		paddingVertical: 9,
		paddingLeft: 10
	},
	noRdvTitle: {
		color: colors.lightgray01,
		paddingHorizontal: 10,
		paddingVertical: 15,
		alignItems: 'center',
		fontWeight: '700'
	},
	noRdvBlock:{
		height: 70,
	},
	wrapper:{

	}

})

