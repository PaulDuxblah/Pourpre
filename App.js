import React from 'react';
import { 
  StatusBar, 
  View, 
  StyleSheet 
} from 'react-native';

import LoggedInContainer from './src/navigators/LoggedInTabNavigator';

export default class App extends React.Component {
  render() {
    return (
    <View style= {{flex: 1}} >
      <StatusBar hidden={true} />
      <LoggedInContainer/>
    </View>
    );
  }
}

//Hide warning info
console.disableYellowBox = true; 