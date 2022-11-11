import React, { useEffect, useState } from 'react';
import { TouchableOpacity, Text, View } from 'react-native';
import { Camera, CameraType } from 'expo-camera';
import { Button } from 'react-native-paper';

const Add = (): React.ReactElement => {
  const [showCamera, setShowCamera] = useState<boolean>(false);
  const [type, setType] = useState<CameraType>(CameraType.front);
  const [permission, requestPermission] = Camera.useCameraPermissions();

  const handlePress = async (): Promise<void> => {
    const { status } = await Camera.requestCameraPermissionsAsync();

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
        <Camera style={{ flex: 1 }} type={type}>
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
        </Camera>
      )}
    </View>
  );
};

export default Add;
