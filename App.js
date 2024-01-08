import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import CocaCola from './assets/svg/cocaCola.svg';

const App = () => {
  return (
    <View style={styles.container}>
      <Text style={{fontSize: 20, fontWeight: 'bold'}}>Trapezoid</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default App;
