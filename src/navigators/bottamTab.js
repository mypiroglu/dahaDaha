import React from 'react';
import {View, StyleSheet, Pressable} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeStack from './homeStack';
import {colors} from '../utils';
import Discover from '../../assets/svg/discover.svg';
import Star from '../../assets/svg/star.svg';
import {useSelector} from 'react-redux';
import Portal from '../../assets/svg/portal.svg';

const Tab = createBottomTabNavigator();
const BottomTab = () => {
  const CustomTabBarButton = ({children, onPress}) => {
    return (
      <Pressable
        onPress={onPress}
        style={{
          top: -30,
          justifyContent: 'center',
          alignItems: 'center',
          ...styles.shadow,
          backgroundColor: 'red',
        }}>
        <View
          style={{
            width: 100,
            height: 100,
            borderRadius: 10,
            backgroundColor: colors.white,
          }}>
          {children}
        </View>
      </Pressable>
    );
  };
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: styles.tabBar,
        tabBarActiveTintColor: colors.black,
        tabBarInactiveTintColor: colors.grey,
        headerShown: false,
        unmountOnBlur: true,
      }}>
      <Tab.Screen
        name="Home"
        component={HomeStack}
        options={{
          tabBarIcon: ({color}) => <Discover fill={color} />,
        }}
      />
      <Tab.Screen
        name="Home2"
        component={HomeStack}
        options={{
          tabBarIcon: () => <Portal />,
          tabBarButton: props => <CustomTabBarButton {...props} />,
          tabBarShowLabel: false,
          tabBarBackgroundColor: 'transparent',
        }}
      />
      <Tab.Screen
        name="Favorites"
        component={HomeStack}
        options={{
          tabBarIcon: ({color}) => <Star fill={color} />,
        }}
      />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  tabBar: {
    backgroundColor: colors.white,
    borderColor: colors.grey,
    borderWidth: 2,
    height: 100,
    borderTopEndRadius: 20,
    borderTopStartRadius: 20,
    borderTopWidth: 2,
    position: 'absolute',
    bottom: 2,
    left: 2,
    right: 2,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});

export default BottomTab;
