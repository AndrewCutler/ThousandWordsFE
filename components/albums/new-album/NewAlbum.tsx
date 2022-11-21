import { useMutation } from '@tanstack/react-query';
import React, { ReactElement, useState } from 'react';
import { Text, TextInput, View } from 'react-native';
import { Button } from 'react-native-paper';
import { createAlbum } from '../../../api/queries';

const NewAlbum = (): ReactElement => {
  const {
    // eslint-disable-next-line no-unused-vars, @typescript-eslint/no-unused-vars
    mutate, isLoading, isError, isSuccess,
  } = useMutation(createAlbum);

  const [name, setName] = useState<string>('');

  const handleSave = ():void => {
    console.log('save album');
    mutate({ name, userId: '' });
  };

  return (
    <View style={{
      flex: 1,
      backgroundColor: 'white',
      padding: 20,
      alignItems: 'center',
    }}
    >
      <Text>New album</Text>
      <TextInput label='Album name' value={name} onChangeText={(text) => setName(text)} />
      <Button disabled={name?.length < 4} onPress={handleSave}>Save</Button>
    </View>
  );
};

export default NewAlbum;
