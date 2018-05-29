import React from 'react';
import { StackNavigator } from 'react-navigation';
import Loading from '../screens/Loading';
import LoggedInNavigator from '../navigators/LoggedInTabNavigator';
import LoggedOutNavigator from '../navigators/LoggedOutNavigator';

const AppNavigator = StackNavigator({
	Loading,
	LoggedOutNavigator,
	LoggedInNavigator,
  },
  {
    initialRouteName: 'Loading',
  }
);

export default AppNavigator;

