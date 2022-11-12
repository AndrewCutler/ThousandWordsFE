import React, { ReactElement, ReactNode } from 'react';
import { View } from 'react-native';
import { Menu, TextInput } from 'react-native-paper';
import { AlbumDTO } from '../../../api/api';

const fakeAlbums: AlbumDTO[] = [];

const ImageSave = ({
  base64,
  anchor,
}: {
  base64?: string;
  anchor: ReactNode;
}): ReactElement => {
  const handleAlbumSelect = (albumId?: string): void => {
    if (albumId) {
      // save to album
    } else {
      // save without album
    }
  };

  return (
    <View style={{ paddingTop: 50 }}>
      <Menu visible={!!base64} onDismiss={undefined} anchor={anchor}>
        <Menu.Item title='None' onPress={() => handleAlbumSelect()} />
        {fakeAlbums.map(({ name, id }) => {
          return (
            <Menu.Item
              key={id}
              title={name}
              onPress={() => handleAlbumSelect(id)}
            />
          );
        })}
      </Menu>
    </View>
  );
};

export default ImageSave;
