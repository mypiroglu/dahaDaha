import React, {useState, useEffect} from 'react';
import {View, Image, useWindowDimensions, Pressable} from 'react-native';
import styles from './styles';
import HTML from 'react-native-render-html';
import {Text} from '..';
import moment from 'moment';

export const CarouselCard = ({
  title,
  url,
  icon,
  promotionCardColor,
  onPress,
  remainingText,
}) => {
  const {width} = useWindowDimensions();
  const [remainingDays, setRemainingDays] = useState(null);
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
  useEffect(() => {
    const targetMoment = moment(remainingText, 'DD.MM.YYYY');
    const today = moment();
    const daysRemaining = targetMoment.diff(today, 'days');
    setRemainingDays(daysRemaining);
  }, [remainingText]);

  return (
    <Pressable onPress={onPress}>
      <View style={styles.container}>
        <Image source={{uri: url}} style={styles.image} />
        <View style={styles.overlay}>
          <Image source={{uri: icon}} style={styles.icon} />
        </View>
        <View style={styles.remainingContainer}>
          <Text style={styles.remainingText}>
            {remainingDays > 0 ? `son ${remainingDays} gün` : 'Son gün'}
          </Text>
        </View>
        <HTML
          allowedStyles={['p', 'span']}
          tagsStyles={htmlStyles}
          baseFontStyle={baseFontStyle}
          contentWidth={width}
          source={{html: htmlContent}}
        />
      </View>
      <View style={[styles.bottomTag, {backgroundColor: promotionCardColor}]} />
    </Pressable>
  );
};
