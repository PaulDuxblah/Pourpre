import React, { Component } from 'react'
import { Text, View, TouchableOpacity, StyleSheet, StatusBar, Alert, Button, TextInput } from 'react-native'

class LoginForm extends Component {
  render() {
    return (
      <View style={styles.container}>
        <TextInput style = {styles.input} 
               autoCapitalize="none"  
               autoCorrect={false}
               placeholder='Psuedo'/>

        <TextInput style = {styles.input}   
              returnKeyType="go" 
              placeholder='Password' 
              secureTextEntry/>
        <Button style= {styles.buttonTex} title="SE CONNECTER" />
        {/* <TouchableOpacity style={styles.buttonContainer}>
                <Text style={styles.buttonText}>SE CONNECTER</Text>
        
        </TouchableOpacity> */}
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