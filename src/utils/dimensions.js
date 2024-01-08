import {Dimensions, PixelRatio} from 'react-native';

const {width, height} = Dimensions.get('window');

const baseFontScale = 1.5;
const pixelRatio = PixelRatio.get();
const pixelRatioFontScale =
  PixelRatio.getFontScale() < baseFontScale
    ? PixelRatio.getFontScale()
    : baseFontScale;
const dimensions = {
  width,
  height,
  spacing: pixelRatio * width * 0.013,
  textFontSize: pixelRatioFontScale * width * 0.04,
  titleFontSize: pixelRatioFontScale * width * 0.05,
  fontWeight: '600',
  borderRadius: 10,
  padding: width * 0.03,
  margin: width * 0.03,
};

export {dimensions, pixelRatioFontScale, pixelRatio};
