import React, {useEffect} from 'react';
import {
  SafeAreaView,
  View,
  FlatList,
  StyleSheet,
  Dimensions,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {getCategories, getPromotions} from '../../services';
import {CategoryCard, Text, Header, CarouselCard} from '../../components';
import styles from './styles';
import Carousel, {ParallaxImage} from 'react-native-snap-carousel';

export const HomeScreen = () => {
  const data = [
    {
      id: '1',
      image:
        'https://www.klasiksanatlar.com/img/sayfalar/b/1_1598452306_resim.png',
      title: 'Item 1',
    },
    {
      id: '2',
      image:
        'https://www.klasiksanatlar.com/img/sayfalar/b/1_1598452306_resim.png',
      title: 'Item 2',
    },
    {
      id: '3',
      image:
        'https://www.klasiksanatlar.com/img/sayfalar/b/1_1598452306_resim.png',
      title: 'Item 3',
    },
    // Add more items as needed
  ];
  const dispatch = useDispatch();
  const categories = useSelector(state => state.categories);
  const promotions = useSelector(state => state.promotions);
  useEffect(() => {
    dispatch(getCategories());
    dispatch(getPromotions());
  }, []);

  const renderCategory = ({item}) => {
    return (
      <CategoryCard title={item.Name} url={item.IconUrl} selected={true} />
    );
  };

  const renderItem = ({item, index}, parallaxProps) => {
    return (
      <CarouselCard
        title={item.Title}
        url={item.ImageUrl}
        icon={item.BrandIconUrl}
      />
    );
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
      />
    </SafeAreaView>
  );
};
const style = StyleSheet.create({
  item: {
    width: Dimensions.get('window').width - 60,
    height: Dimensions.get('window').height / 2,
    borderRadius: 8,
    backgroundColor: 'white',
  },
  imageContainer: {
    flex: 1,
    borderRadius: 8,
  },
  image: {
    ...StyleSheet.absoluteFillObject,
    resizeMode: 'cover',
  },
  title: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    padding: 16,
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    color: 'white',
    textAlign: 'center',
    fontSize: 18,
    borderRadius: 8,
  },
});
