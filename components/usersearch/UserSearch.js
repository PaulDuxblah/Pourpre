import React, { Component } from 'react'
import { Text, View, TextInput, Image, TouchableOpacity } from 'react-native'
import { StackNavigator } from 'react-navigation'

//COMPONENTS
import BackgroundGeneral from '../BackgroundGeneral'
import UserProfile from './UserProfile'
//STYLESHEET
import style from '../../style'



class UserSearch extends Component {
    constructor(props) {
        super(props);
        this.state = { text: 'Rechercher' };
    }


    setResult(users){
        this.setState({users})
    }

    search (){
        this.props.navigation.navigate('UserProfile')
    }
    
  render() {
    return (
        <BackgroundGeneral>
            <View style={style.searchbar}>
                <TextInput
                underlineColorAndroid='transparent'
                onChangeText={(text) => this.setResult(text)}
                style={style.input}
                value={this.state.text}
                />
            </View>
            <View style={style.row}>
                <View style={style.userBlock}>
                    <TouchableOpacity activeOpacity = { .5 } onPress= {() => this.search()}>
                    <Image source={require('../images/user_profile_icon.png')} style= {{width:90, height:90}}/>
                    </TouchableOpacity>
                    <Text style={style.userTitle}>Tom24</Text>
                </View>
                <View style={style.userBlock}>
                    <TouchableOpacity activeOpacity = { .5 } onPress= {() => this.search()}>
                    <Image source={require('../images/user_profile_icon.png')} style= {{width:90, height:90}}/>
                    </TouchableOpacity>
                    <Text style={style.userTitle}>Tom24</Text>
                </View>
                <View style={style.userBlock}>
                    <TouchableOpacity activeOpacity = { .5 } onPress= {() => this.search()}>
                    <Image source={require('../images/user_profile_icon.png')} style= {{width:90, height:90}}/>
                    </TouchableOpacity>
                    <Text style={style.userTitle}>Tom24</Text>
                </View>
               
            </View>
           
        </BackgroundGeneral>
    )
  }
}

export default  StackNavigator({
    UserSearch: { screen: UserSearch },
    UserProfile: { screen: UserProfile },
  })