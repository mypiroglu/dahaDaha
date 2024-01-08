import {StyleSheet} from 'react-native';
import {colors, dimensions} from '../../utils';

export default StyleSheet.create({
  container: {
    width: dimensions.width,
    height: dimensions.width * 0.1,
    backgroundColor: colors.white,
    flexDirection: 'row',
    paddingHorizontal: dimensions.padding,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  title: {
    marginLeft: dimensions.width * 0.015,
  },
  profileContainer: {
    flexDirection: 'row',
  },
});
