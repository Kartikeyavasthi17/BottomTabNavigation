import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {createAppContainer} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs'
import InstagramScreen from './screen/InstagramScreen';
import FaceBookScreen from './screen/FaceBookScreen';

export default class App extends React.Component{
  render(){
  return (
   <AppContainer />
  );
 }
}

const TabNavigator=createBottomTabNavigator({
  FaceBook:{screen:FaceBookScreen},
  Instagram:{screen:InstagramScreen}
})


const AppContainer=createAppContainer(TabNavigator);