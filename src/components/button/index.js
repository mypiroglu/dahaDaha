import React from 'react';
import {TouchableOpacity} from 'react-native';
import {Text} from '..';
import styles from './styles';
import {colors} from '../../utils';
export const Button = ({
  title,
  onPress,
  style,
  disabled = false,
  textStyle,
}) => {
  return (
    <TouchableOpacity
      style={
        disabled
          ? [{backgroundColor: colors.grey}, styles.button, style]
          : [styles.button, style]
      }
      onPress={onPress}
      disabled={disabled}>
      <Text style={[styles.text, textStyle]}>{title}</Text>
    </TouchableOpacity>
  );
};
