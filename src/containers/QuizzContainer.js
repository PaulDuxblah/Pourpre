import React, { Component } from 'react';
import { 
    Text, 
    View,
    Image,
    StyleSheet 
} from 'react-native';

//STYLESHEET
import colors from '../styles/colors';

export default class QuizzContainer extends Component {
    static navigationOptions = {
		tabBarLabel: 'QUIZZ',
		tabBarIcon: ({ tintColor }) => (
			<Image 
			resizeMode='contain' 
			source={require('../images/game_btn.png')} 
			style={{width: 20, height: 20}}/>
		),
		headerStyle: { backgroundColor: colors.purpledark },
		headerTitleStyle: { color: colors.white },
	};

  render() {
    return (
      <View>
        <Text> QuizzContainer </Text>
      </View>
    )
  }
}