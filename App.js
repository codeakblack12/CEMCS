import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import * as SplashScreen from 'expo-splash-screen'
import {createAppContainer, createSwitchNavigator} from "react-navigation";
import AuthNavi from "./src/AuthNavi"

SplashScreen.preventAutoHideAsync();
setTimeout(SplashScreen.hideAsync, 3000)


export default function App() {
  return (
    <View style={styles.container}>
      <AppNavigator />
      <StatusBar style="auto" />
    </View>
  );
}


const AppSwitchNavigator = createSwitchNavigator({
  AuthNavi:AuthNavi
})

const AppNavigator = createAppContainer(AppSwitchNavigator)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
});
