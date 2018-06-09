import React, { Component } from 'react';
import { 
    Platform, 
    Text, 
    View, 
    StyleSheet, 
    TouchableOpacity, 
    TouchableHighlight, 
    Button 
} from 'react-native';
import { 
    Constants, 
    Location, 
    Permissions 
} from 'expo';

import MapView, { Marker } from 'react-native-maps';

const GEOLOCATION_OPTIONS = { 
  enableHighAccuracy: true, 
  timeout: 20000, 
  maximumAge: 1000
};

export default class MapContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      //SAMPLE MARKERS
      markers: [
        {
          title: 'hello ECV',
          coordinates: {
            latitude: 48.8852732,
            longitude: 2.3755954
          },
        },
        {
          title: 'hello',
          coordinates: {
            latitude: 48.8857688,
            longitude: 2.3759105
          },
        }
      ],
      location: { 
        coords: {
          latitude: 0, 
          longitude: 0
        }
      },
    };
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

  markerClick() {
    this.props.navigation.navigate('Info')
  }
      
  render() {
    return (
      <MapView
        style={{ flex: 1}}
        showsUserLocation={true}
        region={this.state.region}
      >
        
      {this.state.markers.map( (marker, key) => (
        <MapView.Marker
          coordinate={marker.coordinates}
          title={marker.title} onPress={() => this.markerClick()}
          key={key}
        />
      ))}
      </MapView>
    )
  }
}