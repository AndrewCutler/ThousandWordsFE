import { CameraCapturedPicture } from 'expo-camera';
import React, { ReactElement } from 'react';
import { ImageBackground, View } from 'react-native';

const CameraPreview = ({
  photo,
}: {
  photo: CameraCapturedPicture;
}): ReactElement => {
  if (!photo) {
    return <></>;
  }

  return (
    <View
      style={{
        flex: 1,
        width: '100%',
        height: '100%',
      }}
    >
      <ImageBackground
        source={{ uri: photo && photo.uri }}
        style={{
          flex: 1,
        }}
      />
    </View>
  );
};

export default CameraPreview;
