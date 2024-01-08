import React, {useState} from 'react';
import {View} from 'react-native';
import styles from './styles';
import {Profile, Button} from '..';
import DahaDaha from '../../../assets/svg/dahaDaha.svg';
export const Header = () => {
  const [loginState, setLoginState] = useState(false);
  const onHandleLogin = () => {
    setLoginState(!loginState);
  };

  return (
    <View style={styles.container}>
      <DahaDaha />
      <View style={styles.profileContainer}>
        {!loginState && <Button title="Giriş Yap" onPress={onHandleLogin} />}
        <Profile loginState={loginState} onPress={onHandleLogin} />
      </View>
    </View>
  );
};
