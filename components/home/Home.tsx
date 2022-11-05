import React from 'react';
import { Text, View } from 'react-native';
import LoginSplash from '../login-splash/LoginSplash';

const Home = (): React.ReactElement => {
  return (
    <View>
      <LoginSplash />
      <Text>{}</Text>
    </View>
  );
};

export default Home;
