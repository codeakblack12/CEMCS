import * as React from 'react';
import {CardStyleInterpolators, createStackNavigator} from "@react-navigation/stack";
import {NavigationContainer, useNavigationContainerRef} from '@react-navigation/native';

import LoginHome from './auth/loginhome';
import Login from './auth/login';
import Biometric from './auth/biometric';

const Stack = createStackNavigator();

export default function AuthNavi({navigation}) {
  return (
    <NavigationContainer>
      <Stack.Navigator >
        <Stack.Screen
          name="LoginHome"
          component={LoginHome}
          options={{ title: '',headerShown: false }}
        />
        <Stack.Screen
          name="Login"
          component={Login}
          options={{ title: '',headerShown: false }}
        />
        <Stack.Screen
          name="Biometric"
          component={Biometric}
          options={{ title: '',headerShown: false }}
        />
      </Stack.Navigator >
    </NavigationContainer>
  );
};