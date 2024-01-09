import {StyleSheet} from 'react-native';
import {colors, dimensions} from '../../utils';

export default StyleSheet.create({
  container: {
    width: dimensions.width * 0.8,
    height: dimensions.height * 0.55,
    backgroundColor: colors.white,
    borderRadius: 16,
    borderColor: colors.grey,
    borderWidth: 1.5,
    padding: 5,
  },
  image: {
    width: dimensions.width * 0.8 - 10,
    height: dimensions.height * 0.4,
    borderRadius: 16,
    borderBottomLeftRadius: 100,
  },
  title: {
    position: 'absolute',
    bottom: 0,
    color: colors.black,
    fontSize: dimensions.textFontSize,
    fontWeight: '700',
    lineHeight: 20,
    letterSpacing: -0.22,
    textAlign: 'center',
  },
  overlay: {
    position: 'absolute',
    top: dimensions.height * 0.31,
    width: dimensions.width * 0.2,
    height: dimensions.width * 0.2,
    borderRadius: dimensions.height * 0.1,
    backgroundColor: colors.white,
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon: {
    width: dimensions.width * 0.18,
    height: dimensions.width * 0.18,
    borderRadius: dimensions.width * 0.09,
    alignSelf: 'center',
  },
});
