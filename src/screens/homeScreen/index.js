import React, {useEffect} from 'react';
import {SafeAreaView, View, FlatList} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {getCategories} from '../../services';
import {CategoryCard, Text, Header} from '../../components';
import styles from './styles';

export const HomeScreen = () => {
  const dispatch = useDispatch();
  const categories = useSelector(state => state.categories);
  useEffect(() => {
    dispatch(getCategories());
  }, []);
  useEffect(() => {
    console.log('--------------------');
    console.log(categories);
    console.log('--------------------');
  }, [categories]);
  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <Text>HomeScreen</Text>
      <FlatList
        showsHorizontalScrollIndicator={false}
        horizontal={true}
        data={categories.data}
        renderItem={({item}) => (
          <CategoryCard title={item.Name} url={item.IconUrl} selected={true} />
        )}
      />
    </SafeAreaView>
  );
};
