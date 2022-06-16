import { useEffect, useRef, useState } from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';

import { Camera, CameraType } from 'expo-camera';
import IconCamera from '../Components/svg/IconCamera';
import IconClose from '../Components/svg/IconClose';
import { MaterialCommunityIcons } from '@expo/vector-icons'; 
import routes from '../routes';
import styled from 'styled-components/native';

const Flip = styled.Pressable `
  height: 60px;
  width: 60px;
  margin-bottom: auto;
  margin-top: 12%;
  margin-right: 6.5%;
  background: rgba(1, 1, 1, .3);
  border-radius: 200px;
`;

const Close = styled.Pressable `
  height: 60px;
  width: 60px;
  margin-bottom: auto;
  margin-top: 12%;
  margin-left: 6.5%;
  background: rgba(1, 1, 1, .3);
  border-radius: 200px;
`;

const Snap = styled.Pressable `
  height: 60px;
  margin-bottom: 6.5%;
  margin-top: auto;
  margin-right: 4%;
  margin-left: 4%;
  background: rgba(1, 1, 1, .3);
  border-radius: 200px; 
`;

const TopButtonSlot = styled.View `
  flex-direction: row; 
  justify-content: space-between;
`;

const Img = styled.Image `
  height: 120px;
  width: 120px;
  border-radius: 8px;
  margin-top: 12%;
`;


const Camera_ = ( props: { setRoute: (route: routes) => void } ) => {

    const camera = useRef<Camera|undefined|null>();
    const [hasPermission, setHasPermission] = useState<boolean|null>(null);
    const [ photo, setPhoto ] = useState<string|null>(null);
    const [type, setType] = useState<CameraType>(CameraType.back);

    const snapPhoto = async () => {       
      if ( camera ) {
        await camera.current?.takePictureAsync({ 
          quality: 1, 
          base64: true, 
          exif: true,

        }).then( photo => {
            photo.exif.Orientation = 1;  
            setPhoto(photo.uri);          
          });     
       }
    }

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
        <Camera 
          type={type} 
          style={styles.view}
          ref={ ref => camera.current = ref }
        >
          <TopButtonSlot>

            <Close>

              <IconClose 
                color="white" 
                style={ styles.flip } 
                onPress={ () => { props.setRoute(routes.home); console.log("toHome...")} }
              />

            </Close>

            { photo && <Img source={{ uri: photo }} /> }

            <Flip
              onPress={ () => {
                setType(type === CameraType.back ? CameraType.front : CameraType.back);
                console.log("flip...")
              }}
            >
              <MaterialCommunityIcons name="camera-flip" size={30} color="white" style={ styles.flip } />
            </Flip>     

          </TopButtonSlot>

          <Snap onPress={ snapPhoto }>
            <IconCamera style={ styles.camIcon } color="#fff" />
          </Snap>
        </Camera>
      </View>
    );
};

const styles = StyleSheet.create({
  view: {
    width: "100%",
    height: "100%",
  },
  flip: {
    marginTop: "auto",
    marginBottom: "auto",
    alignSelf: "center"
  },
  camIcon: {
    alignSelf: "center",
    marginTop: "auto",
    marginBottom: "auto",
    transform: [{scale: 1.4}]
  }
});

export default Camera_;


