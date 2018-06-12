import React, { Component } from 'react';
import { 
  Text, 
  View, 
  TouchableOpacity, 
  StyleSheet, 
  StatusBar, 
  Alert, 
  Button, 
  TextInput ,
  KeyboardAvoidingView
} from 'react-native';

import colors from '../styles/colors';

class LoginForm extends Component {
  constructor (props) {
    super(props);
    this.state = {
      password: '',
      pseudo: '',
    }
  }

  submitForm = () => {
    this.props.onLoginClick(this.state.pseudo, this.state.password);
  }

  handleChange = (stateName, value) => {
    this.setState({
      ...this.state, 
      [stateName]: value
    });
  }

  render() {
    const { pseudo, password } = this.state;

    return (
      <KeyboardAvoidingView
        style={styles.wrapper}
        behavior="padding"
       >
        <View style={styles.container}>
          <TextInput 
            style={styles.input} 
            autoCapitalize="none"  
            autoCorrect={false}
            placeholder="Pseudo"
            value={pseudo}
            onChangeText={v => this.handleChange('pseudo', v)}
          />
          <TextInput 
            style={styles.input}   
            autoCapitalize="none"
            returnKeyType="go" 
            placeholder="Password"
            value={password}
            onChangeText={v => this.handleChange('password', v)}
            secureTextEntry
          />
          <TouchableOpacity
            onPress={this.submitForm} 
            style={styles.button}
          >
            <View>
            <Text style={styles.buttonText}>SE CONNECTER</Text>
            </View>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    )
  }
}
export default LoginForm
const styles = StyleSheet.create({
  wrapper: {
    display: 'flex'
  },
  container:{
      padding: 20
  },
  input:{
      height: 40,
      width:240,
      backgroundColor: '#fff',
      marginBottom: 10,
      padding: 10,
      color: '#000'
  },
  buttonContainer:{
      backgroundColor: '#2980b6',
      paddingVertical: 15
  },
  button:{
      alignItems: 'center',
      backgroundColor: colors.lightpurple,
      paddingVertical: 10,
      marginTop: 10,
  },
  buttonText:{
    color: colors.white,
    fontWeight: '600',
    fontSize: 16
  }
})