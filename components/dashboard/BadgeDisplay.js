import React, { Component } from 'react'
import { Text, View, Image} from 'react-native'

//STYLESHEET
import style from './style'
import common from './../../common'

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
      <View style={[common.row, style.badgeBlock]}>
        <View style={style.badgeSubBlock}>
          <Text style={style.badgeTitle}>{'don de sang'.toUpperCase()}</Text>
            <View style={[common.row, style.badgeSubBlock]}>
              <Image resizeMode="contain" source={require('../images/badge_blood_sm.png')} style= {{width:70, height:80}}/>
              <Text style={[style.textWhite, { fontSize: this.getSize(donations) }]}>{donations}</Text>
            </View>
        </View>
        
        <View style={style.badgeSubBlock}>
          <Text style={style.badgeTitle}>{'accompagnements'.toUpperCase()}</Text>
            <View style={[common.row, style.badgeSubBlock]}>
              <Image resizeMode="contain" source={require('../images/badge_rencontre_sm.png')} style= {{width:70, height:80}}/>
              <Text style={[style.textWhite, { fontSize: this.getSize(escorts) }]}>{escorts}</Text>
            </View>
        </View>

        <View style={style.badgeSubBlock}>
          <Text style={style.badgeTitle}>{'parrainage'.toUpperCase()}</Text>
            <View style={[common.row, style.badgeSubBlock]}>
              <Image resizeMode="contain" source={require('../images/badge_jeu_sm.png')} style= {{width:70, height:80}}/>
              <Text style={[style.textWhite, { fontSize: this.getSize(sponsorships) }]}>{sponsorships}</Text>
            </View>
        </View>
      </View>
    )
  }
}