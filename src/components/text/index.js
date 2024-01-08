import React from 'react';
import {Text as RnText} from 'react-native';
import styles from './styles';

export const Text = ({children, ...rest}) => (
  <RnText style={styles.buttonText} allowFontScaling={false} {...rest}>
    {children}
  </RnText>
);
