import React, { Component } from 'react';
import { 
    Text, 
    View,
    StyleSheet, 
    ScrollView,
    Dimensions,
    TouchableOpacity 
} from 'react-native';

//GENERAL COMPONENTS
import BackgroundGeneral from '../components/background/BackgroundGeneral';
import NavBarButton from '../components/buttons/NavBarButton';

//STYLESHEET
import colors from '../styles/colors';
import IconAwesome from 'react-native-vector-icons/FontAwesome';
import IconEvil from 'react-native-vector-icons/EvilIcons';
import Icon from 'react-native-vector-icons/FontAwesome';

//SCREEN DIMENSION
const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;

export default class CenterCardContainer extends Component {
    static navigationOptions = ({ navigation }) => ({
        headerLeft: <NavBarButton
        handleButtonPress={() => navigation.goBack()}
        location="left"
        icon={<Icon name="angle-left" color={colors.white} size={30} />}
        />,
    tabBarLabel: 'MAP',
        title: 'FICHE CONTACT',
        headerStyle: { backgroundColor: colors.purpledark, borderBottomColor: colors.purpledark },
    headerTitleStyle: { color: colors.white },
  });


  render() {
    const { params } = this.props.navigation.state;

    return (
      <BackgroundGeneral>
        <View style={styles.wrapperHeader}>
          <View style={styles.containerWrapper}>
            <ScrollView showsVerticalScrollIndicator={false}>
              <View style={styles.Wrapper}>
                <View style={styles.titleBlock}>
                  <Text style={styles.titleHeader}>EFS Ile de France à {params.list.address.city} {params.list.address.zipcode}</Text>
                </View>
                
                <View style={styles.descriptionBlock}>
                  <Text style={styles.subHeader}>DESCRIPTION</Text>
                  <Text style={styles.titleSubSection}>Types de dons possible:</Text>
                    {params.list.types.rdv.map((type, i) => {
                      return(
                        <View key={i} style={styles.Row}>
                          <IconAwesome
                            name="dot-circle-o"
                            size={15}
                            color={colors.white}
                            style={styles.icon}
                          />
                          <Text style={[styles.desText, styles.bloodType]} key={i.id}>{type}</Text>
                        </View>
                      )
                    })}
                </View>

                <View style={styles.descriptionBlock}>
                  <Text style={styles.subHeader}>HORAIRES</Text>
                  <Text style={styles.titleSubSection}>Ouvertures:</Text>
                    {params.list.openingTime.map((openTime, i) => {
                      return(
                        <View>
                          <Text style={styles.desText} key={i.id}>{openTime}</Text>
                        </View>
                      )
                    })}
                </View>

                <View style={styles.descriptionBlock}>
                  <Text style={styles.subHeader}>ACCÈS</Text>
                  <Text style={styles.desText}>Metro:</Text>

                  <View>
                    {params.list.contact.metroLine.map((metro, i) => {
                      return(
                        <View>
                          <Text style={styles.desText} key={i.id}>{metro}</Text>
                        </View>
                      )
                    })}
                  </View>

                  <View style={styles.Row}>
                    <Text style={styles.desText}>Bus: </Text>
                    {params.list.contact.bus.map((bus, i) => {
                      return(
                        <View>
                          <Text style={styles.desText} key={i.id}>{bus}, </Text>
                        </View>
                      )
                    })}
                  </View>
                </View>

                <View style={styles.descriptionBlock}>
                  <Text style={styles.subHeader}>ADDRESSE</Text>
                  <Text style={styles.desText}>{params.list.address.center}</Text>
                  <Text style={styles.desText}>Phone: {params.list.contact.tel}</Text>
                  <Text style={[styles.wrap, styles.desText]}>{params.list.address.street}</Text>
                  <Text style={styles.desText}>{params.list.address.subcity}</Text>
                </View>
              </View>
            </ScrollView>  
          </View>

          <TouchableOpacity style={styles.programmerBtn}>
            <View style={[styles.programmerBtnRow, styles.Row]}>
              <IconEvil
                name="plus"
                size={23}
                color={colors.white}
              />
              <Text style={styles.programmerBtnText}>Ajouter un rendez vous</Text>
            </View>
          </TouchableOpacity>
        </View>
      </BackgroundGeneral>
    )
  }
}

const styles = StyleSheet.create({
  wrapperHeader: {
    flex: 1,
  },
  containerWrapper: {
    flex: 1,
    marginTop: 10,
    marginLeft: 10,
    marginRight: 10,
    marginBottom: 10,
    borderColor: colors.pink,
    borderWidth: 2,
  },
  Wrapper: {
    paddingRight: 20,
    paddingLeft: 20
  },
  titleHeader:{
    marginTop: 10,
    fontSize: 20,
    paddingBottom: 4,
    fontWeight: '700',
    color: colors.lightpink,
  },
  titleBlock: {
    borderBottomColor: colors.lightpurple,
    borderBottomWidth: 2,
  },
  subHeader: {
    color: colors.white,
    fontSize: 18,
    fontWeight: '500',
    paddingBottom: 3
  },
  descriptionBlock: {
    paddingTop: 10,
    marginLeft: 5,
    marginBottom: 10
  },
  desText:{
    fontSize: 16,
    fontWeight: '300',
    color: colors.white,
  },
  wrap: {
    flex: 1, 
    flexWrap: "wrap"
  },
  bloodType:{
    paddingLeft: 9
  },
  Row: {
    display: 'flex',
    flexDirection: 'row'
  },
  timeBlock:{
    display: 'flex',
    flexDirection: 'row'
  },
  icon: {
    position: 'relative',
    top: 3
  },
  titleSubSection:{
    color: colors.white,
    fontSize: 15,
    fontWeight: '600',
    paddingBottom: 5
  },
  programmerBtn:{
    display: 'flex',
    alignItems: 'flex-end'
  },
  programmerBtnRow: {
    paddingRight: 10,
    paddingBottom: 10,
  },
  programmerBtnText: {
    color: colors.white,
    fontSize: 15,
    fontWeight: '600'
  }
});