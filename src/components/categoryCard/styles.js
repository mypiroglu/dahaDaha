import {StyleSheet} from 'react-native';
import {colors, dimensions} from '../../utils';

export default StyleSheet.create({
  container: {
    height: dimensions.width * 0.1,
    backgroundColor: colors.white,
    borderWidth: 2,
    borderColor: colors.grey,
    borderRadius: dimensions.borderRadius,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10,
    flexDirection: 'row',
    paddingHorizontal: dimensions.width * 0.02,
  },
  image: {
    width: dimensions.width * 0.07,
    height: dimensions.width * 0.07,
    borderRadius: dimensions.width * 0.07 * 0.2,
  },
  title: {
    marginLeft: dimensions.width * 0.015,
  },
});
