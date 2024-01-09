import {StyleSheet} from 'react-native';
import {colors, dimensions} from '../../utils';
export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  paginationContainer: {
    position: 'absolute',
    bottom: dimensions.width * 0.28,
    alignSelf: 'center',
  },
});
