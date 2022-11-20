import React, { ReactElement, useState } from 'react';
import { Text, TextInput, View } from 'react-native';

const NewAlbum = (): ReactElement => {
  const [name, setName] = useState<string>('');

    <View style={{
      flex: 1, backgroundColor: 'white', padding: 20, alignItems: 'center',
    }}
    >
      <Text>New album</Text>
      <TextInput label='Album name' value={name} onChangeText={(text) => setName(text)} />
    </View>;
};

export default NewAlbum;
