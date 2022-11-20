import { CameraCapturedPicture } from 'expo-camera';
import React, { ReactElement } from 'react';
import { ImageBackground, View } from 'react-native';
import { Button, Modal, Portal } from 'react-native-paper';
import ImageSave from '../../image/image-save/ImageSave';

const CameraPreview = ({
  photo,
  onDiscard,
}: {
  photo?: CameraCapturedPicture;
  onDiscard: () => void;
}): ReactElement => (
  <Portal>
    <Modal visible={!!photo} contentContainerStyle={{ backgroundColor: 'white', padding: 20, height: '75%' }}>
      <ImageBackground
        source={{ uri: photo?.uri }}
        style={{
          flex: 1,
        }}
      />
      <Button color='red' onPress={onDiscard}>
        Discard
      </Button>
      <ImageSave base64={photo?.base64} />
    </Modal>
  </Portal>
);

export default CameraPreview;
