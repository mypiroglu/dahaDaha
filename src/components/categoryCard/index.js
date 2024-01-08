import React from 'react';
import {Image, Pressable} from 'react-native';
import {Text} from '..';
import styles from './styles';

export const CategoryCard = ({url, title, selected, onPress}) => {
  return (
    <Pressable
      onPress={onPress}
      style={
        selected ? [styles.container, {borderColor: 'red'}] : styles.container
      }>
      <Image source={{uri: url}} style={styles.image} />
      <Text style={styles.title}>{title}</Text>
    </Pressable>
  );
};
