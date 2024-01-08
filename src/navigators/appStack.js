import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {HomeScreen} from '../screens';
import {useDispatch} from 'react-redux';

const AppStack = () => {
  const dispatch = useDispatch();
  const Stack = createStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName={'home-screen'}
        screenOptions={{
          gestureEnabled: false,
          headerShown: false,
          contentStyle: {backgroundColor: 'white'},
        }}>
        <Stack.Screen name="home-screen" component={HomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppStack;
