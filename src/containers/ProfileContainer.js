import React, { Component } from 'react';
import { 
  Text, 
  View, 
  Image, 
  TouchableOpacity,
  StyleSheet,
} from 'react-native';


// STYLESHEET
import colors from '../styles/colors';
import IconMaterial from 'react-native-vector-icons/MaterialIcons';
import BackgroundGeneral from '../components/background/BackgroundGeneral';

import ApiUser from '../auth/ApiUser';

export default class UserProfile extends ApiUser {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <BackgroundGeneral>
        <View style={styles.profileWrapper}>
          <View style={styles.userProfBlock}>
            <Image source={require('../images/avatar_default.png')} style={styles.imageProfil} />
            <View style={styles.profileSubDes}>
              <Text style={styles.profileSubNam}>{'mikeal'.toUpperCase()}</Text>
              <TouchableOpacity>
                <View style={styles.buttonAccompagne}>
                  <IconMaterial
                    name='people-outline'
                    size={15}
                    color={colors.white}
                  />
                  <Text style={styles.buttonText}>DEMANDE ACCOMPAGNEMENT</Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>

          <View style={styles.badgeBlock}>
            <View style={styles.badgeSubBlock}>
              <Image resizeMode="contain" source={require('../images/badge_blood_lg.png')} style={styles.image}/>
              <Text style={styles.badgeTitle}>Don de sang</Text> 
            </View>
            <View style={styles.badgeSubBlock}>
              <Image resizeMode="contain" source={require('../images/badge_rencontre_lg.png')} style={styles.image}/>
              <Text style={styles.badgeTitle}>Accompagnement</Text> 
            </View>
            <View style={styles.badgeSubBlock}>
              <Image resizeMode="contain" source={require('../images/badge_jeu_lg.png')} style={styles.image}/>
              <Text style={styles.badgeTitle}>Parrainage</Text> 
            </View>
          </View>
        </View>
      </BackgroundGeneral>
    )
  }
}

const styles = StyleSheet.create({
  profileWrapper: {
    paddingTop: 30,
  },
  badgeBlock: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginLeft: 20,
    marginRight: 20,
    marginTop: 20,
  },
  badgeSubBlock: {
    alignItems: 'center'
  },
  userProfBlock:{
    paddingVertical: 20,
    paddingHorizontal: 20,
    borderColor: colors.pink,
      borderBottomWidth: 2,
      flexDirection: 'row'
  },
  userBadgeDisplay:{
    paddingVertical: 25,
    paddingHorizontal: 13
  },
  profileSubDes:{
    paddingHorizontal: 20
  },
  profileSubNam:{
    color: colors.white,
    fontSize: 27,
    paddingTop: 10,
  },
  image: {
    width: 70,
    height: 80
  },
  badgeTitle: {
    fontSize: 13,
    color: colors.white
  },
  buttonAccompagne: {
    display: 'flex',
    flexDirection: 'row',
    backgroundColor: colors.lightpurple,
    paddingHorizontal: 10,
    paddingVertical: 5,
    marginTop: 10
  },
  buttonText: {
    color: colors.white,
    paddingLeft: 9,
    fontSize: 13
  },
  imageProfil: {
    width: 70,
    height: 70,
    position: 'relative',
    top: 15
  }
});