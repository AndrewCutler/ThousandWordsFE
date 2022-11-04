import React, { useState } from 'react';
import { Button, StyleSheet, TextInput, View } from 'react-native';
import { authenticate } from '../../services/authentication';

const styles = StyleSheet.create({
  textInput: {
    height: 40,
    margin: 12,
    padding: 8,
    borderWidth: 1,
    borderRadius: 5,
  },
});

const LoginSplash = ({ navigation }): React.ReactElement => {
  const [password, setPassword] = useState<string>('');
  const [username, setUsername] = useState<string>('');

  const handleLogin = async () => {
    await authenticate(username, password);
    navigation.navigate('Home');
  };

  const handleRegister = () => console.log('register');

  return (
    <View>
      <TextInput
        style={styles.textInput}
        value={username}
        placeholder='Username'
        onChangeText={(text) => setUsername(text)}
      />
      <TextInput
        value={password}
        placeholder='Password'
        style={styles.textInput}
        onChangeText={(text) => setPassword(text)}
        secureTextEntry
      />
      <Button title='Login' onPress={handleLogin} />
      <Button title='Register' onPress={handleRegister} />
    </View>
  );
};

export default LoginSplash;
