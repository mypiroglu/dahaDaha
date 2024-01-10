import React, {useEffect, useState} from 'react';
import {SafeAreaView, View, FlatList, Dimensions} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {getCategories, getPromotions} from '../../services';
import {CategoryCard, Header, CarouselCard} from '../../components';
import styles from './styles';
import Carousel, {Pagination} from 'react-native-snap-carousel';
import {useNavigation} from '@react-navigation/native';

export const HomeScreen = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const categories = useSelector(state => state.categories);
  const promotions = useSelector(state => state.promotions);
  const [selectedCategory, setSelectedCategory] = useState();
  const [currentPage, setCurrentPage] = useState(0);

  useEffect(() => {
    dispatch(getCategories());
    dispatch(getPromotions());
  }, []);

  const onCategorySelect = item => {
    setSelectedCategory(item.Id);
  };
  const pagination = (
    <Pagination
      dotsLength={promotions?.data?.length}
      activeDotIndex={currentPage}
      dotStyle={styles.dotStyle}
      inactiveDotOpacity={0.4}
      inactiveDotScale={0.6}
    />
  );
  const renderCategory = ({item}) => {
    return (
      <CategoryCard
        title={item.Name}
        url={item.IconUrl}
        selected={item.Id === selectedCategory}
        onPress={() => onCategorySelect(item)}
      />
    );
  };

  const renderItem = ({item, index}, parallaxProps) => {
    return (
      <CarouselCard
        onPress={() => onCardPress(item)}
        title={item.Title}
        url={item.ImageUrl}
        icon={item.BrandIconUrl}
        promotionCardColor={item.PromotionCardColor}
        remainingText={item.RemainingText}
      />
    );
  };

  const onCardPress = item => {
    navigation.navigate('detail-screen', {item: item});
  };
  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <View>
        <FlatList
          showsHorizontalScrollIndicator={false}
          horizontal={true}
          data={categories.data}
          renderItem={({item}) => renderCategory({item})}
        />
      </View>

      <Carousel
        sliderWidth={Dimensions.get('window').width}
        sliderHeight={Dimensions.get('window').height}
        itemWidth={Dimensions.get('window').width * 0.8}
        data={promotions.data}
        renderItem={renderItem}
        hasParallaxImages={true}
        onSnapToItem={index => setCurrentPage(index)}
        loop={true}
        autoplay={true}
      />
      <View style={styles.paginationContainer}>{pagination}</View>
    </SafeAreaView>
  );
};
