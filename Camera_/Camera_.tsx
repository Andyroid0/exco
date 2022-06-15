import { useEffect, useState } from 'react';
import { Camera, CameraType } from 'expo-camera';
import { Pressable, Text, View } from 'react-native';

const Camera_ = () => {

    const [hasPermission, setHasPermission] = useState<boolean|null>(null);
    const [type, setType] = useState<CameraType>(CameraType.back);

    useEffect( () => {
        ( async () => {
            const { status } = await Camera.requestCameraPermissionsAsync();
            setHasPermission( status === 'granted' );
          }
        )();
      }, []);

      if (hasPermission === null) {
        return <View />;
      }
      if (hasPermission === false) {
        return <Text>No access to camera</Text>;
      }

    return(
      <View>
        <Camera type={type}>
          <View>
            <Pressable
              onPress={() => {
                setType(type === CameraType.back ? CameraType.front : CameraType.back);
              }}>
              <Text> Flip </Text>
            </Pressable>
          </View>
        </Camera>
      </View>
    );
};

export default Camera_;


