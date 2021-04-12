
import React from 'react';
import { Image } from 'react-native';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import UserRequestScreen from '../screens/UserRequestScreen'
import TrackingRequest from '../screens/TrackingRequest';


export const AppTabNavigator = createBottomTabNavigator({
    UserRequestScreen : {
    screen: UserRequestScreen,
    
  },
  TrackingRequest: {
    screen: TrackingRequest,
   
  }
});