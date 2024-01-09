import React from 'react';
import {View, StyleSheet, Pressable} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeStack from './homeStack';
import {colors} from '../utils';
import Portal from '../../assets/svg/portal.svg';
import Svg, {Path} from 'react-native-svg';

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
          backgroundColor: 'transparent',
        }}>
        <View
          style={{
            width: 90,
            height: 100,
            borderRadius: 30,
            backgroundColor: colors.grey,
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
        tabBarInactiveTintColor: colors.darkGrey,
        headerShown: false,
        unmountOnBlur: true,
        tabBarLabelStyle: {
          fontSize: 12,
          fontWeight: 'bold',
        },
      }}>
      <Tab.Screen
        name="KEŞFET"
        component={HomeStack}
        options={{
          tabBarIcon: ({focused}) => (
            <DiscoverIcon color={focused ? colors.black : colors.darkGrey} />
          ),
        }}
      />
      <Tab.Screen
        name="Home2"
        component={HomeStack}
        options={{
          tabBarIcon: () => <Portal />,
          tabBarButton: props => <CustomTabBarButton {...props} />,
          tabBarBackgroundColor: 'transparent',
          tabBarLabel: () => null,
        }}
      />
      <Tab.Screen
        name="DAHA CÜZDAN"
        component={HomeStack}
        options={{
          tabBarIcon: ({focused}) => (
            <StarIcon color={focused ? colors.black : colors.darkGrey} />
          ),
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

function DiscoverIcon({color, ...rest}) {
  return (
    <Svg
      width="26"
      height="26"
      viewBox="0 0 26 26"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <Path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M0.135437 13C0.135437 5.90446 5.90446 0.135437 13 0.135437C20.0956 0.135437 25.8646 5.90446 25.8646 13C25.8646 20.0956 20.0956 25.8646 13 25.8646C5.90446 25.8646 0.135437 20.0956 0.135437 13ZM16.5209 15.2745L19.6078 8.17892L19.608 8.17883C20.0957 7.04152 18.9584 5.90424 17.8211 6.39196L10.7256 9.47892C10.1839 9.72332 9.72262 10.156 9.4793 10.7252L6.41861 17.8473C5.90446 18.9581 7.06817 20.0954 8.17902 19.6077L15.2746 16.5207C15.8163 16.2763 16.2775 15.8437 16.5209 15.2745ZM13 14.7604C13.9723 14.7604 14.7604 13.9723 14.7604 13C14.7604 12.0278 13.9723 11.2396 13 11.2396C12.0278 11.2396 11.2396 12.0278 11.2396 13C11.2396 13.9723 12.0278 14.7604 13 14.7604Z"
        fill={color}
      />
    </Svg>
  );
}
function StarIcon({color, ...rest}) {
  return (
    <Svg
      width="24"
      height="22"
      viewBox="0 0 24 22"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <Path
        d="M0.490737 9.8105C-0.477091 9.00086 0.0829086 7.45536 1.33125 7.38255L7.49323 6.96576C7.84932 6.94085 8.18055 6.72048 8.33374 6.37747L10.6762 0.858505C10.9308 0.294148 11.466 0 12.0001 0C12.5353 0 13.0694 0.294148 13.324 0.858505L15.6665 6.37747C15.7938 6.69654 16.1251 6.9169 16.507 6.96576L22.669 7.38255C23.9163 7.45633 24.4773 9.00184 23.5095 9.8105L18.6714 13.6125C18.3909 13.8328 18.2636 14.2008 18.3402 14.5687L19.7914 20.3079C19.9953 21.2402 19.2821 22 18.4416 22C18.187 22 17.9323 21.9262 17.7036 21.7796L12.4328 18.6647C12.1274 18.4683 11.7196 18.4683 11.4143 18.6647L6.19417 21.7796C5.96539 21.9272 5.68489 22 5.43026 22C4.58975 22 3.82583 21.2392 4.08047 20.3079L5.5317 14.5687C5.60829 14.2257 5.50584 13.8577 5.20047 13.6364L0.490737 9.8105Z"
        fill={color}
      />
    </Svg>
  );
}
