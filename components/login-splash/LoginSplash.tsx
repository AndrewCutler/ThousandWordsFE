import React, { useEffect, useState } from 'react';
import { Button, Modal, StyleSheet, TextInput, View } from 'react-native';
import { Actions, State, useStoreActions, useStoreState } from 'easy-peasy';
import { IStore } from '../../store/store';
import { useQuery } from '@tanstack/react-query';
import Config from 'react-native-config';
import { getImageById } from '../../api/queries';

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  textInput: {
    height: 40,
    margin: 12,
    padding: 8,
    borderWidth: 1,
    borderRadius: 5,
  },
});

const LoginSplash = (): React.ReactElement => {
  // TODO: createTypedActions
  const login = useStoreActions((actions: Actions<IStore>) => actions.login);
  const isAuthenticated = useStoreState(
    (state: State<IStore>) => state.isAuthenticated
  );

  const { status, data, error, isFetching } = useQuery(
    getImageById('89e67008-777d-40f4-6e84-08dab907ab80')
  );

  useEffect(() => {
    // console.log(data, isFetching);
  }, [status, data, error, isFetching]);

  const [password, setPassword] = useState<string>('');
  const [username, setUsername] = useState<string>('');

  const handleLogin = (): void => {
    if (username && password) {
      login({ username, password });
    }
  };

  const handleRegister = (): void => console.log('register');

  return (
    <View style={styles.container}>
      <Modal
        animationType='slide'
        visible={!isAuthenticated}
        presentationStyle='fullScreen'
      >
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
      </Modal>
    </View>
  );
};

export default LoginSplash;
