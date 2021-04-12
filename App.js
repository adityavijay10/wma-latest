import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {createSwitchNavigator, createAppContainer} from 'react-navigation';
import WelcomeScreen from "./screens/WelcomeScreen";
import TrackingRequest from './screens/TrackingRequest'
import { AppDrawerNavigator } from './components/AppDrawerNavigator'

export default class App extends React.Component{
  render(){
   return(
<View>
  <AppContainer/>
</View>
   ) 
  }
}
var AppNavigator = createSwitchNavigator({
  WelcomeScreen:{screen: WelcomeScreen},
  TrackingRequest :{screen : TrackingRequest},
  Drawer:{screen: AppDrawerNavigator},
    
})

const AppContainer = createAppContainer(AppNavigator)
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
