import React, { Component } from 'react'
import { Platform, Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import { Constants, Location, Permissions } from 'expo'
import MapView, { Marker } from 'react-native-maps'

const GEOLOCATION_OPTIONS = { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 };

export default class Geolocalisation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      markers: [{
        title: 'hello',
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
      }],
        location: { coords: {latitude: 0, longitude: 0}},
      };
  }
   
    
      componentWillMount() {
        Location.watchPositionAsync(GEOLOCATION_OPTIONS, this.locationChanged);
      }
    
      locationChanged = (location) => {
        region = 
        {
          latitude: location.coords.latitude,
          longitude: location.coords.longitude,
          latitudeDelta: 0.1,
          longitudeDelta: 0.05,
        }

          this.setState({
            location, 
            region
          })

      }
      
  render() {
    return (
        <MapView
          style={{ flex: 1}}
          showsUserLocation={true}
          region={this.state.region}
        >
      {this.state.markers.map(marker => (
        <MapView.Marker 
          coordinate={marker.coordinates}
          title={marker.title}
        />
      ))}
        </MapView>
    )
  }
}
const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
  bubble: {
    backgroundColor: 'rgba(255,255,255,0.7)',
    paddingHorizontal: 18,
    paddingVertical: 12,
    borderRadius: 20,
  },
  latlng: {
    width: 200,
    alignItems: 'stretch',
  },
  button: {
    width: 80,
    paddingHorizontal: 12,
    alignItems: 'center',
    marginHorizontal: 10,
  },
  buttonContainer: {
    flexDirection: 'row',
    marginVertical: 20,
    backgroundColor: 'transparent',
  },
});