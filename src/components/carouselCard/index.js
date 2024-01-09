import React from 'react';
import {View, Image, useWindowDimensions} from 'react-native';
import styles from './styles';
import {Text} from '..';
import HTML from 'react-native-render-html';

export const CarouselCard = ({title, url, icon}) => {
  const {width} = useWindowDimensions();

  const htmlStyles = {
    p: {color: '#000', fontSize: 18, lineHeight: 20, textAlign: 'center'},
    span: {color: '#000', fontWeight: '700', letterSpacing: -0.22},
  };

  const baseFontStyle = {
    color: '#000',
    fontSize: 18,
    fontWeight: '700',
    lineHeight: 20,
    letterSpacing: -0.22,
    textAlign: 'center',
  };

  const htmlContent = `<p>${title}</p>`;

  return (
    <View style={styles.container}>
      <Image source={{uri: url}} style={styles.image} />
      <View style={styles.overlay}>
        <Image source={{uri: icon}} style={styles.icon} />
      </View>
      <HTML
        allowedStyles={['p', 'span']}
        tagsStyles={htmlStyles}
        baseFontStyle={baseFontStyle}
        contentWidth={width}
        source={{html: htmlContent}}
      />
    </View>
  );
};
