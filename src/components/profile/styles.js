import {StyleSheet} from 'react-native';
import {colors, dimensions} from '../../utils';

export default StyleSheet.create({
  unlogged: {
    backgroundColor: colors.black,
    width: dimensions.width * 0.1,
    height: dimensions.width * 0.1,
    borderRadius: dimensions.width * 0.05,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: dimensions.padding,
  },
  logged: {
    backgroundColor: colors.red,
    width: dimensions.width * 0.1,
    height: dimensions.width * 0.1,
    borderRadius: dimensions.width * 0.05,
    justifyContent: 'center',
    alignItems: 'center',
  },
  online: {
    backgroundColor: colors.green,
    width: dimensions.width * 0.024,
    height: dimensions.width * 0.024,
    borderRadius: dimensions.width * 0.012,
    position: 'absolute',
    top: 0,
    right: 0,
    borderWidth: 1,
    borderColor: colors.white,
  },
});
