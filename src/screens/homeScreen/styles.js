import {StyleSheet} from 'react-native';
import {colors, dimensions} from '../../utils';
export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    paddingTop: dimensions.height * 0.02,
  },
  paginationContainer: {
    position: 'absolute',
    bottom: dimensions.width * 0.28,
    alignSelf: 'center',
  },
  dotStyle: {
    width: 10,
    height: 10,
    borderRadius: 5,
    marginHorizontal: 1,
    backgroundColor: colors.darkGrey,
  },
});
