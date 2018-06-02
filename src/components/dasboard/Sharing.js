import React, { Component } from 'react';
import { 
  Text, 
  View, 
  Image,
  StyleSheet,
  TouchableOpacity 
} from 'react-native';

//STYLESHEET
import colors from '../../styles/colors';
import IconAwesome from 'react-native-vector-icons/FontAwesome';
import IconMaterial from 'react-native-vector-icons/MaterialIcons';

export default class Sharing extends Component {
  render() {
    return (
      <View style={styles.sharingBlockWrapper}>
        <View style={styles.sharingSubBlock}>
        	<IconAwesome
			name='share'
			size={20}
			color={colors.white}
			/>
            <Text style={styles.sharingSubText}>{'Mobiliser votre entourage'.toUpperCase()}</Text>
        </View>
        <View style={styles.sharingBtn}>
			<TouchableOpacity>
				<View style={[styles.buttonShare, {backgroundColor: '#3b5796'}]}>
					<IconAwesome
					name='facebook-f'
					size={18}
					color={colors.white}
					/>
					<Text style={styles.buttonText}>
					FACEBOOK
					</Text>
				</View>
			</TouchableOpacity>
			<TouchableOpacity>
				<View style={[styles.buttonShare, {backgroundColor: '#18739b'}]}>
					<IconMaterial
					name='sms'
					size={18}
					color={colors.white}
					/>
					<Text style={styles.buttonText}>
					SMS
					</Text>
				</View>
			</TouchableOpacity>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
	sharingBlockWrapper:{
		marginLeft: 10,
		marginRight: 10,
		paddingVertical: 40
	},
	sharingSubBlock: {
		display: 'flex',
		flexDirection: 'row',
		marginBottom: 10
	},
	sharingSubText: {
		marginLeft: 10,
		color: colors.white,
		fontSize: 15
	},
	sharingBtn:{
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'space-between'
	},
	buttonShare:{
		display: 'flex',
		flexDirection: 'row',
		paddingVertical: 5,
		paddingHorizontal: 10,
		margin: 3,
		width: 150,
	},
	buttonText:{
		color: colors.white,
		marginLeft: 10,
	}
})