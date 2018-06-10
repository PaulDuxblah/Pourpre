import React, { Component } from 'react';
import { 
    Platform, 
    Text, 
    View, 
	StyleSheet, 
	Dimensions,
	Image,
	TouchableOpacity
} from 'react-native';
import { 
    Constants, 
    Location, 
    Permissions 
} from 'expo';
import MapView, { Marker, ProviderPropType } from 'react-native-maps';

//STYLESHEET
import colors from '../styles/colors';
import Icon from 'react-native-vector-icons/Ionicons';

//DATA
import { bloodCenters } from '../data/bloodCenters';

const GEOLOCATION_OPTIONS = { 
  enableHighAccuracy: true, 
  timeout: 20000, 
  maximumAge: 1000
};

//SCREEN DIMENSIONS
const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;

export default class MapContainer extends Component {
	static navigationOptions = {
		tabBarLabel: 'MAP',
		title: 'CARTE',
		tabBarIcon: ({ tintColor }) => (
			<Image 
			resizeMode='contain' 
			source={require('../images/agenda_btn.png')} 
			style={{width: 20, height: 20}}/>
		),
		headerStyle: { backgroundColor: colors.purpledark },
		headerTitleStyle: { color: colors.white },
	};

	constructor(props) {
		super(props);
		this.state = {
		location: { 
			coords: {
			latitude: 0, 
			longitude: 0
			}
		},
		region: {},
		list:{}
	}
	
  }
     
  componentWillMount() {
    Location.watchPositionAsync(GEOLOCATION_OPTIONS, this.locationChanged);
  }
  
  locationChanged = (location) => {
    region = {
      latitude: location.coords.latitude,
      longitude: location.coords.longitude,
      latitudeDelta: 0.1,
      longitudeDelta: 0.05
    };
    this.setState({
      location: location, 
      region: region
    })
  }

  markerClick= (list) => {
	const { navigate } = this.props.navigation;
		this.setState({
			list,
    	});
  	navigate('BloodCenter', {list:list} )
  }
      
  render() {
    const { marker } = this.props
    return (
      	<View style ={styles.container}>
			<MapView style={styles.map}
			showsUserLocation={true}
			showsMyLocationButton={true}
			enableZoomControl={true}
            >
                    {bloodCenters.map((marker, index) => (
						<MapView.Marker
						coordinate={marker.coordinates}
						key={index}
						>
                            <Image source={require('../images/placeholder.png')}/>
                                <MapView.Callout tooltip style={styles.customView}>
									<TouchableOpacity underlayColor='#dddddd'
									onPress={() => this.markerClick(marker)}
									>
										<Text
										numberOfLines={3}
										style={styles.textListing}
										>{marker.address.center}</Text>
                                   		<Text style={styles.viewList}>Consulter</Text>
                                	</TouchableOpacity>
                                </MapView.Callout>                              
						</MapView.Marker>
                    ))}
            </MapView> 
      	</View>
    )
  }
}

const styles = StyleSheet.create({
	container: {
	  ...StyleSheet.absoluteFillObject,
	  width: screenWidth,
	  justifyContent: 'flex-end',
	  alignItems: 'center',
	},
	map: {
	  ...StyleSheet.absoluteFillObject,
	},
	textListing:{
	  color: colors.white,
	  fontWeight: '600',
	  textAlign: 'center',
	  paddingBottom: 6
	},
	viewList:{
	  fontWeight: '300',
	  color: colors.white,
	  textAlign: 'center'
	},
	customView:{
	  backgroundColor: colors.purple,
	  padding: 5,
	  borderRadius: 3,
	  width: 110,
	  alignItems: 'center'
	}
  });
  
  