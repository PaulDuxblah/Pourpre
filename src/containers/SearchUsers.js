import React, { Component } from 'react';
import { 
  Text, 
  View, 
  TextInput, 
  Image, 
  TouchableOpacity,
  StyleSheet,
  ScrollView
} from 'react-native';

//COMPONENTS
import ApiUser from '../auth/ApiUser';
import BackgroundGeneral from '../components/background/BackgroundGeneral';

//STYLESHEET
import colors from '../styles/colors';


export default class UserSearch extends ApiUser {
  static navigationOptions = {
    tabBarLabel: 'RENCONTRE',
    title: 'RECONTRE',
    tabBarIcon: ({ tintColor }) => (
      <Image 
        resizeMode='contain' 
        source={require('../images/rencontre_btn.png')} 
        style={{width: 22, height: 22}}
      />
    ),
    headerStyle: { backgroundColor: colors.purpledark, borderBottomColor: colors.purpledark },
    headerTitleStyle: { color: colors.white },
  };

  constructor(props) {
    super(props);
    this.state = {
      user: props.screenProps.user
    }
  }

  componentDidMount() {
    this.fetchUsers().then((users) => {
      this.setUsers(users);
    });
  }

  setUsers = (users) => {
    this.setState({ users });
  }

  reloadUsers = (pseudo) => {
    this.fetchUsersByPseudo(pseudo).then((users) => {
      this.setUsers(users);
    });
  }

  search = () => {
    this.props.navigation.navigate('UserProfile');
  }

  render() {
    const users = this.state.users ? this.state.users : [];
    return (
      <BackgroundGeneral>
        <View>
          <View style={styles.searchbar}>
            <TextInput
              underlineColorAndroid='transparent'
              onChangeText={(text) => this.reloadUsers(text)}
              style={styles.input}
              placeholder='Rechercher'
            />
          </View>
          <ScrollView style={styles.resultBlockScroll}>
            <View style={styles.resultBlock}>
              {users.map((user, key) => {
                if (user.pseudo === this.state.user.pseudo) return;
                return (
                  <View style={styles.userBlock} key={key}>
                    <TouchableOpacity activeOpacity = { .5 } onPress= {() => this.search()}>
                      <Image source={this.getAvatar(user.avatar)} style= {styles.imgUserProfile}/>
                    </TouchableOpacity>
                    <Text style={styles.userTitle}>{ user.pseudo }</Text>
                  </View>
                );
              })}
            </View>
          </ScrollView>
        </View>
      </BackgroundGeneral>
    )
  }
}

const styles = StyleSheet.create({
  input: {
    height: 40,
    backgroundColor : "#FFFFFF"
  },
  searchbar:{
    backgroundColor: colors.lightgray01,
  },
  userBlock:{
    alignItems: 'center',
    padding: 15
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
    flexWrap: 'wrap',
    alignItems: 'center',
    marginLeft: 10,
    marginRight:10,
    marginBottom: 50
  }
})