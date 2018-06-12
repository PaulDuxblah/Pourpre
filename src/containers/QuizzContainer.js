import React, { Component } from 'react';
import { 
    Text, 
    View,
    Image,
    StyleSheet 
} from 'react-native';

//STYLESHEET
import colors from '../styles/colors';

//GENERAL COMPONENTS
import BackgroundGeneral from '../components/background/BackgroundGeneral';

export default class QuizzContainer extends Component {
    static navigationOptions = {
    tabBarLabel: 'QUIZZ',
    title: 'QUIZZ',
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
      <BackgroundGeneral>
        <View>
          <Image resizeMode="contain" source={require('../images/quiz_screen.png')} style={{width: '100%', height: '100%', position: 'relative', bottom: 40}}/>
        </View>
      </BackgroundGeneral>
    )
  }
}