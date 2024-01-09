import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import BottomTab from './bottamTab';
import {DetailScreen} from '../screens';

const AppStack = () => {
  const Stack = createStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName={'bottom-tab'}
        screenOptions={{
          gestureEnabled: false,
          headerShown: false,
        }}>
        <Stack.Screen name="bottom-tab" component={BottomTab} />
        <Stack.Screen name="detail-screen" component={DetailScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppStack;
