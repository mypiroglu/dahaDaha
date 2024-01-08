import {StyleSheet} from 'react-native';
import {colors, dimensions} from '../../utils';

export default StyleSheet.create({
  button: {
    backgroundColor: colors.red,
    padding: dimensions.padding,
    borderRadius: dimensions.borderRadius * 4,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: colors.white,
    textAlign: 'center',
    fontWeight: 'bold',
  },
});
