import { CameraCapturedPicture } from 'expo-camera';
import React, { ReactElement, useState, useEffect } from 'react';
import { ImageBackground, View } from 'react-native';
import { Button, Modal, Portal } from 'react-native-paper';
import ImageSave from '../../image/image-save/ImageSave';

const CameraPreview = ({
  photo,
  onDiscard,
  navigation,
}: {
  photo?: CameraCapturedPicture;
  onDiscard: () => void;
  navigation: any;
}): ReactElement => {
  const [visible, setVisible] = useState<boolean>(false);

  const handleClose = (): void => setVisible(false);

  useEffect(() => {
    setVisible(!!photo);
  }, [photo]);

  return (
    <Portal>
      <Modal visible={visible} contentContainerStyle={{ backgroundColor: 'white', padding: 20, height: '75%' }}>
        <ImageBackground
          source={{ uri: photo?.uri }}
          style={{
            flex: 1,
          }}
        />
        <Button color='red' onPress={onDiscard}>
          Discard
        </Button>
        <ImageSave base64={photo?.base64} navigation={navigation} onClose={handleClose} />
      </Modal>
    </Portal>
  );
};

export default CameraPreview;
