import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import {createBottomTabNavigator,} from 'react-navigation-tabs';
import WriteStory from './Screens/WriteStory';
import ReadStory from './Screens/ReadStory';
import {Header} from 'react-native-elements';
import {SafeAreaProvider, SafeAreaView} from 'react-native-safe-area-context';
import {AppTabNavigator} from './components/AppTabNavigator';
import WelcomeScreen from './Screens/WelcomeScreen'

export default class App extends React.Component{
  render(){
  return (
<SafeAreaProvider>



<AppContainer/>


</SafeAreaProvider>
)
}
}
const SwitchNavigator = createSwitchNavigator({
Welcome: {screen: WelcomeScreen},
bottomTab: {screen: AppTabNavigator},
})
const AppContainer = createAppContainer(SwitchNavigator)