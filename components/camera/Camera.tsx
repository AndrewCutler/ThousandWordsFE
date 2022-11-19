import React, { useEffect, useState } from 'react';
import { TouchableOpacity, View, Alert } from 'react-native';
import {
  Camera as ExpoCamera,
  CameraCapturedPicture,
  CameraType,
} from 'expo-camera';
import { Button } from 'react-native-paper';
import { useIsFocused } from '@react-navigation/native';
import { PermissionStatus as EPermissionStatus } from 'expo-modules-core/src/PermissionsInterface';
import CameraPreview from './camera-preview/CameraPreview';

const Camera = ({ navigation }): React.ReactElement => {
  const [imageData, setImageData] = useState<
    CameraCapturedPicture | undefined
  >();
  const [showCamera, setShowCamera] = useState<boolean>(false);
  const [status, setStatus] = useState<EPermissionStatus>();
  const [type, setType] = useState<CameraType>(CameraType.front);

  let camera: ExpoCamera;

  const isFocused = useIsFocused();

  useEffect(() => {
    void (async () => {
      const { status: cameraStatus } =
        await ExpoCamera.requestCameraPermissionsAsync();
      setStatus(cameraStatus);
    })();

    if (!isFocused) {
      setShowCamera(false);
    }
  }, [isFocused]);

  const handleShowCamera = async (): Promise<void> => {
    if (status === EPermissionStatus.GRANTED) {
      setShowCamera(true);
    } else {
      Alert.alert('Permission required to open camera.');
    }
  };

  const handleFlip = (): void => {
    setType((prev) => {
      if (prev === CameraType.back) {
        return CameraType.front;
      }

      return CameraType.back;
    });
  };

  const handleTakePicture = async (): Promise<void> => {
    const image: CameraCapturedPicture = await camera.takePictureAsync({
      base64: true,
    });

    setImageData(image);
  };

  const handleDismiss = (): void => {
    navigation.navigate('Home');
  };

  const handleDiscard = (): void => {
    setImageData(undefined);
  };

  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      {showCamera ? (
        <View
          style={{
            flex: 0.75,
            width: '85%',
          }}
        >
          <ExpoCamera
            style={{
              flex: 5,
            }}
            type={type}
            ref={(r) => {
              camera = r;
            }}
          />
          <View
            style={{
              flex: 1,
              marginTop: 15,
            }}
          >
            <TouchableOpacity
              onPress={handleTakePicture}
              style={{
                width: '100%',
                flexDirection: 'row',
                justifyContent: 'center',
              }}
            >
              <Button color='green' onPress={handleFlip}>
                Flip
              </Button>
              <Button onPress={handleTakePicture}>Take picture</Button>
              <Button color='red' onPress={handleDismiss}>
                Close
              </Button>
            </TouchableOpacity>
          </View>
        </View>
      ) : (
        <Button onPress={handleShowCamera}>Show camera</Button>
      )}
      <CameraPreview photo={imageData} onDiscard={handleDiscard} />
    </View>
  );
};

export default Camera;
