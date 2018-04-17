import React, { Component } from 'react';
import { Text, View, TouchableOpacity, StyleSheet, StatusBar, Alert, Button, TextInput, Picker } from 'react-native';

import registerStyle from './style';

class RegisterForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pseudo: null,
      gender: 'Homme',
      password: null,
      confirmPassword: null,
    };
  }

  submitForm = () => {
    this.props.onRegisterClick(this.state.pseudo, this.state.gender, this.state.password, this.state.confirmPassword);
  }

  handleChange = (stateName, value) => {
    this.setState({
      ...this.state, 
      [stateName]: value
    });
  }

  render() {
    const { pseudo, gender, password, confirmPassword } = this.state;
    console.log(pseudo, gender, password, confirmPassword);

    // TODO display errors
    // TODO Do post user
    return (
      <View style={styles.container}>
        <TextInput style = {styles.input} 
          autoCapitalize="none"  
          autoCorrect={false}
          placeholder='Pseudo'
          value={pseudo}
          onChangeText={v => this.handleChange('pseudo', v)}
        />

        <Picker
          selectedValue={gender}
          style={{ height: 50, width: 100 }}
          onValueChange={v => this.handleChange('gender', v)}
          style={[registerStyle.picker]}
        >
          <Picker.Item label="Homme" value="Homme" />
          <Picker.Item label="Femme" value="Femme" />
        </Picker>

        <TextInput style = {styles.input}
          placeholder='Mot de passe' 
          secureTextEntry
          value={password}
          onChangeText={v => this.handleChange('password', v)}
        />

        <TextInput style = {styles.input}   
          returnKeyType="go" 
          placeholder='Confirmer mot de passe' 
          secureTextEntry
          value={confirmPassword}
          onChangeText={v => this.handleChange('confirmPassword', v)}
        />

        <Button 
          style= {styles.buttonTex} 
          title="S'ENRGISTRER"
          onPress={this.submitForm} 
        />
      </View>
    )
  }
}
export default RegisterForm
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
        color: '#fff'
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