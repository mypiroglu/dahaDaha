import React from 'react';
import {View, Image} from 'react-native';
import {Text} from '..';
import styles from './styles';

export const CategoryCard = ({url, title, selected}) => {
  return (
    <View
      style={
        selected ? [styles.container, {borderColor: 'red'}] : styles.container
      }>
      <Image source={{uri: url}} style={styles.image} />
      <Text style={styles.title}>{title}</Text>
    </View>
  );
};
