import React from 'react';
import { StackNavigator } from 'react-navigation';




const LoggedOutNavigator = StackNavigator({
    LogIn: { screen: LogIn },
    SignUp: {screen: SignUp}
    }
  
);

export default LoggedOutNavigator;