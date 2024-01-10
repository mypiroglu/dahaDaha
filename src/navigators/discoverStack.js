import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {DiscoverScreen} from '../screens';
import {CardStyleInterpolators} from '@react-navigation/stack';
import {colors} from '../utils';

const Stack = createNativeStackNavigator();

const DiscoverStack = () => {
  return (
    <SafeAreaView style={style.root}>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
          cardStyleInterpolator:
            CardStyleInterpolators.forFadeFromBottomAndroid,
        }}>
        <Stack.Screen name="discover-screen" component={DiscoverScreen} />
      </Stack.Navigator>
    </SafeAreaView>
  );
};

const style = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: colors.white,
  },
});
export default DiscoverStack;
