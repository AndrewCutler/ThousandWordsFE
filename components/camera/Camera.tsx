import React, { useEffect, useState } from 'react';
import { TouchableOpacity, Text, View } from 'react-native';
import { Camera as ExpoCamera, CameraType } from 'expo-camera';
import { Button } from 'react-native-paper';

const Camera = (): React.ReactElement => {
  const [showCamera, setShowCamera] = useState<boolean>(false);
  const [type, setType] = useState<CameraType>(CameraType.front);
  const [permission, requestPermission] = ExpoCamera.useCameraPermissions();

  const handlePress = async (): Promise<void> => {
    const { status } = await ExpoCamera.requestCameraPermissionsAsync();

    if (status === 'granted') {
      setShowCamera(true);
    }
  };

  useEffect(() => {
    console.log(showCamera);
  }, [showCamera]);

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Button onPress={handlePress}>Show camera</Button>
      {showCamera && (
        <ExpoCamera style={{ flex: 1 }} type={type}>
          <View
            style={{
              flex: 1,
              backgroundColor: 'transparent',
              flexDirection: 'row',
            }}
          >
            <TouchableOpacity>
              <Text>asdfsd</Text>
            </TouchableOpacity>
          </View>
        </ExpoCamera>
      )}
    </View>
  );
};

export default Camera;
