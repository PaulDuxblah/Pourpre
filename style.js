

//COLOUR VARIABLE GLOBAL
const white = '#fff'
const lightgrey = '#C9C6CC'
const lightpurple = '#6D5B7C'
const purple = '#6D5B7C'
const purpledark = '#23143A'
const pink = '#B319AB'
const mainpurple = '#350D36'
const blue = '#355C7C'
const bluelight = '#169DC1'

export default {
    container: {
      flex: 1,
    },
    color: '#A2273C',
    row: {
      flexDirection: 'row',
      alignItems: 'center'
    },

    textGeneral: {
      color: '#fff',
      fontSize: 12,
    },
    block:{
      paddingHorizontal: 20,
      paddingVertical: 20,
      marginTop: 4
    },
    border: {
      borderColor: lightpurple,
      borderWidth: 1
    },
    input: {
      height: 60,
      borderColor: 'gray', 
      borderWidth: 1, 
      paddingHorizontal:10, 
      backgroundColor: lightgrey
    },
    //DASHBOARD STYLE
    dashBlock:{
      backgroundColor: 'rgba(109,91,124,0.2)',
      marginBottom: 12,
      paddingVertical: 10,
      borderWidth: 2,
      borderColor: pink
    },
    nameBlock:{
      paddingHorizontal: 17
    },
    activityBlock:{
      borderColor: pink,
      borderWidth: 2,
      paddingHorizontal: 3,
      paddingVertical: 18
    },
    reminderBlock:{
      paddingVertical: 10
    },
    titleName:{
      fontSize: 22,
      paddingVertical: 5,
      fontWeight: 'bold'
    },
    capacityText:{
      color: '#EF6EBA',
      fontSize: 9,
      fontWeight: 'bold'
    },
    percentageText:{
      color: '#EF6EBA',
      paddingHorizontal: 8,
      fontWeight: 'bold'
    },
    titleActivity:{
      fontSize: 16,
      fontWeight: 'bold'
    },
    location: {
      flexDirection: 'row',
      alignItems: 'flex-start'
    },
    dateReminder:{
      margin: 4
    },
    datetimeReminder:{
      textAlign: 'center',
      fontSize: 43,
      color: '#169DC1',
      fontWeight: 'bold',
      height: 48
    },
    dateReminderMonth:{
      textAlign: 'center',
      fontSize: 20,
      color: lightgrey
    },
    timeReminder:{
      fontWeight: 'bold',
      color: lightgrey
    },
    addressReminder:{
      color: lightgrey,
      width: 100,
      fontSize: 10,
      paddingHorizontal: 5
    },
    reminderOneBg:{
      backgroundColor: purple,
      margin: 1,
      borderColor: bluelight,
      borderTopWidth: 3
    },
   
    badgeBlock:{
      justifyContent: 'space-between',
      paddingVertical: 5,
      paddingHorizontal: 6
    },
    badgeSubBlock:{
      alignItems: 'center',
      justifyContent: 'center'
    },
    badgeNumber:{
      fontSize: 50,
      color: white
    },
    badgeTitle:{
      color: lightgrey,
      fontSize: 12
    },
    //SHARING COMPONENTS
    sharingBlock:{
      margin: 4,
      paddingVertical: 10,
      backgroundColor: purpledark
    },
    sharingSubBlock:{
      paddingHorizontal: 12
    },
    sharingSubText:{
      color: white,
      paddingHorizontal: 6
    },
    sharingBtn:{
      paddingHorizontal: 20
    },


    input: {
      height: 40, 
      borderColor: 'gray', 
      borderWidth: 1, 
      paddingHorizontal:10, 
      marginBottom: 20
    },


    //NOTIFICATION BLOCK
    notifBlock:{
      backgroundColor: blue,
      margin: 10,
      paddingHorizontal: 10,
      paddingVertical: 13,
      borderColor: bluelight,
      borderLeftWidth: 6,
    },
    notifDate:{
      fontSize: 53,
      color: bluelight,
      fontWeight: 'bold'
    },
    notifSub:{
      paddingHorizontal: 10,
    },
    notifMonth:{
      color: lightgrey,
      fontSize: 20
    },
    notifTitle:{
      color: white,
      fontSize: 24,
      fontWeight: 'bold'
    },

    //USERSEARCH BLOCK
    searchbar:{
      backgroundColor: lightgrey
    },
    userBlock:{
      alignItems: 'center',
      padding: 17
    },
    userTitle:{
      color: white,
      fontSize: 18,
      paddingVertical: 3
    },
    //USERPROFILE
    userProfBlock:{
      paddingVertical: 10,
      paddingHorizontal: 10,
      borderColor: pink,
      borderBottomWidth: 2
    },
    userBadgeDisplay:{
      paddingVertical: 25,
      paddingHorizontal: 13
    },
    profileSubDes:{
      paddingHorizontal:10
    },
    profileSubNam:{
      color: white,
      fontSize:27
    },
    //NAVIGATION STYLE
    header: {
      backgroundColor: mainpurple
    },
    headerTitle:{
      color: '#fff'
    }
}