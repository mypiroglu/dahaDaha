import React from 'react';
import {View, StyleSheet, StatusBar} from 'react-native';
import {Provider} from 'react-redux';
import {store} from './src/redux/store';
import AppStack from './src/navigators/appStack';
import {colors} from './src/utils';

const App = () => {
  StatusBar.setHidden(true);
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
    backgroundColor: colors.white,
  },
});
export default App;
