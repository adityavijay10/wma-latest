import React from 'react';
import { createStackNavigator } from 'react-navigation-stack';

import TrackingRequest from '../screens/TrackingRequest';
import RequesterDetails  from '../screens/RequesterDetails';




export const AppStackNavigator = createStackNavigator({
  TrackingRequest : {
    screen : TrackingRequest,
    navigationOptions:{
      headerShown : false
    }
  },
  RequesterDetails : {
    screen : RecieverDetails,
    navigationOptions:{
      headerShown : false
    }
  }
},
  {
    initialRouteName: 'TrackingRequest'
  }
);