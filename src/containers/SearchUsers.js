import React, { Component } from 'react';
import { 
    Text, 
    View, 
    TextInput, 
    Image, 
    TouchableOpacity,
    StyleSheet 
} from 'react-native';

//COMPONENTS
import BackgroundGeneral from '../components/background/BackgroundGeneral';

//STYLESHEET
import colors from '../styles/colors';


export default class UserSearch extends Component {
    static navigationOptions = {
		tabBarLabel: 'RENCONTRE',
		tabBarIcon: ({ tintColor }) => (
			<Image 
			resizeMode='contain' 
			source={require('../images/rencontre_btn.png')} 
			style={{width: 22, height: 22}}/>
		),
		headerStyle: { backgroundColor: colors.purpledark, borderBottomColor: colors.purpledark },
		headerTitleStyle: { color: colors.white },
	};

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
            <View style={styles.wrapper}>
                <View style={styles.searchbar}>
                    <TextInput
                    underlineColorAndroid='transparent'
                    onChangeText={(text) => this.setResult(text)}
                    style={styles.input}
                    value={this.state.text}
                    />
                </View>
                <View style={styles.resultBlock}>
                    <View style={styles.userBlock}>
                        <TouchableOpacity activeOpacity = { .5 } onPress= {() => this.search()}>
                        <Image source={require('../images/user_profile_icon.png')} style= {styles.imgUserProfile}/>
                        </TouchableOpacity>
                        <Text style={styles.userTitle}>Tom24</Text>
                    </View>
                </View>
            </View>
            
           
        </BackgroundGeneral>
    )
  }
}

const styles = StyleSheet.create({
    wrapper: {
        marginTop: 30
    },
    input: {
        height: 50
    },
	searchbar:{
		backgroundColor: colors.lightgray01,
	},
	userBlock:{
		alignItems: 'center',
		padding: 17
	},
	userTitle:{
		color: colors.white,
        fontSize: 12,
		paddingVertical: 3
    },
    imgUserProfile: {
        width: 80,
        height: 80
    },
    resultBlock: {
        display: 'flex',
        flexDirection: 'row',
        marginLeft: 10,
        marginRight:10
    }
})