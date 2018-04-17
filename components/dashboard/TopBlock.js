import React, { Component } from 'react';
import { Text, View, Image, StyleSheet, TouchableOpacity} from 'react-native';

//STYLESHEET
import style from '../../style';

export default class TopBlock extends Component {
  avatars = {
    'batman': require('../images/batman.png'),
  };

  constructor (props) {
    super(props);
    this.state = {
      user: props.user,
    }
  }

  getAvatar = (avatar) => {
    switch (avatar) {
      case 'batman':
        return require('../images/batman.png');
      default:
        return require('../images/user_profile_icon.png');
    }
  }

  render() {
    const { user } = this.state;

    return (
      <View style={[style.block, style.dashBlock]}>
      <View style={style.row}>
        <Image source={this.getAvatar(user.avatar)} style= {{width:90, height:90}}/>
        <View style={style.nameBlock}>
          <Text style={[style.textGeneral, style.titleName]}>{'BONJOUR ' + this.props.user.pseudo + '!'.toUpperCase()}</Text>
          <Text style={[style.textGeneral, style.capacityText]}>{'Votre capacite'.toUpperCase()}</Text>

          <View style={style.row}>
            <Image resizeMode="contain" source={require('../images/level_user.png')} style= {{width:200, height:20}}/>
            <Text style={[style.textGeneral, style.percentageText]}>{'30%'.toUpperCase()}</Text>
          </View>
          
          <TouchableOpacity onPress={this._onPressButton}>
            <Image resizeMode="contain" source={require('../images/historique_btn.png')} style={{width:200, height:40}}/>
          </TouchableOpacity>
        </View>
      </View>
    </View>
    )
  }
}