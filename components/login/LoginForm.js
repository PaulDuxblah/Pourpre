import React, { Component } from 'react'
import { Text, View, TouchableOpacity, StyleSheet, StatusBar, Alert, Button, TextInput } from 'react-native'

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
        <Button 
          onPress={this.submitForm} 
          style={styles.buttonText}
          title="SE CONNECTER"
        />
      </View>
    )
  }
}
export default LoginForm
const styles = StyleSheet.create({
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
    buttonText:{
        color: '#fff',
        textAlign: 'center',
        fontWeight: '700'
    }
})