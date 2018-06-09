import React, { Component } from 'react';
import { 
	Text, 
	View, 
	Image, 
	StyleSheet, 
	TouchableOpacity,
  TouchableHighlight
} from 'react-native';

//STYLESHEET
import colors from '../../styles/colors';
import IconAwesome from 'react-native-vector-icons/Ionicons';


export default class TopBlock extends Component {
  constructor (props) {
    super(props);
    this.state = {
      user: props.user,
    }
  }

  getAvatar = (avatar) => {
    switch (avatar) {
      case 'batman':
        return require('../../images/batman.png');
      default:
        return require('../../images/user_profile_icon.png');
    }
  }

  logout = () => {
    this.props.logout();
  }

  render() {
    const { user } = this.state;

    return (
      	<View style={styles.container}>
     		<View style={styles.containerWrapper}>
				<View style={styles.wrapper}>
          <TouchableHighlight onPress={this.logout}>
            <Image source={this.getAvatar(user.avatar)} style= {styles.imagesProfile}/>
          </TouchableHighlight>

					<View style={styles.infoBlock}>
					<Text style={styles.titleUser}>{('BONJOUR ' + this.props.user.pseudo + '!').toUpperCase()}</Text>
					<TouchableOpacity onPress={this._onPressButton}>
						<View style={styles.buttonHistory}>
							<IconAwesome
							name='ios-folder-outline'
							size={18}
							color={colors.white}
							/>
							<Text style={styles.buttonText}>
							HISTORIQUE DE DON
							</Text>
						</View>
					</TouchableOpacity>
					</View>
				</View>
      		</View>
    	</View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
	paddingTop: 50,
  },
  containerWrapper:{
	marginLeft: 10,
	marginRight: 10,
	borderColor: colors.pink,
	borderWidth: 2,
  },
  wrapper: {
    flexDirection: 'row',
	alignItems: 'center',
	paddingHorizontal: 17,
	paddingVertical: 9,

  },
  imagesProfile:{
	width: 80,
	height: 80,
  },
  infoBlock:{
	paddingHorizontal: 17
  },
  titleUser: {
	color: colors.white,
	fontSize: 20,
  },
  buttonHistory:{
	display: 'flex',
	flexDirection: 'row',
	marginTop: 10,
	paddingHorizontal: 10,
	paddingVertical: 7,
	backgroundColor: colors.purple,
	borderColor: colors.red,
	borderWidth: 1,
  },
  buttonText: {
	color: colors.white,
	fontSize: 15,
	paddingHorizontal: 10

  }
})