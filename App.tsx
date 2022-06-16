import Camera_ from './Camera_/Camera_';
import Constants from 'expo-constants';
import Home from './Home/Home';
import routes from './routes';
import { StatusBar } from 'expo-status-bar';
import { Text } from 'react-native';
import { useState } from 'react';


import { 
  useFonts, 
  Rubik_300Light, 
  Rubik_300Light_Italic, 
  Rubik_400Regular, 
  Rubik_400Regular_Italic, 
  Rubik_500Medium, 
  Rubik_500Medium_Italic, 
  Rubik_600SemiBold,
  Rubik_600SemiBold_Italic,
  Rubik_700Bold,
  Rubik_700Bold_Italic,
  Rubik_800ExtraBold,
  Rubik_800ExtraBold_Italic,
  Rubik_900Black,
  Rubik_900Black_Italic,
} from '@expo-google-fonts/rubik';


const App = () => {

  let [ fontsLoaded ] = useFonts({
    Rubik_300Light, 
    Rubik_300Light_Italic, 
    Rubik_400Regular, 
    Rubik_400Regular_Italic, 
    Rubik_500Medium, 
    Rubik_500Medium_Italic, 
    Rubik_600SemiBold,
    Rubik_600SemiBold_Italic,
    Rubik_700Bold,
    Rubik_700Bold_Italic,
    Rubik_800ExtraBold,
    Rubik_800ExtraBold_Italic,
    Rubik_900Black,
    Rubik_900Black_Italic
  });

  const [ route, setRoute ] = useState<routes>(routes.home);

  const apiKey = Constants?.manifest?.extra?.MAPS_API;

  if ( !fontsLoaded ) {
    return <Text>Loading...</Text>;
  }

  return (
    <>  
      {
        route === routes.home ?

          <Home setRoute={ setRoute } apiKey={apiKey} />

        :

        route === routes.camera ?

          <Camera_ setRoute={ (route: routes) => setRoute(route) }/>

        : null
      }
        <StatusBar style="auto" />
    </>
  );
}


export default App;
