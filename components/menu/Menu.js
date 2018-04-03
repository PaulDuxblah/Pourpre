import React, { Component } from 'react'
import BottomNavigation, { Tab } from 'react-native-material-bottom-navigation'
import Icon from 'react-native-vector-icons/MaterialIcons'

class Menu extends Component {
  render() {
    const labelColor = '#000000';
    const backgroundColor = '#000000';
    const rippleColor = '#000000';
    const iconColor = '#FFFFFF';

    return (
      <BottomNavigation
        labelColor={labelColor}
        rippleColor={rippleColor}
        style={{
          height: 56,
          elevation: 8,
          position: 'absolute',
          left: 0,
          bottom: 0,
          right: 0
        }}
      >
        <Tab
          barBackgroundColor={iconColor}
          label="Movies & TV"
          icon={<Icon size={24} color={backgroundColor} name="tv" />}
        />
        <Tab
          barBackgroundColor={iconColor}
          label="Music"
          icon={<Icon size={24} color={backgroundColor} name="music-note" />}
        />
        <Tab
          barBackgroundColor={iconColor}
          label="Books"
          icon={<Icon size={24} color={backgroundColor} name="book" />}
        />
        <Tab
          barBackgroundColor={iconColor}
          label="Newsstand"
          icon={<Icon size={24} color={backgroundColor} name="navigation" />}
        />
      </BottomNavigation>
    )
  }
}

module.exports = Menu;