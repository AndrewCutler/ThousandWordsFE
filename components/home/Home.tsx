import React, { useState } from 'react';
import { Text, View } from 'react-native';
import { Button, Menu } from 'react-native-paper';
import LoginSplash from '../login-splash/LoginSplash';

const Home = (): React.ReactElement => {
  const [visible, setVisible] = useState<boolean>(false);

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <LoginSplash />
      <Text>Welcome home</Text>
      <Menu
        visible={visible}
        onDismiss={() => setVisible(false)}
        anchor={<Button onPress={() => setVisible(true)}>Show menu</Button>}
      >
        <Menu.Item title='Test item' />
      </Menu>
    </View>
  );
};

export default Home;
