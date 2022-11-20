import React, { ReactElement, useState } from 'react';
import { View } from 'react-native';
import {
  Button, Divider, Menu, Portal,
} from 'react-native-paper';
import {
  Actions, useStoreActions,
} from 'easy-peasy';
import { AlbumDTO } from '../../../api/api';

import { IStore } from '../../../store/store';
import NewAlbum from '../../albums/new-album/NewAlbum';

const fakeAlbums: AlbumDTO[] = [
  {
    id: '086a8b89-8a98-4ead-9311-5d70065e84c5',
    userId: 'b14ae11e-d41c-44de-8ff4-b059bf59ea43',
    name: 'my album',
    images: [],
  },
];

const ImageSave = ({ base64, navigation, onClose }: { base64?: string; onClose: () => void; navigation: any; }): ReactElement => {
  const [showNewAlbumForm, setShowNewAlbumForm] = useState<boolean>(false);
  const [showMenu, setShowMenu] = useState<boolean>(false);

  const handleAlbumSelect = (albumId?: string): void => {
    if (albumId) {
      // save to album
    } else {
      // save without album
    }
  };

  const handleNewAlbum = (): void => {
    setShowMenu(false);
    setShowNewAlbumForm(true);
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
        <Divider />
        {fakeAlbums.map(({ name, id }) => (
          <Menu.Item
            key={id}
            title={name}
            onPress={() => handleAlbumSelect(id)}
          />
        ))}
        {fakeAlbums?.length > 0 && <Divider />}
        <Menu.Item title='Create new album' onPress={handleNewAlbum} style={{ backgroundColor: '#039948' }} />
      </Menu>
      <Portal>
        {showNewAlbumForm && <NewAlbum />}
      </Portal>
    </View>
  );
};

export default ImageSave;
