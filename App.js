import React from 'react';
import {View, StyleSheet} from 'react-native';
import {Provider} from 'react-redux';
import {store} from './src/redux/store';
import AppStack from './src/navigators/appStack';

const App = () => {
  return (
    <View style={style.root}>
      <Provider store={store}>
        <AppStack />
      </Provider>
    </View>
  );
};

const style = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: 'white',
  },
});
export default App;
