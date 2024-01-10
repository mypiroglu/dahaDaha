import {StyleSheet} from 'react-native';
import {colors, dimensions} from '../../utils';

export default StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: colors.white,
  },
  indicatorContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: dimensions.width,
    height: dimensions.height * 0.4,
    borderBottomLeftRadius: 130,
  },

  overlay: {
    position: 'absolute',
    top: dimensions.height * 0.33,
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
  backButton: {
    position: 'absolute',
    top: dimensions.height * 0.05,
    left: dimensions.width * 0.05,
    width: dimensions.width * 0.1,
    height: dimensions.width * 0.1,
    borderRadius: dimensions.width * 0.05,
    backgroundColor: colors.black,
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 999,
    opacity: 0.9,
  },
  button: {
    position: 'absolute',
    width: dimensions.width * 0.8,
    height: dimensions.width * 0.15,
    top: dimensions.height * 0.88,
    alignSelf: 'center',
  },
  scrollContainer: {
    flex: 1,
    backgroundColor: colors.white,
  },
  scrollViewContent: {
    paddingBottom: dimensions.height * 0.1,
  },
  remainingText: {
    color: colors.white,
    zIndex: 999,
  },
  remainingContainer: {
    position: 'absolute',
    top: dimensions.height * 0.34,
    right: dimensions.width * 0.03,
    width: dimensions.width * 0.3,
    height: dimensions.height * 0.05,
    borderRadius: dimensions.height * 0.025,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.black,
    zIndex: 100,
  },
  headerHtmlp: {
    color: colors.black,
    fontSize: 18,
    lineHeight: 20,
    marginTop: 30,
    fontWeight: 'bold',
    marginHorizontal: 10,
  },
  headerHtmlSpan: {
    color: colors.black,
    fontWeight: '700',
    letterSpacing: -0.22,
    marginHorizontal: 10,
  },
  baseFontStyle: {
    marginHorizontal: 10,
    color: colors.black,
    fontSize: 18,
    fontWeight: '700',
    lineHeight: 20,
    letterSpacing: -0.22,
    textAlign: 'center',
  },
});
