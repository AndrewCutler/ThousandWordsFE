import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';

const styles = StyleSheet.create({
  textInput: {
    height: 40,
    margin: 12,
    padding: 8,
    borderWidth: 1,
    borderRadius: 5,
  },
});

const LoginSplash = () => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);

  const [password, setPassword] = useState<string>('');
  const [username, setUsername] = useState<string>('');

  if (!isAuthenticated) {
    return (
      <View>
        <Text>Sign up</Text>
        <TextInput
          style={styles.textInput}
          value={username}
          placeholder='Username'
          onChangeText={(text) => setUsername(text)}
        />
        <TextInput
          value={password}
          style={styles.textInput}
          placeholder='Password'
          onChangeText={(text) => setPassword(text)}
          secureTextEntry
        />
      </View>
    );
  }

  return (
    <View>
      <Text>Sign up</Text>
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
    </View>
  );
};

export default LoginSplash;
