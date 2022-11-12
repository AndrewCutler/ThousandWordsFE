import { CameraCapturedPicture } from 'expo-camera';
import React, { ReactElement } from 'react';
import { ImageBackground, Modal, View } from 'react-native';
import { Button } from 'react-native-paper';

const CameraPreview = ({
  photo,
  onDiscard,
}: {
  photo: CameraCapturedPicture;
  onDiscard: () => void;
}): ReactElement => {
  return (
    <View style={{ flex: 0.75, width: '75%' }}>
      <Modal
        animationType='slide'
        visible={!!photo}
        presentationStyle='pageSheet'
      >
        <ImageBackground
          source={{ uri: photo && photo.uri }}
          style={{
            flex: 1,
          }}
        />
        <View
          style={{
            flex: 1,
            alignItems: 'center',
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}
        >
          <Button color='red' onPress={onDiscard}>
            Discard
          </Button>
          <Button>Save to album</Button>
        </View>
      </Modal>
    </View>
  );
};

export default CameraPreview;
