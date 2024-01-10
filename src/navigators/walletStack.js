import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {WalletScreen} from '../screens';
import {CardStyleInterpolators} from '@react-navigation/stack';
import {colors} from '../utils';

const Stack = createNativeStackNavigator();

const WalletStack = () => {
  return (
    <SafeAreaView style={style.root}>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
          cardStyleInterpolator:
            CardStyleInterpolators.forFadeFromBottomAndroid,
        }}>
        <Stack.Screen name="wallet-screen" component={WalletScreen} />
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
export default WalletStack;
