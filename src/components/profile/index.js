import React from 'react';
import {View, Pressable} from 'react-native';
import styles from './styles';
import ProfileAvatar from '../../../assets/svg/profile.svg';

export const Profile = ({loginState, onPress}) => {
  return loginState ? (
    <Pressable style={styles.logged} onPress={onPress}>
      <View style={styles.online} />
      <ProfileAvatar />
    </Pressable>
  ) : (
    <View style={styles.unlogged}>
      <ProfileAvatar />
    </View>
  );
};
