import React, { Component } from 'react';
import { 
  Text, 
  View, 
  Image,
  StyleSheet,
} from 'react-native';

//STYLESHEET
import colors from '../../styles/colors';

export default class BadgeDisplay extends Component {
  constructor (props) {
    super(props);
    this.state = {
      donations: props.donations,
      escorts: props.escorts,
      sponsorships: props.sponsorships,
    }
  }

  getSize = (int) => {
    const string = int.toString();
    return (45 + (5 * string.length)) / string.length;
  }

  render() {
    const { donations, escorts, sponsorships } = this.state;

    return (
      <View style={styles.badgeBlockWrapper}>
        <View style={styles.badgeSubBlock}>
          <Text style={styles.badgeTitle}>{'don de sang'.toUpperCase()}</Text>
            <View style={styles.badgeDetails}>
              <Image resizeMode="contain" source={require('../../images/badge_blood_sm.png')} style={styles.badgeImg}/>
              <Text style={[styles.textScore, { fontSize: this.getSize(donations) }]}>{donations}</Text>
            </View>
        </View>
        
        <View style={styles.badgeSubBlock}>
          <Text style={styles.badgeTitle}>{'accompagnements'.toUpperCase()}</Text>
            <View style={styles.badgeDetails}>
              <Image resizeMode="contain" source={require('../../images/badge_rencontre_sm.png')} style={styles.badgeImg}/>
              <Text style={[styles.textScore, { fontSize: this.getSize(escorts) }]}>{escorts}</Text>
            </View>
        </View>

        <View style={styles.badgeSubBlock}>
          <Text style={styles.badgeTitle}>{'parrainage'.toUpperCase()}</Text>
            <View style={styles.badgeDetails}>
              <Image resizeMode="contain" source={require('../../images/badge_jeu_sm.png')} style={styles.badgeImg}/>
              <Text style={[styles.textScore, { fontSize: this.getSize(sponsorships) }]}>{sponsorships}</Text>
            </View>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
	badgeBlockWrapper:{
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'space-between',
		marginLeft: 10,
		marginRight: 10
	},
	badgeDetails: {
		flexDirection: 'row'
	},
	badgeSubBlock: {
		alignItems: 'center',
	},
	badgeTitle: {
		fontSize: 11,
		color: colors.white
	},
	textScore: {
		color: colors.white,
	},
	badgeImg:{
		width: 50,
		height: 60
	}
})