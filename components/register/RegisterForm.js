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

    let duplicateError;

    if (this.props.errors && this.props.errors.includes('duplicate')) {
      duplicateError = <Text style={registerStyle.error}>Ce pseudo existe déjà !</Text>;
    }

    // TODO display errors
    return (
      <View style={styles.container}>
        {duplicateError}

        <TextInput style = {registerStyle.input} 
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

        <TextInput style = {registerStyle.input}
          autoCapitalize="none"
          placeholder='Mot de passe' 
          secureTextEntry
          value={password}
          onChangeText={v => this.handleChange('password', v)}
        />

        <TextInput style = {registerStyle.input}   
          autoCapitalize="none"
          returnKeyType="go" 
          placeholder='Confirmer mot de passe' 
          secureTextEntry
          value={confirmPassword}
          onChangeText={v => this.handleChange('confirmPassword', v)}
        />

        <Button 
          style= {styles.buttonTex} 
          title="S'ENREGISTRER"
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