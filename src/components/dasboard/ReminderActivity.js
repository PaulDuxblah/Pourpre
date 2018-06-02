import React, { Component } from 'react';
import { 
  Text, 
  View, 
  StyleSheet,
} from 'react-native';

//STYLESHEET
import colors from '../../styles/colors';
import IconEvil from 'react-native-vector-icons/EvilIcons';


export default class ReminderActivity extends Component {
  constructor (props) {
    super(props);
    this.state = {
      meeting: props.meeting,
    }
  }

  render() {
	  const { borderTop } = this.props;
    return (
      <View style={[{borderTopColor: borderTop },styles.wrapper]}>
        <View style={styles.dateReminder}>
          <Text style={styles.datetimeReminder}>03</Text>
          <Text style={styles.dateReminderMonth}>{'JAN'.toUpperCase()}</Text>
        </View>
        <View style={styles.detailsReminder}>
          <Text style={styles.reminderText}>11:30 AM </Text>
          <Text style={[styles.reminderText, styles.reminderTextType]}>Don de sang </Text>
          <View style={styles.location}>
		  	<IconEvil
			name='location'
			size={18}
			color={colors.white}
			/>
            <Text 
			style={styles.addressReminder}
			numberOfLines={2}
			>
			EFS Ile de France à Paris 10ème
			</Text>
          </View>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
	wrapper: {
		display: 'flex',
		flexDirection: 'row',
		padding: 4,
		backgroundColor: colors.lightpurple,
		borderTopWidth: 6,
		marginBottom: 10,
		marginLeft: 3,
		marginRight: 3,
	},
	dateReminder:{
		alignItems: 'center',
	},
	datetimeReminder:{
		fontSize: 40,
		color: colors.lightpink,
		fontWeight: '800'
	},
	dateReminderMonth:{
		color: colors.white,
		fontSize: 20,
		fontWeight: '800',
		position: 'relative',
		bottom: 5
	},
	reminderText:{
		color: colors.white,
		fontSize: 17,
	},
	reminderTextType:{
		fontWeight: '800',
		fontSize: 13
	},
	location:{
		display: 'flex',
		flexDirection: 'row',
		paddingVertical: 4
	},
	addressReminder:{
		width: 80,
		color: colors.white,
		fontSize: 9
	},
	detailsReminder:{
		paddingHorizontal: 5,
	}


})