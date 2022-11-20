import React, { ReactElement, ReactNode, useState } from 'react';
import { View } from 'react-native';
import { Button, Menu } from 'react-native-paper';
import { AlbumDTO } from '../../../api/api';

const fakeAlbums: AlbumDTO[] = [];

const ImageSave = ({ base64 }: { base64?: string }): ReactElement => {
  const [showMenu, setShowMenu] = useState<boolean>(false);

  const handleAlbumSelect = (albumId?: string): void => {
    if (albumId) {
      // save to album
    } else {
      // save without album
    }
  };

  return (
    <View>
      <Menu
        visible={showMenu}
        onDismiss={() => setShowMenu(false)}
        anchor={
          <Button onPress={() => setShowMenu(true)}>Save to album</Button>
        }
      >
        <Menu.Item title='None' onPress={() => handleAlbumSelect()} />
        {fakeAlbums.map(({ name, id }) => (
          <Menu.Item
            key={id}
            title={name}
            onPress={() => handleAlbumSelect(id)}
          />
        ))}
      </Menu>
    </View>
  );
};

export default ImageSave;
