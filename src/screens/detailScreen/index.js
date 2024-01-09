import React, {useEffect, useState} from 'react';
import {
  View,
  SafeAreaView,
  Image,
  Pressable,
  ActivityIndicator,
  ScrollView,
} from 'react-native';
import styles from './styles';
import {useNavigation} from '@react-navigation/native';
import Back from '../../../assets/svg/back.svg';
import {useDispatch, useSelector} from 'react-redux';
import {getPromotionDetail} from '../../services';
import HTML from 'react-native-render-html';
import {reset} from '../../redux/slice/promotionDetailSlice';
import {dimensions} from '../../utils';
import {Button, Text} from '../../components';
import moment from 'moment';

export const DetailScreen = ({route}) => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const {item} = route.params;
  const promotionDetail = useSelector(state => state.promotionDetail.data);
  const promotionLoading = useSelector(
    state => state.promotionDetail.isLoading,
  );
  const goBack = () => {
    dispatch(reset());
    navigation.goBack();
  };
  useEffect(() => {
    dispatch(getPromotionDetail({id: item.Id}));
  }, []);

  const headerHtmlStyles = {
    p: {
      color: '#000',
      fontSize: 18,
      lineHeight: 20,
      marginTop: 30,
      fontWeight: 'bold',
      marginHorizontal: 10,
    },
    span: {
      color: '#000',
      fontWeight: '700',
      letterSpacing: -0.22,
      marginHorizontal: 10,
    },
  };

  const contentHtmlStyles = {
    p: {
      color: '#000',
      fonstsSize: dimensions.textFontSize,
      lineHeight: 20,
      marginTop: 30,
      marginHorizontal: 20,
    },
    span: {
      color: '#000',
      fontWeight: '700',
      letterSpacing: -0.22,
      marginHorizontal: 10,
    },
  };
  const baseFontStyle = {
    marginHorizontal: 10,
    color: '#000',
    fontSize: 18,
    fontWeight: '700',
    lineHeight: 20,
    letterSpacing: -0.22,
    textAlign: 'center',
  };
  const [remainingDays, setRemainingDays] = useState(null);

  useEffect(() => {
    const targetMoment = moment(item.remainingText, 'DD.MM.YYYY');
    const today = moment();
    const daysRemaining = targetMoment.diff(today, 'days');
    setRemainingDays(daysRemaining);
  }, [item.remainingText]);
  return promotionLoading ? (
    <View style={styles.indicatorContainer}>
      <ActivityIndicator size="large" color="red" />
    </View>
  ) : (
    <SafeAreaView style={styles.root}>
      <ScrollView
        contentContainerStyle={styles.scrollViewContent}
        style={styles.scrollContainer}
        showsVerticalScrollIndicator={false}>
        <Pressable style={styles.backButton} onPress={goBack}>
          <Back />
        </Pressable>
        <Image source={{uri: promotionDetail?.ImageUrl}} style={styles.image} />
        <View style={styles.overlay}>
          <Image
            source={{uri: promotionDetail?.BrandIconUrl}}
            style={styles.icon}
          />
        </View>
        <View style={styles.remainingContainer}>
          <Text style={styles.remainingText}>
            {remainingDays > 0 ? `son ${remainingDays} gün` : 'Son gün'}
          </Text>
        </View>
        <HTML
          allowedStyles={['p', 'span']}
          tagsStyles={headerHtmlStyles}
          baseFontStyle={baseFontStyle}
          contentWidth={dimensions.width}
          source={{html: promotionDetail?.Title}}
        />
        <HTML
          allowedStyles={['p', 'span']}
          tagsStyles={contentHtmlStyles}
          baseFontStyle={baseFontStyle}
          contentWidth={dimensions.width}
          source={{html: promotionDetail?.Description}}
        />
        <HTML
          allowedStyles={['p', 'span']}
          tagsStyles={contentHtmlStyles}
          baseFontStyle={baseFontStyle}
          contentWidth={dimensions.width}
          source={{html: promotionDetail?.Description}}
        />
        <HTML
          allowedStyles={['p', 'span']}
          tagsStyles={contentHtmlStyles}
          baseFontStyle={baseFontStyle}
          contentWidth={dimensions.width}
          source={{html: promotionDetail?.Description}}
        />
        <HTML
          allowedStyles={['p', 'span']}
          tagsStyles={contentHtmlStyles}
          baseFontStyle={baseFontStyle}
          contentWidth={dimensions.width}
          source={{html: promotionDetail?.Description}}
        />
        <HTML
          allowedStyles={['p', 'span']}
          tagsStyles={contentHtmlStyles}
          baseFontStyle={baseFontStyle}
          contentWidth={dimensions.width}
          source={{html: promotionDetail?.Description}}
        />
        <HTML
          allowedStyles={['p', 'span']}
          tagsStyles={contentHtmlStyles}
          baseFontStyle={baseFontStyle}
          contentWidth={dimensions.width}
          source={{html: promotionDetail?.Description}}
        />
        <HTML
          allowedStyles={['p', 'span']}
          tagsStyles={contentHtmlStyles}
          baseFontStyle={baseFontStyle}
          contentWidth={dimensions.width}
          source={{html: promotionDetail?.Description}}
        />
        <HTML
          allowedStyles={['p', 'span']}
          tagsStyles={contentHtmlStyles}
          baseFontStyle={baseFontStyle}
          contentWidth={dimensions.width}
          source={{html: promotionDetail?.Description}}
        />
        <HTML
          allowedStyles={['p', 'span']}
          tagsStyles={contentHtmlStyles}
          baseFontStyle={baseFontStyle}
          contentWidth={dimensions.width}
          source={{html: promotionDetail?.Description}}
        />
        <HTML
          allowedStyles={['p', 'span']}
          tagsStyles={contentHtmlStyles}
          baseFontStyle={baseFontStyle}
          contentWidth={dimensions.width}
          source={{html: promotionDetail?.Description}}
        />
        <HTML
          allowedStyles={['p', 'span']}
          tagsStyles={contentHtmlStyles}
          baseFontStyle={baseFontStyle}
          contentWidth={dimensions.width}
          source={{html: promotionDetail?.Description}}
        />
        <HTML
          allowedStyles={['p', 'span']}
          tagsStyles={contentHtmlStyles}
          baseFontStyle={baseFontStyle}
          contentWidth={dimensions.width}
          source={{html: promotionDetail?.Description}}
        />
        <HTML
          allowedStyles={['p', 'span']}
          tagsStyles={contentHtmlStyles}
          baseFontStyle={baseFontStyle}
          contentWidth={dimensions.width}
          source={{html: promotionDetail?.Description}}
        />
        <HTML
          allowedStyles={['p', 'span']}
          tagsStyles={contentHtmlStyles}
          baseFontStyle={baseFontStyle}
          contentWidth={dimensions.width}
          source={{html: promotionDetail?.Description}}
        />
        <HTML
          allowedStyles={['p', 'span']}
          tagsStyles={contentHtmlStyles}
          baseFontStyle={baseFontStyle}
          contentWidth={dimensions.width}
          source={{html: promotionDetail?.Description}}
        />
        <HTML
          allowedStyles={['p', 'span']}
          tagsStyles={contentHtmlStyles}
          baseFontStyle={baseFontStyle}
          contentWidth={dimensions.width}
          source={{html: promotionDetail?.Description}}
        />
        <HTML
          allowedStyles={['p', 'span']}
          tagsStyles={contentHtmlStyles}
          baseFontStyle={baseFontStyle}
          contentWidth={dimensions.width}
          source={{html: promotionDetail?.Description}}
        />
        <HTML
          allowedStyles={['p', 'span']}
          tagsStyles={contentHtmlStyles}
          baseFontStyle={baseFontStyle}
          contentWidth={dimensions.width}
          source={{html: promotionDetail?.Description}}
        />
        <HTML
          allowedStyles={['p', 'span']}
          tagsStyles={contentHtmlStyles}
          baseFontStyle={baseFontStyle}
          contentWidth={dimensions.width}
          source={{html: promotionDetail?.Description}}
        />
        <HTML
          allowedStyles={['p', 'span']}
          tagsStyles={contentHtmlStyles}
          baseFontStyle={baseFontStyle}
          contentWidth={dimensions.width}
          source={{html: promotionDetail?.Description}}
        />
      </ScrollView>
      <Button style={styles.button} title={'Hemen Katıl'} />
    </SafeAreaView>
  );
};
