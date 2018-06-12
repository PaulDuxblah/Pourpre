import React, { Component } from 'react';
import { 
  Text, 
  View, 
  TouchableOpacity, 
  StyleSheet, 
  StatusBar, 
  Alert, 
  Button, 
  TextInput,
  Picker,
  KeyboardAvoidingView,
  ScrollView
} from 'react-native';

import colors from '../styles/colors';

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
      duplicateError = <Text style={styles.error}>Ce pseudo existe déjà !</Text>;
    }

    // TODO display errors
    return (
      <KeyboardAvoidingView
        style={styles.wrapper}
        behavior="padding"
      >
      <View style={styles.scrollViewWrapper}>
        {duplicateError}

        <TextInput style = {styles.input} 
          autoCapitalize="none"  
          autoCorrect={false}
          placeholder='Pseudo'
          value={pseudo}
          onChangeText={v => this.handleChange('pseudo', v)}
        />

        <Picker
          selectedValue={gender}
          style={{ width: 100 }}
          onValueChange={v => this.handleChange('gender', v)}
          style={[styles.picker]}
          itemStyle={{height: 44}}
        >
          <Picker.Item label="Homme" value="Homme" />
          <Picker.Item label="Femme" value="Femme" />
        </Picker>

        <TextInput style = {styles.input}
          autoCapitalize="none"
          placeholder='Mot de passe' 
          secureTextEntry
          value={password}
          onChangeText={v => this.handleChange('password', v)}
        />

        <TextInput style = {styles.input}   
          autoCapitalize="none"
          returnKeyType="go" 
          placeholder='Confirmer mot de passe' 
          secureTextEntry
          value={confirmPassword}
          onChangeText={v => this.handleChange('confirmPassword', v)}
        />

        
        <TouchableOpacity
          onPress={this.submitForm}
          style={styles.button}
        >
          <View>
          <Text style={styles.buttonText}>S'ENREGISTRER</Text>
          </View>
        </TouchableOpacity>
      </View>
      </KeyboardAvoidingView>
    )
  }
}

export default RegisterForm;

const styles = StyleSheet.create({
  wrapper: {
    display: 'flex'
  },
  scrollViewWrapper: {
    marginTop: 10,
    padding: 0,
  },

  picker: {
    backgroundColor: '#fff',
    marginBottom: 10,
  },

  input: {
    height: 40,
    width: 240,
    backgroundColor: '#fff',
    marginBottom: 10,
    padding: 10,
    color: '#000'
  },
  error: {
    color: '#f00',
    fontSize: 14,
    marginBottom: 2
  },

  buttonContainer: {
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